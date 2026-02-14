"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IssueCard } from "./IssueCard";
import { ISSUES } from "@/lib/constants";

export function Issues() {
  return (
    <section id="issues" className="py-20 lg:py-28 bg-cream">
      <Container>
        <SectionHeading subtitle={ISSUES.subheading}>
          {ISSUES.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ISSUES.items.map((issue, i) => (
            <IssueCard
              key={issue.title}
              icon={issue.icon}
              title={issue.title}
              description={issue.description}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
