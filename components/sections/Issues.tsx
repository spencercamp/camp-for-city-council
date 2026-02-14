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

        <div>
          {ISSUES.items.map((issue, i) => (
            <AnimatedSection key={issue.title} delay={i * 0.05}>
              <div className={`flex items-start gap-6 md:gap-10 py-8 ${
                i < ISSUES.items.length - 1 ? "border-b border-gray-200" : ""
              }`}>
                <span className="text-5xl md:text-6xl font-bold text-red/20 leading-none shrink-0 w-16 md:w-20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-blue mb-2">{issue.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{issue.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
