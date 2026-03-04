import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by David Arnold — developer tools, mobile apps, and platforms for human connection.",
};

const projects = [
  {
    title: "claude-sonar",
    description:
      "Screen reader accessibility plugin for Claude Code. Pure pipeline architecture with 12 tool formatters, earcon sound system, and 545 tests. Makes AI-assisted development accessible to blind and low-vision developers.",
    tags: ["TypeScript", "Node.js", "Accessibility", "CLI Plugin", "Open Source"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/vylasaven/claude-sonar",
        external: true,
      },
    ],
  },
  {
    title: "Toward Perfection",
    description:
      "Spiritual action roguelike with a custom game engine, GPU-rendered Skia graphics, and 14 philosophical traditions as playable combat systems. Built entirely through AI agent orchestration.",
    tags: ["React Native", "TypeScript", "Skia", "Game Dev", "Zustand"],
    links: [] as { label: string; href: string; external?: boolean }[],
  },
  {
    title: "Hydrate",
    description:
      "Gamified hydration tracking iOS app with 25-level progression, 5 themed visual experiences, barcode scanning, and API integrations. Skia-rendered graphics throughout.",
    tags: ["React Native", "TypeScript", "Skia", "iOS", "API Integration"],
    links: [] as { label: string; href: string; external?: boolean }[],
  },
  {
    title: "Anonversations",
    description:
      "Anonymous peer support platform connecting people through shared experience. AI-assisted matching pairs users by what they've been through, not who they are.",
    tags: ["Social Tech", "AI", "Mental Health", "Matching Algorithms"],
    links: [] as { label: string; href: string; external?: boolean }[],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Projects
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-12">
        Things I&apos;m building. Everything here was developed through AI agent
        orchestration — specifying requirements, directing agent work, reviewing
        output, iterating on architecture.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
