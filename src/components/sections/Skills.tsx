"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <SectionWrapper id="skills" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Skills
        </h2>
        <p className="mt-2 text-muted-foreground">
          Technologies and practices I reach for.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
            >
              <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: gi * 0.1 + si * 0.03 }}
                  >
                    <Badge
                      variant="secondary"
                      className="rounded-full font-mono text-xs font-normal transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
