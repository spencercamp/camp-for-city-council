"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — bio */}
          <div className="lg:col-span-7">
            <SectionHeading>{ABOUT.heading}</SectionHeading>

            <AnimatedSection>
              <div className="space-y-5">
                {ABOUT.bio.map((paragraph, i) => (
                  <p key={i} className="font-serif text-lg sm:text-xl text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right column — photo */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <Image
                  src="/images/headshot.jpg"
                  alt="Steve Camp"
                  width={600}
                  height={750}
                  className="w-full aspect-[4/5] object-cover object-top rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stat strip */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 bg-blue-dark rounded-xl overflow-hidden">
            {ABOUT.stats.map((stat, i) => (
              <div
                key={i}
                className={`py-8 px-6 text-center ${
                  i < ABOUT.stats.length - 1 ? "md:border-r md:border-white/10" : ""
                }`}
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Photo grid */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
            <Image
              src="/images/family-1.jpg"
              alt="Steve Camp with family"
              width={500}
              height={400}
              className="w-full h-56 md:h-72 object-cover rounded-lg"
            />
            <Image
              src="/images/family-2.jpg"
              alt="Steve Camp with family"
              width={500}
              height={400}
              className="w-full h-56 md:h-72 object-cover rounded-lg"
            />
            <Image
              src="/images/surfing.jpg"
              alt="Steve Camp surfing"
              width={500}
              height={400}
              className="w-full h-56 md:h-72 object-cover rounded-lg col-span-2 md:col-span-1"
            />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
