"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ENDORSEMENTS } from "@/lib/constants";

export function Endorsements() {
  return (
    <section id="endorsements" className="py-24 lg:py-36 bg-blue-dark relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/10 to-transparent" />

      <Container className="relative z-10">
        <SectionHeading light>{ENDORSEMENTS.heading}</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENDORSEMENTS.items.map((endorser, i) => (
            <AnimatedSection key={endorser.name} delay={i * 0.15}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full flex flex-col">
                {/* Quote mark */}
                <span className="text-5xl text-red/40 font-serif leading-none mb-4">&ldquo;</span>
                <p className="text-lg text-white/85 leading-relaxed flex-1">
                  {endorser.quote}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-bold text-white">{endorser.name}</p>
                  <p className="text-sm text-white/50 mt-1">{endorser.title}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
