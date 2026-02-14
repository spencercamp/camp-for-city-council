"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { QUALIFICATIONS } from "@/lib/constants";

export function Qualifications() {
  return (
    <section className="py-24 lg:py-36 bg-blue-dark">
      <Container>
        <SectionHeading light subtitle={QUALIFICATIONS.subheading}>
          {QUALIFICATIONS.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14">
          {QUALIFICATIONS.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="space-y-3">
                <div className="w-10 h-1 bg-red rounded-full" />
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {item.value !== null ? (
                    <>
                      <AnimatedCounter
                        value={item.value}
                        decimals={item.value % 1 !== 0 ? 1 : 0}
                      />
                      <span className="text-2xl md:text-3xl font-medium text-white/70 ml-2">
                        {item.suffix}
                      </span>
                    </>
                  ) : (
                    <span>{item.displayText}</span>
                  )}
                </div>
                <p className="text-amber font-semibold text-sm uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-white/50 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
