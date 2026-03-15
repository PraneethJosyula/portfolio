"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Send, Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";

const roles = ["Team Lead", "Full-Stack Engineer", "AI Builder"];

const iconMap: Record<string, LucideIcon> = { Github, Linkedin, Mail };

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center px-6 pt-24 pb-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-28 w-28 overflow-hidden rounded-full border-[3px] border-primary/20 shadow-xl shadow-primary/5 sm:h-32 sm:w-32"
        >
          <Image
            src="/images/IMG_2142.png"
            alt="Praneeth Josyula"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Praneeth Josyula
        </motion.h1>

        {/* Role pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 flex flex-wrap justify-center gap-2"
        >
          {roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.45 + i * 0.07 }}
              className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
        >
          I build mission-critical platforms and AI-driven services at scale.
          Currently leading engineering at{" "}
          <span className="font-medium text-foreground">Holiday World</span>,
          shipping marketplace features with 99.9% uptime. MS CS from{" "}
          <span className="font-medium text-foreground">CU Boulder</span>.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          className="mt-6 flex items-center gap-3"
        >
          {socials.map((social, i) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
                whileHover={{ y: -2, scale: 1.08 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label={social.label}
              >
                {Icon && <Icon className="h-4 w-4" />}
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex gap-3"
        >
          <Button render={<a href="#projects" />} size="lg" className="rounded-full">
            <ArrowDown className="mr-2 h-4 w-4" />
            View Projects
          </Button>
          <Button render={<a href="/resume.pdf" download />} variant="outline" size="lg" className="rounded-full">
            <Send className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
