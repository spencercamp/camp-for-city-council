"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ISSUES } from "@/lib/constants";

export function Issues() {
  return (
    <section id="issues" className="py-24 lg:py-36 bg-offwhite">
      <Container>
        <SectionHeading subtitle={ISSUES.subheading}>
          {ISSUES.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ISSUES.items.map((issue, i) => (
            <AnimatedSection key={issue.title} delay={i * 0.05}>
              <div className="bg-white rounded-xl p-8 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <span className="text-4xl font-bold text-red/15 leading-none block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-blue mb-3">{issue.title}</h3>
                <p className="font-serif text-gray-600 leading-relaxed text-sm sm:text-base">{issue.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
