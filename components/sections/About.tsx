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
                <p className="font-serif text-lg sm:text-xl text-gray-600 leading-relaxed">
                  For more than 30 years, San Clemente has been my family&apos;s home and the community I am proud to serve. As an architect and small business owner with <mark>36 years of experience in design, planning, and project management</mark>, I understand how to balance growth with the character that makes our city special. As a member of the <mark>San Clemente Chamber of Commerce</mark>, I&apos;ve seen firsthand what our local businesses need to thrive.
                </p>
                <p className="font-serif text-lg sm:text-xl text-gray-600 leading-relaxed">
                  My service on the <mark>Planning Commission and Design Review Subcommittee</mark> has been focused on protecting our coastal charm while allowing thoughtful, responsible development. I&apos;ve spent <mark>4.5 years listening to residents, asking hard questions</mark>, and working to ensure projects fit San Clemente—not the other way around.
                </p>
                <p className="font-serif text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Whether I&apos;m surfing at San Clemente beaches, walking the Pier with my wife, worshiping at <mark>Calvary South OC</mark>, or reviewing land-use policies, my goal is the same: to <mark>put residents first, lead with integrity, and keep San Clemente a safe, vibrant community for all</mark>.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column — photo */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <Image
                  src="/images/couple.jpg"
                  alt="Steve and his wife"
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
