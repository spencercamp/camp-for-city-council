"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/constants";
import { useScribbleCanvas } from "@/hooks/useScribbleCanvas";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useScribbleCanvas(sectionRef);

  return (
    <section ref={sectionRef} className="bg-blue-dark min-h-screen flex flex-col justify-center overflow-hidden relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue-dark to-blue/40" />

      {/* Scribble canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[5] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — messaging */}
          <div>
            {/* Campaign badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block text-xs sm:text-sm tracking-[0.2em] text-white/50 uppercase border border-white/15 rounded-full px-4 py-1.5">
                {HERO.badge}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[clamp(3.5rem,10vw,9rem)] font-extrabold leading-[0.85] tracking-tighter text-white uppercase"
            >
              {HERO.name1}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="h-1 bg-red w-32 sm:w-40 my-3 origin-left"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-[clamp(3.5rem,10vw,9rem)] font-extrabold leading-[0.85] tracking-tighter text-white uppercase"
            >
              {HERO.name2}
            </motion.h1>

            {/* Position — large and clear */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-white/70 tracking-wide max-w-md"
            >
              {HERO.subtitle}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-4 text-base sm:text-lg font-semibold text-red-light tracking-wide"
            >
              {HERO.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button href="#donate" variant="primary" size="lg">
                {HERO.cta1}
              </Button>
              <Button href="#about" variant="outline" size="lg">
                {HERO.cta2}
              </Button>
            </motion.div>
          </div>

          {/* Right column — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <Image
                src="/images/couple.jpg"
                alt="Steve and his wife"
                width={700}
                height={875}
                className="w-full max-w-lg mx-auto aspect-[4/5] object-cover object-top rounded-lg shadow-2xl"
                priority
              />
              {/* Accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-red/30 rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Mobile photo — below text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:hidden"
          >
            <Image
              src="/images/couple.jpg"
              alt="Steve and his wife"
              width={600}
              height={750}
              className="w-full max-w-sm aspect-[4/5] object-cover object-top rounded-lg shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
