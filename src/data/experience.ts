import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Holiday World",
    role: "Software Engineer (Team Lead)",
    period: "Jul 2025 – Present",
    location: "Remote",
    highlights: [
      "Led a cross-functional team of 8 developers to deliver a global marketplace platform end-to-end.",
      "Architected scalable React + TypeScript frontends with WCAG accessibility and modular design patterns.",
      "Engineered Stripe payment integrations with idempotent logic for multi-currency transactions.",
    ],
    tags: ["React", "TypeScript", "AWS", "Stripe", "Node.js"],
  },
  {
    company: "Holiday Channel",
    role: "Software Engineer",
    period: "Aug 2024 – Jul 2025",
    location: "Remote",
    highlights: [
      "Built Kafka pipelines processing 50K+ events/min with exactly-once semantics for user segmentation.",
      "Designed RESTful microservices handling 100K+ daily requests, improving response times by 45%.",
      "Developed GPT-4 based recommendation engines increasing engagement 35% and conversion rates 18%.",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "Python", "GPT-4"],
  },
  {
    company: "Trimble Inc. (SketchUp)",
    role: "Software Engineer",
    period: "Aug 2023 – May 2024",
    location: "Boulder, CO",
    highlights: [
      "Designed an automated code generation system via Azure Cognitive Services with RAG-based pattern recognition.",
      "Built serverless workflows using Azure Functions and Cosmos DB to process 100K+ 3D modeling datasets.",
      "Optimized REST API performance for AI-powered conversions, reducing backend latency to sub-200ms.",
    ],
    tags: ["Azure", "C#", ".NET", "Cosmos DB", "RAG"],
  },
];
