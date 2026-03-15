import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "GPT-4 Recommendation Engine",
    description:
      "AI-powered recommendation system that increased user engagement by 35% and conversion rates by 18% through personalized content delivery.",
    category: "applied-ai",
    tech: ["Python", "GPT-4", "Redis", "REST APIs"],
  },
  {
    title: "Automated Code Generation System",
    description:
      "RAG-based code generation pipeline leveraging Azure Cognitive Services for pattern recognition across 3D modeling datasets.",
    category: "applied-ai",
    tech: ["Azure Cognitive Services", "RAG", "C#", ".NET Core"],
  },
  {
    title: "AI Agent Reliability Tools",
    description:
      "Root cause analysis tooling for AI agent failures, driving continuous service reliability with monitoring guardrails.",
    category: "applied-ai",
    tech: ["Python", "Azure Functions", "Cosmos DB"],
  },
  {
    title: "Real-Time Bidding Dashboard",
    description:
      "Interactive ad-tech visualization tool monitoring high-frequency auction data with sub-50ms event propagation.",
    category: "fundamentals",
    tech: ["WebSockets", "Node.js", "TypeScript", "Redis Pub/Sub"],
    github: "#",
  },
  {
    title: "Ad-Injection Video Engine",
    description:
      "Custom video player supporting dynamic ad insertion with frame-accurate buffer management for seamless VAST/VMAP transitions.",
    category: "fundamentals",
    tech: ["HTML5 Video API", "React", "TypeScript"],
    github: "#",
  },
  {
    title: "FloState",
    description:
      "Social productivity platform featuring real-time task tracking and community-based focus sessions with optimistic UI.",
    category: "full-stack",
    tech: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL"],
    github: "#",
  },
  {
    title: "Global Marketplace Platform",
    description:
      "E-commerce platform ensuring 99.9% uptime during peak traffic with multi-currency Stripe integrations and CDN optimization.",
    category: "full-stack",
    tech: ["React", "TypeScript", "Node.js", "AWS", "Stripe"],
  },
  {
    title: "Kafka Event Pipelines",
    description:
      "High-throughput event streaming platform processing 50K+ events/min with exactly-once semantics for user segmentation.",
    category: "full-stack",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
  },
];
