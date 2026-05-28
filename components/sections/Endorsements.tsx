"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ENDORSEMENTS } from "@/lib/constants";

export function Endorsements() {
  return (
    <section id="endorsements" className="relative bg-offwhite py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow={ENDORSEMENTS.eyebrow}
          subtitle={ENDORSEMENTS.subheading}
          centered
        >
          {ENDORSEMENTS.heading}
        </SectionHeading>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {ENDORSEMENTS.items.map((endorser, i) => (
            <AnimatedSection key={endorser.name} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col items-center rounded-3xl bg-white p-8 text-center ring-1 ring-blue/[0.08] transition-all duration-300 hover:-translate-y-1 hover:ring-blue/15 hover:shadow-[0_24px_60px_-24px_rgba(20,40,68,0.25)] lg:p-10">
                {/* Photo */}
                <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-full ring-2 ring-white shadow-[0_8px_24px_-8px_rgba(20,40,68,0.3)]">
                  <Image
                    src={endorser.image}
                    alt={endorser.name}
                    width={192}
                    height={192}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Name */}
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-blue-dark tracking-tight">
                  {endorser.name}
                </h3>

                {/* Divider */}
                <div className="my-3 h-px w-8 bg-red/40" aria-hidden />

                {/* Title */}
                <p className="font-serif text-[15px] leading-snug text-gray-700">
                  {endorser.title}
                </p>

                {/* Context */}
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-gray-400">
                  {endorser.context}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
