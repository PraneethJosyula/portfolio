import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "SQL", "Ruby"],
  },
  {
    label: "Frontend & UI",
    skills: ["React", "Next.js", "Angular", "HTML5", "CSS3", "Design Systems", "Accessibility"],
  },
  {
    label: "Backend & Cloud",
    skills: ["Node.js", "Spring Boot", ".NET Core", "Kafka", "AWS", "Azure", "Docker"],
  },
  {
    label: "Data & Monitoring",
    skills: ["PostgreSQL", "MongoDB", "Cosmos DB", "Redis", "Vector DBs", "Prometheus", "Grafana"],
  },
  {
    label: "Practices",
    skills: ["CI/CD", "System Design", "Agile Leadership", "Mentoring", "DRI/On-call", "Testing"],
  },
];
