"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
  index: number;
}

export function ExperienceCard({ experience, isLast, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {!isLast && (
        <div className="absolute left-[7px] top-3 h-full w-px bg-border" />
      )}
      <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-[3px] border-primary bg-background" />

      <div className="rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-base font-semibold">{experience.role}</h3>
            <p className="text-sm text-muted-foreground">
              {experience.company} &middot; {experience.location}
            </p>
          </div>
          <span className="mt-1 shrink-0 font-mono text-xs text-muted-foreground sm:mt-0">
            {experience.period}
          </span>
        </div>

        <ul className="mt-3 space-y-1.5">
          {experience.highlights.map((h, i) => (
            <li key={i} className="text-sm leading-relaxed text-muted-foreground">
              <span className="mr-2 text-primary">&#8250;</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {experience.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
