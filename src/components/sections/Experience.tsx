"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ExperienceCard } from "@/components/shared/ExperienceCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 text-muted-foreground">
          Where I&apos;ve shipped things that matter.
        </p>

        <div className="mt-12">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.company}
              experience={exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
