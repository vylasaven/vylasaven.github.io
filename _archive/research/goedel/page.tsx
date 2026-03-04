import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Most Misunderstood Theorem in Mathematics",
  description:
    "How G\u00F6del's incompleteness theorems became a cultural weapon \u2014 and why almost everything you've heard about them is wrong.",
};

const whatGodelProved = [
  "The system must be consistent (no contradictions)",
  "The system must have a decidable set of axioms",
  "The system must express the arithmetic of natural numbers with addition AND multiplication",
];

const whatCultureHeard = [
  "Mathematics is broken",
  "There are truths that can never be known",
  "Human reason has inherent limits",
  "Artificial intelligence is impossible",
  "Physics can never have a complete theory",
  "Consciousness transcends computation",
];

const keyArguments = [
  {
    title: "The Halting Problem in Disguise",
    summary:
      "G\u00F6del\u2019s First Incompleteness Theorem is logically derivable as a corollary of the undecidability of the halting problem. The content is identical \u2014 only the packaging differs.",
    detail:
      "If a consistent formal system extending Robinson arithmetic were complete, its set of theorems would be decidable, which would make the halting problem decidable, which it isn\u2019t. Computer scientists don\u2019t have an existential crisis about the halting problem \u2014 they treat it as a clean diagonal result and move on.",
  },
  {
    title: "Most of Mathematics Doesn\u2019t Care",
    summary:
      "Approximately 70\u201380% of published mathematics lives in decidable theories. Applied mathematics is entirely untouched.",
    detail:
      "Real closed fields, algebraically closed fields, abelian groups, free groups, dense linear orders, p-adic fields, Boolean algebras, o-minimal structures \u2014 all decidable. No theorem of Euclidean geometry is undecidable. No equation of mathematical physics inhabits a domain where incompleteness is relevant.",
  },
  {
    title: "Higher-Order Truths in Arithmetic Disguise",
    summary:
      "Every known PA-independent sentence involves identifiable higher-order content. No counterexample has been found in nearly a century.",
    detail:
      "The G\u00F6del sentence involves the truth predicate for PA. Goodstein\u2019s theorem requires transfinite induction to \u03B5\u2080. The Paris-Harrington theorem rests on infinite Ramsey theory. The \u2018truths beyond PA\u2019 are higher-order truths wearing arithmetical disguises.",
  },
  {
    title: "A Design Choice, Not a Cosmic Verdict",
    summary:
      "Consistency, completeness, and expressiveness form a trilemma. You can have any two but not all three. We chose consistency.",
    detail:
      "This is analogous to the CAP theorem in distributed systems. \u2018The price of consistency is incompleteness\u2019 is a design constraint. \u2018Mathematics is inherently incomplete\u2019 is a declaration of defeat. They describe the same theorem. Only one of them is honest.",
  },
];

const decidableTheories = [
  { name: "Real Closed Fields", scope: "Euclidean geometry, real analysis", proof: "Tarski, 1948" },
  { name: "Algebraically Closed Fields", scope: "Classical algebraic geometry", proof: "Tarski" },
  { name: "Presburger Arithmetic", scope: "Addition without multiplication", proof: "Presburger, 1929" },
  { name: "Free Groups", scope: "Combinatorial group theory", proof: "Sela, 2006" },
  { name: "S1S / S2S", scope: "Hardware verification industry", proof: "B\u00FCchi / Rabin" },
  { name: "Dense Linear Orders", scope: "Order theory", proof: "Langford" },
  { name: "Boolean Algebras", scope: "Logic, circuit design", proof: "Tarski" },
  { name: "O-minimal Structures", scope: "Tame topology, real geometry", proof: "Various" },
];

const references = [
  { author: "Franz\u00E9n, T.", year: 2005, title: "G\u00F6del\u2019s Theorem: An Incomplete Guide to Its Use and Abuse" },
  { author: "Feferman, S.", year: 1960, title: "Arithmetization of metamathematics in a general setting" },
  { author: "Isaacson, D.", year: 1987, title: "Arithmetical truth and hidden higher-order concepts" },
  { author: "Lawvere, F.W.", year: 1969, title: "Diagonal arguments and cartesian closed categories" },
  { author: "Davis, M.", year: 2004, title: "The Incompleteness Theorem" },
  { author: "Aaronson, S.", year: 2013, title: "Why Philosophers Should Care About Computational Complexity" },
  { author: "Sipser, M.", year: 2012, title: "Introduction to the Theory of Computation" },
  { author: "Tarski, A.", year: 1948, title: "A Decision Method for Elementary Algebra and Geometry" },
];

export default function GoedelPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/research"
          className="text-sm text-accent-primary hover:text-accent-secondary transition-colors"
        >
          &larr; Research
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12">
        <p className="text-sm font-medium text-accent-primary uppercase tracking-wider mb-3">
          Research Paper
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
          The Most Misunderstood Theorem in Mathematics
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-6">
          How G&ouml;del&apos;s incompleteness theorems became a cultural weapon
          &mdash; and why almost everything you&apos;ve heard about them is
          wrong.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
          <span>18,000+ words</span>
          <span className="text-text-muted/30">|</span>
          <span>~80 references</span>
          <span className="text-text-muted/30">|</span>
          <span>2025</span>
        </div>
      </header>

      {/* The Telephone Game */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          The Telephone Game
        </h2>
        <p className="text-accent-primary font-medium mb-6">
          The distance between what G&ouml;del proved and what the culture heard
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-3">
              What G&ouml;del Proved
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              If a formal system meets{" "}
              <strong>all three</strong> of these conditions, then there exist
              sentences it can neither prove nor refute:
            </p>
            <ol className="text-sm text-text-secondary space-y-2 list-decimal list-inside">
              {whatGodelProved.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-accent-primary font-medium">
              A precise technical result about a precisely delimited class of
              formal systems.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-3">
              What the Culture Heard
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Through philosophical leaps and selective amplification:
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              {whatCultureHeard.map((item, i) => (
                <li key={i} className="italic">
                  &ldquo;{item}&rdquo;
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-accent-warm font-medium">
              Not a minor overstep. A category error.
            </p>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="mb-16">
        <div className="p-6 sm:p-8 rounded-lg border border-accent-primary/20 bg-accent-primary/5">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            The Philosophical Sleight of Hand
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The cultural force of the theorems derives almost entirely from a
            single interpretive move: the claim that the G&ouml;del sentence G
            is not merely <strong>undecidable</strong> but{" "}
            <strong className="text-accent-primary">true</strong>.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-bg-primary border border-text-muted/10">
              <h4 className="text-sm font-semibold text-text-primary mb-1">
                The Platonist
              </h4>
              <p className="text-xs text-text-secondary">
                &ldquo;G is true but unprovable&rdquo; &mdash; mathematical
                truth outstrips formal provability.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-bg-primary border border-text-muted/10">
              <h4 className="text-sm font-semibold text-text-primary mb-1">
                The Formalist
              </h4>
              <p className="text-xs text-text-secondary">
                &ldquo;True but unprovable&rdquo; is incoherent &mdash; truth
                just is provability in a specified system.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-bg-primary border border-text-muted/10">
              <h4 className="text-sm font-semibold text-text-primary mb-1">
                The Intuitionist
              </h4>
              <p className="text-xs text-text-secondary">
                &ldquo;True but unprovable&rdquo; is a flat contradiction.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            Every sweeping claim about the limits of knowledge depends on a
            philosophical commitment that the theorems themselves do not supply.{" "}
            <strong className="text-accent-primary">
              The mathematics is airtight. The philosophy is imported.
            </strong>
          </p>
        </div>
      </section>

      {/* Four Arguments */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Four Lines of Attack
        </h2>
        <p className="text-accent-primary font-medium mb-6">
          Each independently challenges the cultural reception of the theorems
        </p>

        <div className="space-y-4">
          {keyArguments.map((arg, i) => (
            <details
              key={i}
              className="group p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-1">
                      {arg.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{arg.summary}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-text-muted flex-shrink-0 mt-1 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>
              <div className="mt-4 pt-4 border-t border-text-muted/10 ml-12">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {arg.detail}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Decidable Theories */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Completeness Is the Norm
        </h2>
        <p className="text-accent-primary font-medium mb-6">
          The theories mathematicians actually use are overwhelmingly decidable
        </p>

        <div className="overflow-x-auto rounded-lg border border-text-muted/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-text-muted/10 bg-bg-secondary/50">
                <th className="py-3 px-4 font-semibold text-text-secondary">
                  Theory
                </th>
                <th className="py-3 px-4 font-semibold text-text-secondary">
                  Scope
                </th>
                <th className="py-3 px-4 font-semibold text-text-secondary">
                  Proof
                </th>
              </tr>
            </thead>
            <tbody>
              {decidableTheories.map((theory) => (
                <tr
                  key={theory.name}
                  className="border-b border-text-muted/5"
                >
                  <td className="py-3 px-4 text-text-primary font-medium">
                    {theory.name}
                  </td>
                  <td className="py-3 px-4 text-text-secondary">
                    {theory.scope}
                  </td>
                  <td className="py-3 px-4 text-text-muted">{theory.proof}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-text-secondary">
          Saying &ldquo;mathematics is incomplete&rdquo; is like saying
          &ldquo;the Earth is covered in water.&rdquo; Technically true of a
          specific portion;{" "}
          <strong className="text-accent-primary">
            gravely misleading as a general characterization.
          </strong>
        </p>
      </section>

      {/* The Scope Inversion */}
      <section className="mb-16">
        <div className="p-6 sm:p-8 rounded-lg border border-accent-primary/20 bg-accent-primary/5">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            The Scope Inversion
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 rounded-lg bg-bg-primary border border-text-muted/10">
              <p className="text-2xl font-bold text-accent-primary">
                70&ndash;80%
              </p>
              <p className="text-xs text-text-muted mt-1">
                of published math is untouched
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-bg-primary border border-text-muted/10">
              <p className="text-2xl font-bold text-accent-secondary">100%</p>
              <p className="text-xs text-text-muted mt-1">
                of applied math is untouched
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-bg-primary border border-text-muted/10">
              <p className="text-2xl font-bold text-accent-warm">0</p>
              <p className="text-xs text-text-muted mt-1">
                counterexamples to the Encoding Thesis
              </p>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed">
            A formal system that can diagnose its own incompleteness is
            exhibiting{" "}
            <strong className="text-accent-primary">strength</strong>, not
            weakness. That this testament was received as a confession of
            inadequacy is a failure not of mathematics, but of interpretation.
          </p>
        </div>
      </section>

      {/* References */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Selected References
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {references.map((ref) => (
            <div
              key={ref.title}
              className="p-4 rounded-lg border border-text-muted/10 bg-bg-secondary/30"
            >
              <p className="text-sm font-medium text-text-primary">
                {ref.author} ({ref.year})
              </p>
              <p className="text-sm text-text-secondary italic">{ref.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Research */}
      <section className="mb-16 p-8 rounded-lg bg-bg-secondary/50 border border-text-muted/10">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          More Research
        </h3>
        <div className="space-y-3">
          <Link
            href="/research/pnp"
            className="block p-4 rounded-lg border border-text-muted/10 bg-bg-primary hover:border-accent-primary/30 transition-colors"
          >
            <p className="font-medium text-text-primary">
              The Universe Doesn&apos;t Troll Us
            </p>
            <p className="text-sm text-text-secondary">
              A Wittgensteinian framework for P vs NP &mdash; why computational
              hardness tracks semantic emptiness.
            </p>
          </Link>
        </div>
      </section>

      {/* Back */}
      <div className="text-center">
        <Link
          href="/research"
          className="text-sm text-accent-primary hover:text-accent-secondary transition-colors"
        >
          &larr; Back to Research
        </Link>
      </div>
    </div>
  );
}
