"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO, ENDORSEMENTS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-blue-dark">
      {/* Base layered gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue-dark to-[#0F2540]" />

      {/* Coral atmospheric glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] -top-[12%] h-[65%] w-[55%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(230,57,70,0.55) 0%, transparent 60%)",
          filter: "blur(70px)",
        }}
      />

      {/* Cool atmospheric glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[8%] bottom-[5%] h-[55%] w-[55%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(69,123,157,0.4) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Dotted grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 flex min-h-screen w-full items-center px-6 py-28 sm:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left column */}
          <div className="lg:col-span-7">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] py-1.5 pl-1.5 pr-5 ring-1 ring-white/15 backdrop-blur"
            >
              <span className="rounded-full bg-red px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_4px_14px_-2px_rgba(230,57,70,0.6)]">
                Nov 2026
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/90">
                San Clemente · District 1
              </span>
            </motion.div>

            {/* Name lockup */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-heading text-[clamp(2.5rem,7.5vw,6rem)] font-bold uppercase leading-[0.85] tracking-[-0.04em] text-white"
            >
              {HERO.name1}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="font-heading text-[clamp(4.5rem,14vw,13rem)] font-bold uppercase leading-[0.78] tracking-[-0.05em] text-white"
            >
              {HERO.name2}
            </motion.h1>

            {/* Eyebrow rule */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span aria-hidden className="h-px w-12 bg-red-light/80" />
              <span className="text-base sm:text-lg lg:text-xl font-semibold uppercase tracking-[0.18em] text-white/90">
                For <span className="text-red-light">San Clemente</span> City Council <span className="text-red-light/70">·</span> District 1
              </span>
            </motion.div>

            {/* Bold tagline statement — stacked serif */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-serif mt-6 max-w-xl text-[clamp(1.125rem,1.8vw,1.5rem)] italic leading-[1.2] tracking-[-0.005em] text-white/90"
            >
              {HERO.tagline
                .split(".")
                .map((s) => s.trim())
                .filter(Boolean)
                .map((line) => (
                  <span key={line} className="block">
                    {line}.
                  </span>
                ))}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button href="#donate" variant="primary" size="lg">
                <span className="flex items-center gap-2">
                  Donate
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              <Button href="#about" variant="outline" size="lg">
                {HERO.cta2}
              </Button>
            </motion.div>

            {/* Endorsement strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5" aria-hidden>
                {ENDORSEMENTS.items.map((endorser, i) => (
                  <span
                    key={endorser.name}
                    className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-[2.5px] ring-blue-dark"
                    style={{ zIndex: ENDORSEMENTS.items.length - i }}
                  >
                    <Image
                      src={endorser.image}
                      alt={endorser.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover object-top"
                    />
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                  Endorsed by
                </p>
                <p className="mt-1 text-sm sm:text-[15px] font-medium text-white/85">
                  Mayor Pro Tem · Former Mayor · Planning Chair
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column — photo + floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative hidden lg:col-span-5 lg:block"
          >
            <div className="relative mx-auto max-w-[28rem]">
              {/* Soft ambient halo */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-red/20 via-transparent to-white/5 blur-3xl"
              />

              {/* Photo */}
              <Image
                src="/images/headshot.jpg"
                alt="Steve Camp"
                width={700}
                height={875}
                className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top shadow-[0_40px_100px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/15"
                priority
              />

            </div>
          </motion.div>

          {/* Mobile photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative lg:hidden"
          >
            <div className="relative mx-auto max-w-sm">
              <Image
                src="/images/headshot.jpg"
                alt="Steve Camp"
                width={600}
                height={750}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top shadow-2xl ring-1 ring-white/10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45 md:flex"
      >
        <span>Scroll</span>
        <span className="block h-px w-8 bg-white/30" aria-hidden />
      </motion.div>
    </section>
  );
}
