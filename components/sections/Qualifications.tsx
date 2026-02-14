"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { QUALIFICATIONS } from "@/lib/constants";

export function Qualifications() {
  return (
    <section id="qualifications" className="py-24 lg:py-36 bg-white">
      <Container>
        <SectionHeading centered subtitle={QUALIFICATIONS.subheading}>
          {QUALIFICATIONS.heading}
        </SectionHeading>

        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {QUALIFICATIONS.items.map((item, i) => {
            const bgText =
              item.value !== null
                ? item.value % 1 !== 0
                  ? item.value.toFixed(1)
                  : String(item.value)
                : "✦";

            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative flex items-center min-h-[180px] md:min-h-[260px] lg:min-h-[320px]">
                  {/* Large faint background number */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold leading-none text-[#f0ece8] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {bgText}
                  </span>

                  {/* Bold descriptive text overlaid */}
                  <p className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight max-w-[75%] ml-[12%] md:ml-[18%]">
                    {item.headline}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
