"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ENDORSEMENTS } from "@/lib/constants";

export function Endorsements() {
  return (
    <section id="endorsements" className="py-24 lg:py-36 bg-blue-dark">
      <Container>
        <SectionHeading light>{ENDORSEMENTS.heading}</SectionHeading>

        <div>
          {ENDORSEMENTS.items.map((endorser, i) => (
            <AnimatedSection key={endorser.name} delay={i * 0.15}>
              <div className={`py-12 md:py-16 ${
                i < ENDORSEMENTS.items.length - 1 ? "border-b border-white/10" : ""
              }`}>
                <p className="text-2xl md:text-3xl italic text-white/90 leading-relaxed max-w-4xl">
                  &ldquo;{endorser.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <span className="font-bold text-white">{endorser.name}</span>
                  <span className="text-white/60 ml-3">{endorser.title}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
