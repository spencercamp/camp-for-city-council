"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="bg-blue-dark min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 py-24 md:py-32">
        {/* Massive name */}
        <div className="mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[clamp(4rem,14vw,16rem)] font-extrabold leading-[0.85] tracking-tighter text-white uppercase"
          >
            {HERO.name1}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="h-0.5 bg-red w-[60%] my-2 md:my-3 origin-left"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[clamp(4rem,14vw,16rem)] font-extrabold leading-[0.85] tracking-tighter text-white uppercase"
          >
            {HERO.name2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-right mt-4 text-sm sm:text-base tracking-[0.15em] text-white/60 lowercase"
          >
            {HERO.subtitle}
          </motion.p>
        </div>

        {/* Asymmetric image pair */}
        <div className="flex gap-4 md:gap-6 items-start max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-[60%]"
          >
            <Image
              src="/images/headshot.jpg"
              alt="Steve Camp"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover object-top rounded-md"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="w-[38%] mt-10 md:mt-16"
          >
            <Image
              src="/images/couple.jpg"
              alt="Steve Camp with his wife"
              width={600}
              height={800}
              className="w-full aspect-[3/4] object-cover rounded-md"
              priority
            />
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4"
        >
          <Button href="#donate" variant="primary" size="lg">
            {HERO.cta1}
          </Button>
          <Button href="#about" variant="outline" size="lg">
            {HERO.cta2}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
