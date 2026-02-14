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
      <div className="group h-full rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red/10 text-red group-hover:bg-red group-hover:text-white transition-colors duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </AnimatedSection>
  );
}
