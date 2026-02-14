"use client";

import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ENDORSEMENTS } from "@/lib/constants";

export function Endorsements() {
  return (
    <section id="endorsements" className="py-24 lg:py-36 bg-white">
      <Container>
        <SectionHeading subtitle={ENDORSEMENTS.subheading}>
          {ENDORSEMENTS.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENDORSEMENTS.items.map((endorser, i) => (
            <AnimatedSection key={endorser.name} delay={i * 0.1}>
              <div className="group relative bg-offwhite rounded-xl p-8 text-center overflow-hidden transition-shadow hover:shadow-lg">
                <div className="flex justify-center mb-5">
                  <BadgeCheck className="w-10 h-10 text-amber" />
                </div>
                <h3 className="text-xl font-bold text-blue-dark mb-1">
                  {endorser.name}
                </h3>
                <p className="text-red font-medium text-sm mb-2">
                  {endorser.title}
                </p>
                <p className="text-gray-500 text-sm">{endorser.context}</p>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-red rounded-full transition-all duration-300 group-hover:w-2/3" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
