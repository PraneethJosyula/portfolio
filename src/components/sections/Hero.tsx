"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Team Lead", "Full-Stack Engineer", "AI Builder"];

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center px-6 pt-24 pb-16 md:pt-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:gap-16 md:grid-cols-[1.2fr_1fr] md:items-center">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Software Engineer
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Praneeth
            <br />
            Josyula
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {role}
              </span>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Button render={<a href="#projects" />} size="lg" className="rounded-md">
              <ArrowDown className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button render={<a href="#contact" />} variant="outline" size="lg" className="rounded-md">
              <Send className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </motion.div>

        {/* Right — profile pic + bio */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex max-w-md flex-col items-start gap-6"
        >
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-lg shadow-primary/5 sm:h-40 sm:w-40">
            <Image
              src="/images/IMG_2142.png"
              alt="Praneeth Josyula"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I build mission-critical platforms and AI-driven services at scale.
              Currently leading engineering at{" "}
              <span className="font-medium text-foreground">Holiday World</span>,
              shipping marketplace features that handle peak traffic at 99.9% uptime.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              MS in Computer Science from the{" "}
              <span className="font-medium text-foreground">
                University of Colorado, Boulder
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
