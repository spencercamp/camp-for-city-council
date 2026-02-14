"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { QUALIFICATIONS, ENDORSEMENTS } from "@/lib/constants";

export function Endorsements() {
  return (
    <section id="endorsements" className="py-24 lg:py-36 bg-cream">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {/* Qualifications */}
          <AnimatedSection>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-red rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-blue-dark">
                  {QUALIFICATIONS.heading}
                </h2>
              </div>
              <div className="space-y-6">
                {QUALIFICATIONS.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 w-3 h-3 rounded-full bg-amber flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <span className="font-bold text-blue-dark">{item.bold}</span>{" "}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Endorsed By */}
          <AnimatedSection delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-red rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-blue-dark">
                  {ENDORSEMENTS.heading}
                </h2>
              </div>
              <div className="space-y-6">
                {ENDORSEMENTS.items.map((endorser) => (
                  <div key={endorser.name} className="flex items-start gap-4">
                    <span className="text-amber mt-0.5 text-lg flex-shrink-0">&#9733;</span>
                    <div>
                      <p className="font-bold text-blue-dark text-base md:text-lg">
                        {endorser.name}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {endorser.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
