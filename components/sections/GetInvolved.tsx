"use client";

import {
  HandHeart,
  MessageSquare,
  Share2,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GET_INVOLVED } from "@/lib/constants";

const iconMap = {
  HandHeart,
  MessageSquare,
  Share2,
  BadgeDollarSign,
} as const;

type IconName = keyof typeof iconMap;

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-16 lg:py-24 bg-gradient-to-b from-white to-cream/30">
      <Container>
        <SectionHeading subtitle={GET_INVOLVED.subheading}>
          {GET_INVOLVED.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GET_INVOLVED.items.map((item, i) => {
            const Icon = iconMap[item.icon as IconName];
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl bg-cream p-8 hover:bg-navy transition-colors duration-300 flex flex-col text-center">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red/10 text-red group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-navy group-hover:text-white transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-300 text-sm leading-relaxed flex-1 mb-4">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-red group-hover:text-amber transition-colors duration-300"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
