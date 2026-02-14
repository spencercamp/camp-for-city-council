"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GET_INVOLVED } from "@/lib/constants";

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 lg:py-36 bg-white">
      <Container>
        <SectionHeading>{GET_INVOLVED.heading}</SectionHeading>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {GET_INVOLVED.items.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-bold text-blue mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red hover:text-red-dark transition-colors"
                >
                  {item.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
