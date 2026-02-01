import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "David Arnold - Independent researcher working at the intersection of AI, cognitive science, and language.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-8">
        About
      </h1>

      {/* Avatar placeholder */}
      <div className="mb-10 flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
          <span className="text-3xl font-bold text-white">DA</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-text-primary">
            David Arnold
          </h2>
          <p className="text-text-secondary">
            Researcher, Engineer, Writer
          </p>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            I&apos;m an independent researcher working at the intersection of
            artificial intelligence, cognitive science, and language. My
            research explores consciousness in AI systems, computational
            approaches to semantics, and technology for human connection.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            My work spans theoretical frameworks like{" "}
            <strong>DSMAT</strong> (Deceptive Self-Modeling Awareness Theory)
            and empirical methodologies like <strong>CAVM</strong>{" "}
            (Consciousness Attribution Validity Matrix) for investigating
            consciousness-like phenomena in large language models and agentic
            AI systems.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Beyond research, I&apos;m a published novelist with{" "}
            <em>Technically Magic</em> available on Amazon, and I continue to
            explore the creative possibilities at the boundary of human and
            machine intelligence.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Education
        </h2>
        <div className="border-l-2 border-accent-primary/30 pl-6 space-y-6">
          <div>
            <h3 className="font-semibold text-text-primary">
              Stanford University
            </h3>
            <p className="text-sm text-text-muted">2011 - 2015</p>
            <p className="mt-2 text-text-secondary">
              Interdisciplinary studies in Engineering, Computer Science,
              Psychology, Design, and Philosophy. Certificate in Global Human
              Rights.
            </p>
          </div>
        </div>
      </section>

      {/* Current Work */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Current Work
        </h2>
        <div className="p-6 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
          <h3 className="font-semibold text-text-primary">
            Software Test Engineer
          </h3>
          <p className="text-sm text-accent-primary">Saronic Technologies</p>
          <p className="mt-3 text-text-secondary">
            Directing autonomous vehicle traceability systems, bridging the gap
            between engineering requirements and verification processes for
            next-generation maritime autonomy.
          </p>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Research Philosophy
        </h2>
        <div className="prose max-w-none">
          <p className="text-text-secondary leading-relaxed mb-4">
            I believe the most important questions lie at disciplinary
            boundaries. The question of machine consciousness isn&apos;t purely
            technical, philosophical, or psychological—it requires integration
            across all these domains.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            My approach combines rigorous theoretical frameworks with empirical
            methodology, always keeping in mind that our tools for investigating
            consciousness are themselves shaped by assumptions about what
            consciousness is.
          </p>
          <p className="text-text-secondary leading-relaxed">
            I&apos;m particularly interested in the{" "}
            <strong>Agentic Hypothesis</strong>: the idea that consciousness may
            emerge not from passive processing but from the recursive
            self-modeling that agency requires.
          </p>
        </div>
      </section>

      {/* Skills & Interests */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Skills & Interests
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-medium text-text-primary mb-3">Technical</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "TypeScript",
                "React",
                "Next.js",
                "Machine Learning",
                "NLP",
                "LLMs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-bg-secondary text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-text-primary mb-3">Research</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AI Consciousness",
                "Computational Semantics",
                "Cognitive Science",
                "Philosophy of Mind",
              ].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 text-sm rounded-full bg-bg-secondary text-text-secondary"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
