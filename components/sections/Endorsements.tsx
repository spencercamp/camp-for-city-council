"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ENDORSEMENTS } from "@/lib/constants";

export function Endorsements() {
  return (
    <section id="endorsements" className="py-24 lg:py-36 bg-offwhite">
      <Container>
        <SectionHeading centered subtitle={ENDORSEMENTS.subheading}>
          {ENDORSEMENTS.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ENDORSEMENTS.items.map((endorser, i) => (
            <AnimatedSection key={endorser.name} delay={i * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 lg:p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
                {/* Red top accent — always visible */}
                <div className="absolute top-0 inset-x-0 h-1 bg-red" />

                <div className="flex justify-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber fill-amber" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-blue-dark mb-2">
                  {endorser.name}
                </h3>
                <p className="font-serif text-gray-600 font-medium text-sm leading-snug">
                  {endorser.title}
                </p>
                <p className="text-gray-400 text-xs mt-1">{endorser.context}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
