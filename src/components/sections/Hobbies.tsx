"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { hobbies } from "@/data/hobbies";
import {
  Code2,
  BookOpen,
  Dumbbell,
  Plane,
  Music,
  ChefHat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BookOpen,
  Dumbbell,
  Plane,
  Music,
  ChefHat,
};

export function Hobbies() {
  return (
    <SectionWrapper id="hobbies" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          5 to 9 Life
        </h2>
        <p className="mt-2 text-muted-foreground">
          What keeps me going outside of work.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, i) => {
            const Icon = iconMap[hobby.icon];
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5"
              >
                {Icon && (
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                )}
                <h3 className="font-display text-sm font-semibold">
                  {hobby.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {hobby.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
