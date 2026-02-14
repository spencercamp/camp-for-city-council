"use client";

import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ENDORSEMENTS } from "@/lib/constants";

export function Endorsements() {
  return (
    <section id="endorsements" className="py-20 lg:py-28 bg-navy">
      <Container>
        <SectionHeading light>{ENDORSEMENTS.heading}</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENDORSEMENTS.items.map((endorser, i) => (
            <AnimatedSection key={endorser.name} delay={i * 0.15}>
              <div className="rounded-xl bg-white p-8 text-center shadow-lg">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber/10">
                  <Quote className="h-6 w-6 text-amber" />
                </div>
                <h3 className="text-xl font-bold text-navy">{endorser.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{endorser.title}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
