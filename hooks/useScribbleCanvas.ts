"use client";

import { useRef, useEffect, type RefObject } from "react";

interface ScribbleOptions {
  strokeColor?: string;
  strokeWidth?: number;
  globalAlpha?: number;
  /** Ms of inactivity before strokes fade out */
  fadeDelay?: number;
  /** Duration of the fade-out animation in ms */
  fadeDuration?: number;
}

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[]; // normalized 0-1 coordinates
}

export function useScribbleCanvas(
  containerRef: RefObject<HTMLElement | null>,
  options: ScribbleOptions = {}
) {
  const {
    strokeColor = "#FCA5A5",
    strokeWidth = 48,
    globalAlpha = 0.6,
    fadeDelay = 2000,
    fadeDuration = 800,
  } = options;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // All mutable drawing state in refs to avoid re-renders
  const stateRef = useRef({
    isDrawing: false,
    strokes: [] as Stroke[],
    currentStroke: null as Stroke | null,
    pendingPoints: [] as { x: number; y: number }[],
    rafId: 0,
    dpr: 1,
    enabled: true,
    // Fade-out state
    fadeTimeoutId: 0 as ReturnType<typeof setTimeout> | 0,
    fadeRafId: 0,
    fadeOpacity: 1,
    isFading: false,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const state = stateRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Canvas sizing ---
    function resize() {
      if (!canvas || !ctx || !container) return;
      const rect = container.getBoundingClientRect();
      state.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * state.dpr;
      canvas.height = rect.height * state.dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      redraw();
    }

    // --- Draw all stored strokes ---
    function redraw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const alpha = globalAlpha * state.fadeOpacity;

      for (const stroke of state.strokes) {
        drawStroke(ctx, stroke.points, w, h, alpha);
      }
      if (state.currentStroke && state.currentStroke.points.length > 0) {
        drawStroke(ctx, state.currentStroke.points, w, h, alpha);
      }
    }

    function drawStroke(
      c: CanvasRenderingContext2D,
      points: Point[],
      w: number,
      h: number,
      alpha: number = globalAlpha
    ) {
      if (points.length < 2) return;

      c.save();
      c.globalAlpha = alpha;
      c.strokeStyle = strokeColor;
      c.lineWidth = strokeWidth * state.dpr;
      c.lineCap = "round";
      c.lineJoin = "round";

      c.beginPath();

      // Convert first point from normalized to canvas coords
      const first = { x: points[0].x * w, y: points[0].y * h };
      c.moveTo(first.x, first.y);

      // Draw smooth quadratic Bezier curves through midpoints
      for (let i = 1; i < points.length - 1; i++) {
        const curr = { x: points[i].x * w, y: points[i].y * h };
        const next = { x: points[i + 1].x * w, y: points[i + 1].y * h };
        const midX = (curr.x + next.x) / 2;
        const midY = (curr.y + next.y) / 2;
        c.quadraticCurveTo(curr.x, curr.y, midX, midY);
      }

      // Draw to last point
      const last = points[points.length - 1];
      c.lineTo(last.x * w, last.y * h);
      c.stroke();
      c.restore();
    }

    // --- Batched drawing with rAF ---
    function flushPoints() {
      if (!canvas || !ctx) return;
      state.rafId = 0;

      if (state.pendingPoints.length === 0) return;
      const rect = container!.getBoundingClientRect();

      for (const pt of state.pendingPoints) {
        const nx = (pt.x - rect.left) / rect.width;
        const ny = (pt.y - rect.top) / rect.height;

        if (!state.currentStroke) {
          state.currentStroke = { points: [{ x: nx, y: ny }] };
        } else {
          state.currentStroke.points.push({ x: nx, y: ny });
        }
      }

      state.pendingPoints = [];
      redraw();
    }

    // --- Fade-out logic ---
    function cancelFade() {
      if (state.fadeTimeoutId) {
        clearTimeout(state.fadeTimeoutId);
        state.fadeTimeoutId = 0;
      }
      if (state.fadeRafId) {
        cancelAnimationFrame(state.fadeRafId);
        state.fadeRafId = 0;
      }
      state.isFading = false;
      state.fadeOpacity = 1;
    }

    function scheduleFade() {
      cancelFade();
      // Only schedule if there are strokes to fade
      if (state.strokes.length === 0 && !state.currentStroke) return;

      state.fadeTimeoutId = setTimeout(() => {
        state.fadeTimeoutId = 0;
        startFade();
      }, fadeDelay);
    }

    function startFade() {
      state.isFading = true;
      state.fadeOpacity = 1;
      const start = performance.now();

      function tick(now: number) {
        const elapsed = now - start;
        state.fadeOpacity = Math.max(0, 1 - elapsed / fadeDuration);
        redraw();

        if (state.fadeOpacity > 0) {
          state.fadeRafId = requestAnimationFrame(tick);
        } else {
          // Fade complete — clear all strokes
          state.fadeRafId = 0;
          state.isFading = false;
          state.strokes = [];
          state.currentStroke = null;
          state.fadeOpacity = 1;
          if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      }

      state.fadeRafId = requestAnimationFrame(tick);
    }

    // --- Pointer events on the container ---
    function onPointerMove(e: PointerEvent) {
      if (!state.enabled) return;

      // If fading, cancel it and restore opacity for new drawing
      if (state.isFading) {
        cancelFade();
        redraw();
      }
      // Reset fade timer on every move
      if (state.fadeTimeoutId) {
        clearTimeout(state.fadeTimeoutId);
        state.fadeTimeoutId = 0;
      }

      if (!state.isDrawing) {
        // Start a new stroke on first move inside
        state.isDrawing = true;
        state.currentStroke = null;
      }

      state.pendingPoints.push({ x: e.clientX, y: e.clientY });

      if (!state.rafId) {
        state.rafId = requestAnimationFrame(flushPoints);
      }

      // Reset fade timer — will fire if pointer stops moving
      scheduleFade();
    }

    function onPointerLeave() {
      if (!state.enabled) return;
      state.isDrawing = false;

      // Flush remaining points
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
        state.rafId = 0;
      }
      flushPoints();

      // Commit current stroke to history
      if (state.currentStroke && state.currentStroke.points.length > 1) {
        state.strokes.push(state.currentStroke);
      }
      state.currentStroke = null;

      // Schedule fade after pointer leaves
      scheduleFade();
    }

    // --- Desktop-only media query ---
    const mql = window.matchMedia("(min-width: 1024px)");

    function handleMediaChange(e: MediaQueryList | MediaQueryListEvent) {
      state.enabled = e.matches;
      if (!state.enabled) {
        cancelFade();
        state.strokes = [];
        state.currentStroke = null;
        state.pendingPoints = [];
        state.isDrawing = false;
        if (canvas && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    }

    handleMediaChange(mql);
    mql.addEventListener("change", handleMediaChange);

    // --- ResizeObserver ---
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // --- Attach events ---
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      mql.removeEventListener("change", handleMediaChange);
      ro.disconnect();
      cancelFade();
      if (state.rafId) cancelAnimationFrame(state.rafId);
    };
  }, [containerRef, strokeColor, strokeWidth, globalAlpha, fadeDelay, fadeDuration]);

  return canvasRef;
}
