"use client";

import { Github, Linkedin, Mail, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
};

export function Contact() {
  return (
    <SectionWrapper id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-3 text-muted-foreground">
          Open to opportunities, collaborations, or just a good conversation about engineering.
        </p>

        {/* Social links */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label={social.label}
              >
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            );
          })}
        </div>

        {/* Resume download */}
        <Button
          render={<a href="/resume.pdf" download />}
          size="lg"
          className="mt-8 rounded-full"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </SectionWrapper>
  );
}
