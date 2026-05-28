"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left column — bio */}
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={ABOUT.eyebrow}>{ABOUT.heading}</SectionHeading>

            <AnimatedSection>
              <div className="space-y-6">
                <p className="font-serif text-lg sm:text-xl text-gray-700 leading-[1.7]">
                  For more than 30 years, San Clemente has been my family&apos;s home — and the community I&apos;m proud to serve. As an architect and small business owner with <mark>36 years of experience in design, planning, and project management</mark>, I know how to grow a city without losing what makes it special. And through the <mark>San Clemente Chamber of Commerce</mark>, I&apos;ve seen up close what our local businesses need to thrive.
                </p>
                <p className="font-serif text-lg sm:text-xl text-gray-700 leading-[1.7]">
                  My service on the <mark>Planning Commission and Design Review Subcommittee</mark> has been focused on protecting our coastal charm while allowing thoughtful, responsible development. I&apos;ve spent <mark>4.5 years listening to residents, asking hard questions</mark>, and working to ensure projects fit San Clemente—not the other way around.
                </p>
                <p className="font-serif text-lg sm:text-xl text-gray-700 leading-[1.7]">
                  Whether I&apos;m surfing at San Clemente beaches, walking the Pier with my wife, worshiping at <mark>Calvary South OC</mark>, or reviewing land-use policies, my goal is the same: to <mark>put residents first, lead with integrity, and keep San Clemente a safe, vibrant community for all</mark>.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column — photo */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-black/[0.06] shadow-[0_20px_60px_-20px_rgba(20,40,68,0.25)]">
                <Image
                  src="/images/couple.jpg"
                  alt="Steve and his wife"
                  width={600}
                  height={750}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stat strip — refined, lighter, Airbnb-style card grid */}
        <AnimatedSection>
          <div className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {ABOUT.stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl bg-slate/40 px-6 py-7 ring-1 ring-blue/[0.08] transition-all duration-300 hover:bg-slate/70 hover:ring-blue/15 hover:-translate-y-0.5"
              >
                <p className="font-heading text-2xl md:text-3xl font-bold text-blue-dark tracking-tight">
                  {stat.number}
                </p>
                <p className="mt-1.5 text-sm text-gray-600 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Photo grid */}
        <AnimatedSection>
          <div className="mt-16 grid grid-cols-2 gap-4">
            <div className="group overflow-hidden rounded-[1.5rem] ring-1 ring-black/[0.06]">
              <Image
                src="/images/family-2.jpg"
                alt="Steve Camp with family"
                width={600}
                height={400}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-96"
              />
            </div>
            <div className="group overflow-hidden rounded-[1.5rem] ring-1 ring-black/[0.06]">
              <Image
                src="/images/surfing.jpg"
                alt="Steve Camp surfing"
                width={600}
                height={400}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-96"
              />
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
