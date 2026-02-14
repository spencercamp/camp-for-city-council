"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CAMPAIGN_STRIP } from "@/lib/constants";

export function CampaignStrip() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-navy-dark via-navy to-navy-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {CAMPAIGN_STRIP.heading}
          </h2>
          <div className="w-16 h-1 bg-red rounded-full" />
          <Button href={CAMPAIGN_STRIP.ctaHref} variant="primary" size="lg">
            {CAMPAIGN_STRIP.cta}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
