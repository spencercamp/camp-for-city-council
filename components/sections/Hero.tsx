"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="bg-navy-dark py-16 sm:py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Top area — Logo + Headline */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/logo-campaign.png"
              alt="Steve Camp for City Council"
              width={400}
              height={200}
              className="w-56 sm:w-72 md:w-96 h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight uppercase leading-none"
          >
            {HERO.headline}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 w-24 h-1 bg-red rounded-full"
          />
        </div>

        {/* Bottom area — Two-column: Photo + Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          {/* Left — Circular headshot */}
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden ring-4 ring-white/15 shadow-2xl">
              <Image
                src="/images/headshot.jpg"
                alt="Steve Camp"
                width={500}
                height={500}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Right — Content + CTAs */}
          <div className="text-center md:text-left">
            <p className="text-sm font-bold tracking-[0.2em] text-red uppercase">
              {HERO.subtitle}
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
              {HERO.tagline}
            </h2>

            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-lg mx-auto md:mx-0">
              {HERO.body}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="#donate" variant="primary" size="lg" className="rounded-full">
                {HERO.cta1}
              </Button>
              <Button href="#get-involved" variant="outline" size="lg" className="rounded-full">
                {HERO.cta2}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
