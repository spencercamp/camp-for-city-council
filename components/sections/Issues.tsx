"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ISSUES } from "@/lib/constants";

const issueIcons = [
  // Safe Neighborhoods — shield
  <svg key="shield" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  // Small-Town Character — home
  <svg key="home" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  // Homelessness — heart
  <svg key="heart" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
  // Taxpayer Dollars — bar chart
  <svg key="chart" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
  // Local Control — map pin
  <svg key="pin" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  // Coastline — waves
  <svg key="waves" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" /><path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" /><path d="M2 6c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" /></svg>,
  // Family Values — users
  <svg key="users" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
];

export function Issues() {
  return (
    <section id="issues" className="relative bg-blue-dark py-24 lg:py-36 overflow-hidden">
      {/* Subtle radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(230,57,70,0.10) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={ISSUES.eyebrow}
          subtitle={ISSUES.subheading}
          light
        >
          {ISSUES.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {ISSUES.items.map((issue, i) => (
            <AnimatedSection key={issue.title} delay={i * 0.04}>
              <div className="group h-full rounded-2xl bg-white/[0.035] p-7 sm:p-8 ring-1 ring-white/[0.08] transition-all duration-300 hover:bg-white/[0.06] hover:ring-white/[0.18] hover:-translate-y-1">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-red/15 text-red-light ring-1 ring-red/25 transition-colors duration-300 group-hover:bg-red/25 group-hover:text-white">
                  {issueIcons[i]}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-[-0.01em] leading-snug">
                  {issue.title}
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] leading-[1.65] text-white/60">
                  {issue.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
