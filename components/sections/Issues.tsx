"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ISSUES } from "@/lib/constants";

const issueIcons = [
  // Safe Neighborhoods — shield
  <svg key="shield" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  // Small-Town Character — home
  <svg key="home" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  // Homelessness — heart in hand
  <svg key="heart" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
  // Taxpayer Dollars — bar chart
  <svg key="chart" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
  // Local Control — map pin
  <svg key="pin" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  // Coastline — waves/sun
  <svg key="sun" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>,
  // Family Values — users
  <svg key="users" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
];

export function Issues() {
  return (
    <section id="issues" className="py-24 lg:py-36 bg-blue-dark">
      <Container>
        <SectionHeading subtitle={ISSUES.subheading} light>
          {ISSUES.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ISSUES.items.map((issue, i) => (
            <AnimatedSection key={issue.title} delay={i * 0.05}>
              <div className="bg-white/[0.04] rounded-2xl p-8 sm:p-10 h-full border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300 group">
                <div className="text-white/30 mb-8 group-hover:text-red-light/60 transition-colors duration-300">
                  {issueIcons[i]}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                  {issue.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base">
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
