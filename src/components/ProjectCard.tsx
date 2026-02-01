import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  links?: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags = [],
  links = [],
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group p-6 rounded-lg border border-text-muted/10 bg-bg-primary",
        "hover:border-accent-primary/30 hover:shadow-sm transition-all",
        className
      )}
    >
      <h3 className="font-semibold text-lg text-text-primary group-hover:text-accent-primary transition-colors">
        {title}
      </h3>

      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {description}
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

      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((link) =>
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
    </div>
  );
}
