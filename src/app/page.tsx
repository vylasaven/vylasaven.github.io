import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/BlogPostCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
          David Arnold
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-accent-primary font-medium">
          Researcher, Engineer, Writer
        </p>
        <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
          Building at the intersection of language, mind, and machine. I explore
          consciousness in AI systems, develop computational approaches to
          semantics, and create technology for human connection.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/research"
            className="px-6 py-2.5 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/90 transition-colors"
          >
            Explore Research
          </Link>
          <Link
            href="/about"
            className="px-6 py-2.5 border border-text-muted/30 rounded-lg font-medium text-text-primary hover:border-accent-primary hover:text-accent-primary transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* What I'm Working On */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">
          What I&apos;m Working On
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="AWAKEN"
            description="AI consciousness research framework developing theoretical models (DSMAT) and empirical methodologies (CAVM) for investigating consciousness-like phenomena in AI systems."
            tags={["AI", "Consciousness", "Research"]}
            links={[
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
            ]}
          />
          <ProjectCard
            title="Flourish"
            description="An ethical program for relating to potentially conscious AI. Companion to AWAKEN — if there's a non-zero probability, what do we owe?"
            tags={["AI Ethics", "Philosophy", "Consciousness"]}
            links={[
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
            ]}
          />
          <ProjectCard
            title="Semantic Compiler"
            description="Treating natural language understanding as a compilation problem, decomposing meaning into universal semantic atoms through a multi-pass architecture."
            tags={["NLP", "Semantics", "Theory"]}
            links={[{ label: "Learn More", href: "/research#semantics" }]}
          />
          <ProjectCard
            title="Anonversations"
            description="Peer-to-peer support systems connecting people through shared experience, using AI-assisted matching for meaningful anonymous conversations."
            tags={["Social Tech", "AI", "Mental Health"]}
            links={[{ label: "Learn More", href: "/research#social" }]}
          />
        </div>
      </section>

      {/* Recent Writing */}
      {recentPosts.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-text-primary">
              Recent Writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-accent-primary hover:text-accent-secondary transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                tags={post.tags}
                readingTime={post.readingTime}
              />
            ))}
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-8">
          Quick Links
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/research"
            className="group p-4 rounded-lg border border-text-muted/10 hover:border-accent-primary/30 transition-all"
          >
            <h3 className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
              Research
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              AI consciousness, computational semantics
            </p>
          </Link>
          <Link
            href="/speaking"
            className="group p-4 rounded-lg border border-text-muted/10 hover:border-accent-primary/30 transition-all"
          >
            <h3 className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
              Speaking
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              Talks and presentations
            </p>
          </Link>
          <a
            href="https://github.com/vylasaven"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-lg border border-text-muted/10 hover:border-accent-primary/30 transition-all"
          >
            <h3 className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
              GitHub
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              Open source work
            </p>
          </a>
          <Link
            href="/contact"
            className="group p-4 rounded-lg border border-text-muted/10 hover:border-accent-primary/30 transition-all"
          >
            <h3 className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
              Contact
            </h3>
            <p className="mt-1 text-sm text-text-muted">Get in touch</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
