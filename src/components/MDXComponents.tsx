import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-text-primary">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mt-8 mb-3 text-text-primary">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-6 mb-2 text-text-primary">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-4 text-text-secondary leading-relaxed">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:text-accent-secondary underline underline-offset-2 transition-colors"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || ""}
        className="text-accent-primary hover:text-accent-secondary underline underline-offset-2 transition-colors"
      >
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc text-text-secondary space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal text-text-secondary space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-4 border-l-4 border-accent-primary/30 italic text-text-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 rounded bg-bg-secondary text-accent-secondary text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 p-4 rounded-lg bg-bg-accent text-bg-primary overflow-x-auto font-mono text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-text-muted/20" />,
};
