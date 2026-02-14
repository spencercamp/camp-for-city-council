"use client";

import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ENDORSEMENTS } from "@/lib/constants";

export function Endorsements() {
  return (
    <section id="endorsements" className="py-20 lg:py-32 bg-gradient-to-b from-navy-dark via-navy to-navy-dark">
      <Container>
        <SectionHeading light>{ENDORSEMENTS.heading}</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENDORSEMENTS.items.map((endorser, i) => (
            <AnimatedSection key={endorser.name} delay={i * 0.15}>
              <div className="h-full rounded-xl bg-white p-10 shadow-lg flex flex-col items-center text-center overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-amber to-red" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber/10">
                  <Quote className="h-6 w-6 text-amber" />
                </div>
                <p className="text-lg text-gray-700 italic leading-relaxed mb-6 flex-1">
                  &ldquo;{endorser.quote}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4 w-full">
                  <h3 className="text-lg font-bold text-navy">{endorser.name}</h3>
                  <p className="mt-1 text-gray-500 text-sm">{endorser.title}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
