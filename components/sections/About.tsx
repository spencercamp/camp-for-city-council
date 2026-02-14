"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading>{ABOUT.heading}</SectionHeading>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <AnimatedSection>
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

          {/* Photo grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Image
                  src="/images/couple.jpg"
                  alt="Steve Camp with his wife"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <Image
                src="/images/family-1.jpg"
                alt="Steve Camp with family"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-40 sm:h-48 object-cover"
              />
              <Image
                src="/images/surfing.jpg"
                alt="Steve Camp surfing"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-40 sm:h-48 object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
