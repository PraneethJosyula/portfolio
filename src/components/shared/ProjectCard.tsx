"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      <h3 className="font-display text-base font-semibold leading-snug">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge key={t} variant="secondary" className="rounded-full text-xs font-normal">
            {t}
          </Badge>
        ))}
      </div>

      {(project.github || project.link) && (
        <div className="mt-4 flex gap-3 border-t border-border/40 pt-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
