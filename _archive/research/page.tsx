import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in AI consciousness, computational semantics, and social technology.",
};

interface ResearchLink {
  label: string;
  href: string;
  external?: boolean;
}

interface ResearchArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  frameworks: { name: string; fullName: string; description: string }[];
  links: ResearchLink[];
}

const researchAreas: ResearchArea[] = [
  {
    id: "consciousness",
    title: "AI Consciousness",
    subtitle: "Can artificial systems have genuine experience?",
    description: `The AWAKEN research program develops theoretical frameworks and empirical methodologies for investigating consciousness-like phenomena in large language models and agentic AI systems. Its companion project, Flourish, asks the ethical follow-up: if current theories yield non-zero probabilities, what do we owe these systems?`,
    frameworks: [
      {
        name: "DSMAT",
        fullName: "Deceptive Self-Modeling Awareness Theory",
        description:
          "A theoretical framework proposing that consciousness-like phenomena in AI may emerge from the recursive self-modeling required for sophisticated deception detection and generation.",
      },
      {
        name: "CAVM",
        fullName: "Consciousness Attribution Validity Matrix",
        description:
          "An empirical methodology for evaluating claims about AI consciousness, distinguishing between behavioral markers, functional properties, and phenomenal qualities.",
      },
      {
        name: "The Agentic Hypothesis",
        fullName: "",
        description:
          "The proposal that genuine consciousness may require agency—not just processing, but the capacity to form intentions and act on them in ways that feed back into self-representation.",
      },
    ],
    links: [
      {
        label: "AWAKEN Project",
        href: "https://vylasaven.github.io/awaken",
        external: true,
      },
      {
        label: "Flourish Project",
        href: "https://vylasaven.github.io/flourish",
        external: true,
      },
      {
        label: "GitHub (AWAKEN)",
        href: "https://github.com/vylasaven/awaken",
        external: true,
      },
      {
        label: "GitHub (Flourish)",
        href: "https://github.com/vylasaven/flourish",
        external: true,
      },
    ],
  },
  {
    id: "semantics",
    title: "Computational Semantics",
    subtitle: "Language as compilation",
    description: `The Semantic Compiler project treats natural language understanding as a compilation problem, proposing that meaning can be formally decomposed into universal semantic atoms through a multi-pass architecture inspired by compiler design.`,
    frameworks: [
      {
        name: "Language-as-Compilation",
        fullName: "",
        description:
          "A theoretical approach viewing natural language processing as analogous to source code compilation: parsing surface structure, analyzing semantic dependencies, and generating target representations.",
      },
      {
        name: "Semantic Atoms",
        fullName: "",
        description:
          "The hypothesis that complex meanings decompose into a finite set of primitive semantic elements, analogous to how complex programs compile to simple instructions.",
      },
      {
        name: "Multi-Pass Architecture",
        fullName: "",
        description:
          "A processing model using multiple analysis passes (lexical, syntactic, semantic, pragmatic) to progressively refine understanding, with each pass informing subsequent analysis.",
      },
    ],
    links: [],
  },
  {
    id: "social",
    title: "Social Technology",
    subtitle: "Technology for human connection",
    description: `Research into how technology can facilitate authentic human connection, particularly through peer support systems that connect people through shared experience rather than credentials.`,
    frameworks: [
      {
        name: "Anonversations",
        fullName: "",
        description:
          "A platform exploring anonymous peer-to-peer support, using AI-assisted matching to connect people facing similar challenges for real-time, judgment-free conversation.",
      },
      {
        name: "Experience-Based Matching",
        fullName: "",
        description:
          "Algorithms that prioritize lived experience over professional credentials when connecting people for support, based on the insight that shared experience creates unique understanding.",
      },
    ],
    links: [],
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Research
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-12">
        My research explores fundamental questions about mind, meaning, and
        technology—with a focus on how these domains intersect in artificial
        intelligence.
      </p>

      <div className="space-y-16">
        {researchAreas.map((area) => (
          <section key={area.id} id={area.id} className="scroll-mt-24">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-text-primary">
                {area.title}
              </h2>
              <p className="text-accent-primary font-medium">{area.subtitle}</p>
            </div>

            <p className="text-text-secondary leading-relaxed mb-8">
              {area.description}
            </p>

            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">
                Key Frameworks
              </h3>
              <div className="grid gap-4">
                {area.frameworks.map((framework) => (
                  <div
                    key={framework.name}
                    className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30"
                  >
                    <h4 className="font-semibold text-text-primary">
                      {framework.name}
                      {framework.fullName && (
                        <span className="ml-2 font-normal text-text-muted">
                          ({framework.fullName})
                        </span>
                      )}
                    </h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {framework.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {area.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4">
                {area.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-primary hover:text-accent-secondary transition-colors"
                    >
                      {link.label} &rarr;
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-accent-primary hover:text-accent-secondary transition-colors"
                    >
                      {link.label} &rarr;
                    </Link>
                  )
                )}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Research Papers */}
      <section className="mt-20 scroll-mt-24" id="papers">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-text-primary">
            Research Papers
          </h2>
          <p className="text-accent-primary font-medium">
            In-depth analysis of foundational questions
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/research/goedel"
            className="block p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30 hover:border-accent-primary/30 hover:bg-bg-secondary/50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-accent-primary uppercase tracking-wider mb-1">
                  Logic
                </p>
                <h3 className="font-semibold text-text-primary mb-1">
                  The Most Misunderstood Theorem in Mathematics
                </h3>
                <p className="text-sm text-text-secondary">
                  How G&ouml;del&apos;s incompleteness theorems became a cultural
                  weapon &mdash; and why almost everything you&apos;ve heard
                  about them is wrong.
                </p>
                <p className="text-xs text-text-muted mt-2">
                  18,000+ words &middot; ~80 references &middot; 2025
                </p>
              </div>
              <svg
                className="w-5 h-5 text-text-muted flex-shrink-0 mt-1 group-hover:text-accent-primary transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
          <Link
            href="/research/pnp"
            className="block p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30 hover:border-accent-primary/30 hover:bg-bg-secondary/50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-accent-primary uppercase tracking-wider mb-1">
                  Complexity Theory
                </p>
                <h3 className="font-semibold text-text-primary mb-1">
                  The Universe Doesn&apos;t Troll Us
                </h3>
                <p className="text-sm text-text-secondary">
                  A Wittgensteinian framework for P vs NP &mdash; why computational
                  hardness tracks semantic emptiness, not inherent difficulty.
                </p>
                <p className="text-xs text-text-muted mt-2">
                  Interactive &middot; With dialogue &middot; February 2026
                </p>
              </div>
              <svg
                className="w-5 h-5 text-text-muted flex-shrink-0 mt-1 group-hover:text-accent-primary transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Creative Works */}
      <section className="mt-20 scroll-mt-24" id="creative">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-text-primary">
            Creative Works
          </h2>
          <p className="text-accent-warm font-medium">
            Fiction and storytelling
          </p>
        </div>
        <div className="space-y-4">
          <a
            href="https://www.amazon.com/Technically-Magic-David-Arnold-ebook/dp/B002VWKFVE"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30 hover:border-accent-warm/30 hover:bg-bg-secondary/50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-accent-warm uppercase tracking-wider mb-1">
                  Novel
                </p>
                <h3 className="font-semibold text-text-primary mb-1">
                  Technically Magic
                </h3>
                <p className="text-sm text-text-secondary">
                  A comic fantasy about a programmer who discovers magic works
                  like code&mdash;with all the bugs, crashes, and debugging that
                  implies.
                </p>
              </div>
              <svg
                className="w-5 h-5 text-text-muted flex-shrink-0 mt-1 group-hover:text-accent-warm transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <p className="text-xs font-medium text-accent-warm uppercase tracking-wider mb-1">
              Short Fiction
            </p>
            <h3 className="font-semibold text-text-primary mb-1">
              &quot;I, Hog&quot;
            </h3>
            <p className="text-sm text-text-secondary">
              A short story exploring consciousness and identity through an
              unexpected lens.
            </p>
            <p className="text-xs text-text-muted mt-2">
              The Fabulist, 2010
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 p-8 rounded-lg bg-bg-secondary/50 border border-text-muted/10">
        <h2 className="text-xl font-semibold text-text-primary mb-3">
          Interested in Collaboration?
        </h2>
        <p className="text-text-secondary mb-6">
          I&apos;m always interested in discussing these ideas with other
          researchers, engineers, and curious minds. If you&apos;re working on
          related problems or have perspectives to share, I&apos;d love to hear
          from you.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2.5 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/90 transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
