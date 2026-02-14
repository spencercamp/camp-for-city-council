"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ACTION_STRIP } from "@/lib/constants";

export function ActionStrip() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/surfing.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Navy overlay */}
      <div className="absolute inset-0 bg-navy-dark/85" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {ACTION_STRIP.heading}
          </h2>
          <div className="w-16 h-1 bg-amber rounded-full" />
          <Button href={ACTION_STRIP.ctaHref} variant="primary" size="lg">
            {ACTION_STRIP.cta}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
