import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Fiction, publications, and essays by David Arnold.",
};

export default function WritingPage() {
  const featuredPosts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Writing
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-12">
        From fiction to research, exploring ideas through the written word.
      </p>

      {/* Novel */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-accent-warm"></span>
          Novel
        </h2>
        <div className="p-6 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
          <h3 className="text-xl font-semibold text-text-primary">
            Technically Magic
          </h3>
          <p className="text-sm text-text-muted mt-1">
            Comic Fantasy Novel
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            What if magic worked like code? When programmer Marcus Chen
            discovers that spells are just poorly documented APIs to reality, he
            finds himself debugging incantations, refactoring rituals, and
            dealing with the ultimate legacy codebase—ancient magic written by
            developers who never believed in comments.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            A comic fantasy exploring the intersection of technology and the
            arcane, where stack traces meet spell traces and the only thing
            worse than a null pointer exception is accidentally summoning one.
          </p>
          <a
            href="https://www.amazon.com/Technically-Magic-David-Arnold-ebook/dp/B002VWKFVE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-5 py-2 bg-accent-warm text-white rounded-lg font-medium hover:bg-accent-warm/90 transition-colors"
          >
            Available on Amazon
          </a>
        </div>
      </section>

      {/* Short Fiction */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-accent-secondary"></span>
          Short Fiction
        </h2>
        <div className="space-y-4">
          <div className="p-5 rounded-lg border border-text-muted/10">
            <h3 className="font-semibold text-text-primary">
              &quot;I, Hog&quot;
            </h3>
            <p className="text-sm text-text-muted">
              The Fabulist, 2010
            </p>
            <p className="mt-2 text-text-secondary text-sm">
              A short story exploring consciousness and identity through an
              unexpected lens.
            </p>
          </div>
        </div>
      </section>

      {/* Academic/Research Writing */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-accent-primary"></span>
          Research Writing
        </h2>
        <div className="space-y-4">
          <div className="p-5 rounded-lg border border-text-muted/10">
            <h3 className="font-semibold text-text-primary">
              AWAKEN Research Documentation
            </h3>
            <p className="text-sm text-text-muted">
              Ongoing research program
            </p>
            <p className="mt-2 text-text-secondary text-sm">
              Theoretical frameworks (DSMAT) and empirical methodologies (CAVM)
              for investigating consciousness in AI systems.
            </p>
            <a
              href="https://awaken.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-accent-primary hover:text-accent-secondary transition-colors"
            >
              View research &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-text-muted"></span>
            Blog Highlights
          </h2>
          <div className="space-y-4">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-5 rounded-lg border border-text-muted/10 hover:border-accent-primary/30 transition-all"
              >
                <h3 className="font-semibold text-text-primary hover:text-accent-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="mt-2 text-text-secondary text-sm">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-6 inline-block text-accent-primary hover:text-accent-secondary transition-colors"
          >
            View all posts &rarr;
          </Link>
        </section>
      )}

      {/* Call to Action */}
      <section className="p-8 rounded-lg bg-bg-secondary/50 border border-text-muted/10">
        <h2 className="text-xl font-semibold text-text-primary mb-3">
          Stay Updated
        </h2>
        <p className="text-text-secondary mb-4">
          New writing is announced on my blog. Check back regularly or follow me
          on GitHub for updates on research and creative projects.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="text-accent-primary hover:text-accent-secondary transition-colors"
          >
            Visit the blog &rarr;
          </Link>
          <a
            href="https://github.com/vylasaven"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:text-accent-secondary transition-colors"
          >
            Follow on GitHub &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
