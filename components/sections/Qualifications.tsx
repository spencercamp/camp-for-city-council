"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { QUALIFICATIONS } from "@/lib/constants";

export function Qualifications() {
  return (
    <section id="qualifications" className="py-24 lg:py-36 bg-blue-dark">
      <Container>
        <SectionHeading light centered subtitle={QUALIFICATIONS.subheading}>
          {QUALIFICATIONS.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {QUALIFICATIONS.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group rounded-2xl border-l-2 border-l-red border border-white/[0.08] bg-white/[0.04] p-7 lg:p-9 transition-colors duration-300 hover:bg-white/[0.07]">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
                  {item.value !== null ? (
                    <>
                      <AnimatedCounter
                        value={item.value}
                        decimals={item.value % 1 !== 0 ? 1 : 0}
                      />
                      <span className="text-xl md:text-2xl lg:text-3xl font-normal text-white/50 ml-2">
                        {item.suffix}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl md:text-4xl italic">
                      {item.displayText}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-amber font-semibold text-base uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="mt-2 text-white/60 text-sm lg:text-base leading-relaxed">
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
