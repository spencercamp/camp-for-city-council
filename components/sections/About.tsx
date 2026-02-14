"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-36 bg-gradient-to-b from-white via-white to-cream/50">
      <Container>
        <SectionHeading>{ABOUT.heading}</SectionHeading>

        {/* Full-width hero photo */}
        <AnimatedSection>
          <div className="mb-12 lg:mb-16">
            <Image
              src="/images/couple.jpg"
              alt="Steve Camp with his wife"
              width={1200}
              height={500}
              className="rounded-2xl shadow-lg w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </AnimatedSection>

        {/* Asymmetric grid: text 3/5, photos 2/5 */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text — 3 columns */}
          <AnimatedSection className="lg:col-span-3">
            <div className="space-y-5">
              {ABOUT.bio.map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <h3 className="text-xl font-bold text-navy">Qualifications</h3>
              {ABOUT.qualifications.map((qual, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red mt-0.5 shrink-0" />
                  <span className="text-gray-700">{qual}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Photos — 2 columns */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <Image
                src="/images/family-1.jpg"
                alt="Steve Camp with family"
                width={400}
                height={400}
                className="rounded-xl shadow-lg w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
              <Image
                src="/images/surfing.jpg"
                alt="Steve Camp surfing"
                width={400}
                height={400}
                className="rounded-xl shadow-lg w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
