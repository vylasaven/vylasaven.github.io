import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogPostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  readingTime?: string;
  className?: string;
}

export function BlogPostCard({
  slug,
  title,
  date,
  excerpt,
  tags = [],
  readingTime,
  className,
}: BlogPostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article
      className={cn(
        "group p-6 rounded-lg border border-text-muted/10 bg-bg-primary",
        "hover:border-accent-primary/30 hover:shadow-sm transition-all",
        className
      )}
    >
      <div className="flex items-center gap-3 text-sm text-text-muted mb-2">
        <time dateTime={date}>{formattedDate}</time>
        {readingTime && (
          <>
            <span>&middot;</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>

      <Link href={`/blog/${slug}`}>
        <h3 className="font-semibold text-lg text-text-primary group-hover:text-accent-primary transition-colors">
          {title}
        </h3>
      </Link>

      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {excerpt}
      </p>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-bg-secondary text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Link
        href={`/blog/${slug}`}
        className="mt-4 inline-block text-sm text-accent-primary hover:text-accent-secondary transition-colors"
      >
        Read more &rarr;
      </Link>
    </article>
  );
}
