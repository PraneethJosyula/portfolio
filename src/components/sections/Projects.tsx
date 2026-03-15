"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "applied-ai", label: "Applied AI" },
  { value: "fundamentals", label: "Fundamentals" },
  { value: "full-stack", label: "Full Stack" },
];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <SectionWrapper id="projects" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <p className="mt-2 text-muted-foreground">
          A selection of things I&apos;ve built across AI, systems, and product.
        </p>

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                active === cat.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
