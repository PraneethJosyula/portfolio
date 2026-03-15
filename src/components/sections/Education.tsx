"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { education } from "@/data/education";

export function Education() {
  return (
    <SectionWrapper id="education" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Education
        </h2>
        <p className="mt-2 text-muted-foreground">
          Where it all started.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold leading-snug">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {edu.institution}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {edu.period}
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-medium text-primary">
                  GPA {edu.gpa}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
