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
        <SectionHeading>{ABOUT.heading}</SectionHeading>

        {/* Bio text */}
        <AnimatedSection>
          <div className="max-w-3xl space-y-5 mb-16">
            {ABOUT.bio.map((paragraph, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>

        {/* Stat strip */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16 md:mb-20">
            {ABOUT.stats.map((stat, i) => (
              <div
                key={i}
                className={`py-6 px-4 text-center ${
                  i < ABOUT.stats.length - 1 ? "md:border-r md:border-gray-200" : ""
                }`}
              >
                <p className="text-2xl md:text-3xl font-bold text-blue">{stat.number}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Asymmetric image grid */}
        <AnimatedSection>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7">
              <Image
                src="/images/couple.jpg"
                alt="Steve Camp with his wife"
                width={800}
                height={600}
                className="w-full h-72 md:h-96 object-cover rounded-md"
              />
            </div>
            <div className="col-span-6 md:col-span-5 mt-0 md:mt-8">
              <Image
                src="/images/family-1.jpg"
                alt="Steve Camp with family"
                width={500}
                height={400}
                className="w-full h-56 md:h-72 object-cover rounded-md"
              />
            </div>
            <div className="col-span-6 md:col-span-4 md:-mt-16">
              <Image
                src="/images/surfing.jpg"
                alt="Steve Camp surfing"
                width={400}
                height={300}
                className="w-full h-48 md:h-56 object-cover rounded-md"
              />
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
