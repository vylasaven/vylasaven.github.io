import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Hidden Intersections",
  description:
    "How point-free topology reveals that the Banach-Tarski pieces were never truly disjoint — and the paradox dissolves.",
};

const argumentChain = [
  {
    step: 1,
    title: "The Pieces Are Dense",
    summary:
      "Every Banach-Tarski piece meets every open ball in B\u00B3. The pieces are everywhere dense.",
    detail:
      "The BT decomposition relies on a free group of rotations acting on the sphere. Because the rotation group is dense in SO(3), every orbit visits every neighborhood. No piece can be confined to any region of the sphere.",
  },
  {
    step: 2,
    title: "Dense Subsets Become Dense Sublocales",
    summary:
      "The canonical embedding from subsets to sublocales preserves density. Dense subsets map to dense sublocales.",
    detail:
      "For every subset A \u2286 X, there is a canonical sublocale S_A. If A is dense in X, then S_A is dense in the locale of X. The BT pieces, being dense subsets, become dense sublocales.",
  },
  {
    step: 3,
    title: "Dense Sublocales Always Overlap",
    summary:
      "Isbell\u2019s density theorem: the meet of any family of dense sublocales is dense. Dense sublocales cannot be disjoint.",
    detail:
      "Every locale has a smallest dense sublocale S\u2080, consisting of the regular open sets. Any dense sublocale S satisfies S \u2265 S\u2080. The meet of all BT pieces (as sublocales) contains S\u2080. They are not disjoint in the locale-theoretic sense.",
  },
  {
    step: 4,
    title: "The Overlap Has Full Measure",
    summary:
      "Simpson\u2019s theorem: Lebesgue measure extends to all sublocales. The shared sublocale S\u2080 has \u03BC*(S\u2080) = \u03BC(B\u00B3).",
    detail:
      "Simpson (2012) proved that the classical measure extends uniquely to an outer measure on all sublocales satisfying the modularity equation: \u03BC*(S \u2228 T) = \u03BC*(S) + \u03BC*(T) \u2212 \u03BC*(S \u2227 T). The overlap absorbs the apparent doubling.",
  },
  {
    step: 5,
    title: "The Paradox Is Blocked",
    summary:
      "Finite additivity requires disjoint pieces. The BT pieces are not disjoint as sublocales. So the volume-doubling step is invalid.",
    detail:
      "The argument \u03BC(B\u00B3) = \u03BC(A\u2081) + \u2026 + \u03BC(A\u2085) requires finite additivity, which requires disjointness. In the sublocale framework, the pieces share the dense sublocale S\u2080 of full measure. The modularity equation replaces additivity, and the overlap terms absorb the doubling.",
  },
];

const comparisonRows = [
  { property: "Pieces are\u2026", bt: "Non-measurable, everywhere dense", df: "Open sets (Borel measurable)" },
  { property: "Disjoint as sets?", bt: "Yes", df: "Yes" },
  { property: "Disjoint as sublocales?", bt: "No \u2014 dense sublocales always overlap", df: "Yes \u2014 open sets are complemented" },
  { property: "Uses Axiom of Choice?", bt: "Yes", df: "No" },
  { property: "Paradox in locale framework?", bt: "No \u2014 additivity blocked", df: "Yes \u2014 genuinely paradoxical" },
];

const references = [
  { author: "Simpson, A.", year: 2012, title: "Measure, randomness and sublocales", journal: "APAL 163(11), 1642\u20131659" },
  { author: "Picado, J. & Pultr, A.", year: 2012, title: "Frames and Locales: Topology without Points", journal: "Birkh\u00E4user" },
  { author: "Leroy, J.", year: 1995, title: "Un th\u00E9or\u00E8me de Banach-Tarski dans le cadre localique", journal: "arXiv:1303.5631" },
  { author: "Lehner, T.", year: 2025, title: "Measure theory via locales", journal: "arXiv:2510.08826" },
  { author: "Isbell, J.", year: 1972, title: "Atomless parts of spaces", journal: "Math. Scand. 31, 5\u201332" },
  { author: "Wagon, S.", year: 1993, title: "The Banach-Tarski Paradox", journal: "Cambridge University Press" },
  { author: "Dougherty, R. & Foreman, M.", year: 1994, title: "Banach-Tarski decompositions using sets with the property of Baire", journal: "JAMS 7(1), 75\u2013124" },
  { author: "Johnstone, P.T.", year: 1982, title: "Stone Spaces", journal: "Cambridge University Press" },
];

export default function BanachTarskiPage() {
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
          The Hidden Intersections
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-6">
          How point-free topology reveals that the Banach-Tarski pieces were
          never truly disjoint &mdash; and the paradox dissolves.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-6">
          <span>~30 pages</span>
          <span className="text-text-muted/30">|</span>
          <span>Full ZFC</span>
          <span className="text-text-muted/30">|</span>
          <span>2025</span>
        </div>
        <a
          href="/papers/banach-tarski.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/90 transition-colors"
        >
          Download PDF
        </a>
      </header>

      {/* The Paradox */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          The Paradox
        </h2>
        <p className="text-accent-primary font-medium mb-6">
          A theorem so counterintuitive it earned the name &ldquo;paradox&rdquo;
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-3">
              What the Theorem Says
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              A solid ball B&sup3; can be decomposed into five pieces and
              reassembled using only rigid motions into{" "}
              <strong>two</strong> solid balls identical to the original.
            </p>
            <ol className="text-sm text-text-secondary space-y-1.5 list-decimal list-inside">
              <li>Take a solid ball in &real;&sup3;</li>
              <li>Cut it into 5 disjoint pieces (as point-sets)</li>
              <li>Rotate and translate the pieces</li>
              <li>Obtain two complete copies of the original</li>
            </ol>
          </div>

          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-3">
              Why It&apos;s Called a Paradox
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Rigid motions preserve volume. One ball has volume V. Two balls
              have volume 2V. It appears that volume was created from nothing.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              But what if the pieces aren&apos;t really disjoint?
            </p>
          </div>
        </div>
      </section>

      {/* Three Responses */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          The Standard Responses
        </h2>
        <p className="text-accent-primary font-medium mb-6">
          Three ways mathematicians have lived with the paradox
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-2">Accept It</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              The pieces are non-measurable &mdash; volume is undefined for
              them. Technically correct, but unsatisfying.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-2">
              Reject the Axiom of Choice
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Work in the Solovay model. But this costs Hahn-Banach, Tychonoff,
              and much of functional analysis.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-accent-primary/30 bg-accent-primary/5">
            <h3 className="font-semibold text-text-primary mb-2">
              Fix the Definition of &ldquo;Part&rdquo;
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Replace point-set topology with locale theory. The pieces overlap.{" "}
              <strong className="text-accent-primary">
                Our approach &mdash; works in full ZFC.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="mb-16">
        <div className="p-6 sm:p-8 rounded-lg border border-accent-primary/20 bg-accent-primary/5">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Key Insight
          </h2>
          <p className="text-lg text-text-primary font-medium mb-4">
            Two sets can share no points and still overlap as parts of a space.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            In locale theory, &ldquo;part of a space&rdquo; means something
            richer than &ldquo;subset of points.&rdquo; A sublocale captures how
            a part sits within the ambient topology. Two sublocales can be
            point-disjoint yet topologically intertwined.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-bg-primary border border-text-muted/10">
              <p className="text-sm font-semibold text-text-primary mb-1">
                As point-sets:
              </p>
              <p className="text-sm text-text-secondary">
                &Qopf; and &Ropf;\&Qopf; are completely disjoint. Not a single
                point in common.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-bg-primary border border-text-muted/10">
              <p className="text-sm font-semibold text-text-primary mb-1">
                As sublocales:
              </p>
              <p className="text-sm text-text-secondary">
                Both are dense. Their meet contains S&#x2080; (the regular
                opens). They share the entire topological skeleton of &Ropf;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Argument Chain */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Five Steps to Dissolution
        </h2>
        <p className="text-accent-primary font-medium mb-6">
          Each step is independently verifiable
        </p>

        <div className="space-y-4">
          {argumentChain.map((arg) => (
            <details
              key={arg.step}
              className="group p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold flex items-center justify-center">
                    {arg.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-1">
                      {arg.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {arg.summary}
                    </p>
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

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          BT vs. Dougherty-Foreman
        </h2>
        <p className="text-accent-primary font-medium mb-6">
          The locale framework correctly distinguishes the two cases
        </p>

        <div className="overflow-x-auto rounded-lg border border-text-muted/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-text-muted/10 bg-bg-secondary/50">
                <th className="py-3 px-4 font-semibold text-text-secondary">
                  Property
                </th>
                <th className="py-3 px-4 font-semibold text-text-secondary">
                  Banach-Tarski
                </th>
                <th className="py-3 px-4 font-semibold text-text-secondary">
                  Dougherty-Foreman
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.property}
                  className="border-b border-text-muted/5"
                >
                  <td className="py-3 px-4 text-text-primary font-medium">
                    {row.property}
                  </td>
                  <td className="py-3 px-4 text-text-secondary">{row.bt}</td>
                  <td className="py-3 px-4 text-text-secondary">{row.df}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-text-secondary">
          The locale framework doesn&apos;t blindly dissolve all paradoxes
          &mdash; it makes precise distinctions. BT is blocked because its
          pieces overlap as sublocales. DF goes through because its pieces are
          genuinely disjoint.
        </p>
      </section>

      {/* Why Locales */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Why Locales Are the Right Setting
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Locale theory isn&apos;t an ad hoc fix for one paradox. It&apos;s an
          independently motivated framework that resolves BT as a side effect.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-2">
              Tychonoff Without Choice
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Products of compact locales are compact &mdash; no Axiom of Choice
              needed.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-2">
              Constructive Mathematics
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Locales are the natural framework for topology in constructive and
              predicative mathematics.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
            <h3 className="font-semibold text-text-primary mb-2">
              Physical Space
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Physical space has no dimensionless points. Locales model space via
              its observable structure.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded PDF */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Read the Full Paper
        </h2>
        <div className="rounded-lg border border-text-muted/10 overflow-hidden">
          <object
            data="/papers/banach-tarski.pdf"
            type="application/pdf"
            className="w-full"
            style={{ height: "80vh" }}
          >
            <div className="p-8 text-center">
              <p className="text-text-secondary mb-4">
                PDF viewer not available in this browser.
              </p>
              <a
                href="/papers/banach-tarski.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/90 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </object>
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
              <p className="text-xs text-text-muted">{ref.journal}</p>
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
            href="/research/goedel"
            className="block p-4 rounded-lg border border-text-muted/10 bg-bg-primary hover:border-accent-primary/30 transition-colors"
          >
            <p className="font-medium text-text-primary">
              The Most Misunderstood Theorem in Mathematics
            </p>
            <p className="text-sm text-text-secondary">
              How G&ouml;del&apos;s incompleteness theorems became a cultural
              weapon &mdash; and why almost everything you&apos;ve heard is
              wrong.
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
