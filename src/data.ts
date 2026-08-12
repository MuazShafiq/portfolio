import { BrainCircuit, Cpu, Layers3, Zap } from "lucide-react";

export const EMAIL = "muaz.shafiq18@gmail.com";
export const GITHUB = "https://github.com/MuazShafiq";
export const LINKEDIN = "https://www.linkedin.com/in/muaz-shafiq/";

export const skills = [
  {
    number: "01",
    title: "Interfaces",
    text: "Responsive product experiences that feel intentional in every state.",
    stack: "React · Next.js · Redux · Tailwind",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Systems",
    text: "APIs, integrations, data flows, and the glue that keeps products reliable.",
    stack: "Node.js · Express · Laravel · Redis",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Intelligence",
    text: "Useful AI features grounded in real workflows—not AI for its own sake.",
    stack: "Python · LLMs · Scikit-learn · Llama",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Delivery",
    text: "From first commit to production, with testing and operability built in.",
    stack: "Vercel · Vite · Cypress",
    icon: Zap,
  },
];

export const experience = [
  {
    period: "2024 — NOW",
    company: "SubscriptionFlow",
    role: "Software Engineer",
    note: "YC-backed subscription management platform",
    points: [
      "Built subscription billing and SaaS workflows across Laravel/MySQL backends and Next.js interfaces.",
      "Integrated Microsoft 365 shared mailboxes, Klaviyo, and Monday.com with resilient synchronization and failure recovery.",
      "Improved invoice dunning, hosted checkout validation, scheduled email delivery, and payment recovery.",
    ],
    current: true,
  },
  {
    period: "JUL — AUG 2023",
    company: "OneByte",
    role: "Web Development Intern",
    note: "Product engineering studio",
    points: [
      "Translated Figma systems into responsive React and TypeScript experiences.",
      "Built with Tailwind, Redux Toolkit, Vite, and Webflow.",
    ],
  },
  {
    period: "JUN — AUG 2023",
    company: "Finera",
    role: "Software Development Intern",
    note: "Logistics technology",
    points: [
      "Rebuilt Java logistics features in Flutter for routing, inventory, and driver workflows.",
      "Connected the migrated application to live backend data and APIs.",
    ],
  },
];
