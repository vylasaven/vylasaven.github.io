import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on AI, consciousness, language, and technology by David Arnold.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Blog
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-12">
        On AI, consciousness, language, technology, and whatever else captures
        my attention.
      </p>

      {posts.length > 0 ? (
        <div className="flex gap-10">
          {/* Sidebar TOC */}
          <nav className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                All Posts
              </h2>
              <ul className="space-y-2">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block text-sm text-text-secondary hover:text-accent-primary transition-colors leading-snug"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Posts */}
          <div className="flex-1 space-y-6">
            {posts.map((post) => (
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
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            Coming Soon
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
