"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ENDORSEMENTS } from "@/lib/constants";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Endorsements() {
  return (
    <section id="endorsements" className="relative py-24 lg:py-36 bg-blue-dark overflow-hidden">
      {/* Gradient glow behind cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(197,48,48,0.12) 0%, rgba(27,58,92,0.08) 50%, transparent 100%)",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading centered light subtitle={ENDORSEMENTS.subheading}>
          {ENDORSEMENTS.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ENDORSEMENTS.items.map((endorser, i) => (
            <AnimatedSection key={endorser.name} delay={i * 0.1}>
              <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 h-full flex flex-col items-center">
                {/* City seal */}
                <div className="mb-5 w-10 h-10 relative opacity-40">
                  <Image
                    src="/images/san-clemente.png"
                    alt="City of San Clemente seal"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Headshot placeholder (initials) */}
                <div className="w-20 h-20 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center mb-5">
                  <span className="text-white/60 text-lg font-bold tracking-wide">
                    {getInitials(endorser.name)}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {endorser.name}
                </h3>

                {/* Title */}
                <p className="font-serif text-white/70 font-medium text-sm leading-snug">
                  {endorser.title}
                </p>

                {/* Context */}
                <p className="text-white/40 text-xs mt-1">{endorser.context}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
