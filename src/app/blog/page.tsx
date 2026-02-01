import type { Metadata } from "next";
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Blog
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-12">
        Shorter-form thoughts on AI, consciousness, language, technology, and
        whatever else captures my attention.
      </p>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
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
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-bg-secondary flex items-center justify-center">
            <svg
              className="w-8 h-8 text-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            Coming Soon
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            The blog is under construction. Check back soon for thoughts on AI
            consciousness, computational semantics, and other explorations.
          </p>
        </div>
      )}
    </div>
  );
}
