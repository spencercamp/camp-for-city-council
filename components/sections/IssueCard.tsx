"use client";

import {
  Shield,
  Building,
  Heart,
  DollarSign,
  Landmark,
  Waves,
  Users,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap = {
  Shield,
  Building,
  Heart,
  DollarSign,
  Landmark,
  Waves,
  Users,
} as const;

type IconName = keyof typeof iconMap;

export function IssueCard({
  icon,
  title,
  description,
  index,
}: {
  icon: IconName;
  title: string;
  description: string;
  index: number;
}) {
  const Icon = iconMap[icon];

  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="group h-full rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-red">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-300">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </AnimatedSection>
  );
}
