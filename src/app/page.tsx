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
          Engineer, Builder, Writer
        </p>
        <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
          I build developer tools, mobile apps, and platforms for human
          connection — all through AI agent orchestration. The skill is knowing
          what to build, how to decompose it, and how to verify the result.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-6 py-2.5 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/90 transition-colors"
          >
            View Projects
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
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="claude-sonar"
            description="Screen reader accessibility plugin for Claude Code. Pure pipeline architecture with 12 tool formatters, earcon sounds, and 545 tests."
            tags={["TypeScript", "Node.js", "Accessibility"]}
            links={[
              {
                label: "GitHub",
                href: "https://github.com/vylasaven/claude-sonar",
                external: true,
              },
            ]}
          />
          <ProjectCard
            title="Toward Perfection"
            description="Spiritual action roguelike with custom game engine, GPU-rendered Skia graphics, and 14 philosophical traditions as playable combat systems."
            tags={["React Native", "TypeScript", "Skia"]}
            links={[{ label: "Learn More", href: "/projects" }]}
          />
          <ProjectCard
            title="Hydrate"
            description="Gamified hydration tracking iOS app with 25-level progression, 5 themed visual experiences, barcode scanning, and API integrations."
            tags={["React Native", "TypeScript", "iOS"]}
            links={[{ label: "Learn More", href: "/projects" }]}
          />
          <ProjectCard
            title="Anonversations"
            description="Anonymous peer support platform connecting people through shared experience, using AI-assisted matching for meaningful conversations."
            tags={["Social Tech", "AI", "Mental Health"]}
            links={[{ label: "Learn More", href: "/projects" }]}
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/projects"
            className="group p-4 rounded-lg border border-text-muted/10 hover:border-accent-primary/30 transition-all"
          >
            <h3 className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
              Projects
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              Developer tools, mobile apps, platforms
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
