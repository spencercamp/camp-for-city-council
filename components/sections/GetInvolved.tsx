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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GET_INVOLVED.items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group block bg-offwhite rounded-xl p-8 hover:bg-blue-dark hover:text-white transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-blue group-hover:text-white mb-3 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red group-hover:text-red-light transition-colors">
                  {item.cta}
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
