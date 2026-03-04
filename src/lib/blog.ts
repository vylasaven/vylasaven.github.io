import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
}

// Posts that have dedicated page.tsx components instead of MDX files
const componentPosts: BlogPostMeta[] = [
  {
    slug: "goedel",
    title: "The Most Misunderstood Theorem in Mathematics",
    date: "2025-02-01",
    excerpt:
      "How Gödel's incompleteness theorems became a cultural weapon — and why almost everything you've heard about them is wrong.",
    tags: ["logic", "mathematics", "essay"],
    readingTime: "80 min read",
  },
  {
    slug: "pnp",
    title: "The Universe Doesn't Troll Us",
    date: "2026-02-18",
    excerpt:
      "A Wittgensteinian framework for P vs NP — with interactive demos.",
    tags: ["complexity theory", "philosophy", "interactive", "essay"],
    readingTime: "35 min read",
  },
];

export function getAllPosts(): BlogPostMeta[] {
  const mdxPosts: BlogPostMeta[] = [];

  if (fs.existsSync(BLOG_DIR)) {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

    for (const filename of files) {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      mdxPosts.push({
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readingTime: readingTime(content).text,
      });
    }
  }

  return [...mdxPosts, ...componentPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
