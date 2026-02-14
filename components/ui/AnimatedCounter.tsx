"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

export function AnimatedCounter({
  value,
  decimals = 0,
  duration = 2,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(latest.toFixed(decimals));
      },
    });

    return () => controls.stop();
  }, [inView, value, decimals, duration]);

  return <span ref={ref}>{display}</span>;
}
