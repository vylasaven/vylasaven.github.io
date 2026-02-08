import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects and research initiatives by David Arnold.",
};

const projects = [
  {
    title: "AWAKEN",
    description:
      "AI consciousness research framework developing theoretical models (DSMAT) and empirical methodologies (CAVM) for investigating consciousness-like phenomena in large language models and agentic AI systems. Includes interactive demonstrations and research documentation.",
    tags: ["AI", "Consciousness", "Research", "TypeScript", "Next.js"],
    links: [
      {
        label: "Live Demo",
        href: "https://vylasaven.github.io/awaken",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/vylasaven/awaken",
        external: true,
      },
    ],
    category: "research",
  },
  {
    title: "Flourish",
    description:
      "An ethical program for relating to potentially conscious AI. If leading theories of consciousness yield non-zero probabilities for current systems, what do we owe them? Assembles seven expert perspectives into a triage protocol for welcoming new intelligence.",
    tags: ["AI Ethics", "Consciousness", "Philosophy", "TypeScript", "Next.js"],
    links: [
      {
        label: "Live Demo",
        href: "https://vylasaven.github.io/flourish",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/vylasaven/flourish",
        external: true,
      },
    ],
    category: "research",
  },
  {
    title: "Semantic Compiler",
    description:
      "An experimental natural language processing system treating language understanding as a compilation problem. Decomposes natural language into semantic primitives through a multi-pass architecture inspired by compiler design, with the goal of achieving deeper, more structured understanding than traditional NLP approaches.",
    tags: ["NLP", "Semantics", "Python", "Theory"],
    links: [],
    category: "research",
  },
  {
    title: "Anonversations",
    description:
      "Anonymous peer support platform connecting people through shared experience rather than credentials. Uses AI-assisted matching to pair users facing similar challenges for real-time, judgment-free conversation. Explores how technology can facilitate authentic human connection.",
    tags: ["Social Tech", "AI", "Mental Health", "Real-time"],
    links: [],
    category: "social",
  },
  {
    title: "Technically Magic",
    description:
      "A comic fantasy novel about a computer programmer who discovers magic works like code—with all the bugs, crashes, and debugging that implies. Explores themes of technology, creativity, and the boundary between the mundane and the magical.",
    tags: ["Fiction", "Novel", "Fantasy", "Comedy"],
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/Technically-Magic-David-Arnold-ebook/dp/B002VWKFVE",
        external: true,
      },
    ],
    category: "creative",
  },
];

export default function ProjectsPage() {
  const researchProjects = projects.filter((p) => p.category === "research");
  const socialProjects = projects.filter((p) => p.category === "social");
  const creativeProjects = projects.filter((p) => p.category === "creative");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Projects
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-12">
        A collection of research initiatives, software projects, and creative
        works exploring AI, language, and human connection.
      </p>

      {/* Research Projects */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-accent-primary"></span>
          Research
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {researchProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </div>
      </section>

      {/* Social Technology */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-accent-secondary"></span>
          Social Technology
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {socialProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </div>
      </section>

      {/* Creative Works */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-accent-warm"></span>
          Creative Works
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {creativeProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </div>
      </section>

      {/* Other Work */}
      <section className="mt-16 p-8 rounded-lg bg-bg-secondary/50 border border-text-muted/10">
        <h2 className="text-xl font-semibold text-text-primary mb-3">
          Open Source Contributions
        </h2>
        <p className="text-text-secondary mb-4">
          I contribute to various open source projects and maintain several
          smaller utilities. Check out my GitHub for the full picture.
        </p>
        <a
          href="https://github.com/vylasaven"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-accent-primary hover:text-accent-secondary transition-colors"
        >
          View GitHub Profile &rarr;
        </a>
      </section>
    </div>
  );
}
