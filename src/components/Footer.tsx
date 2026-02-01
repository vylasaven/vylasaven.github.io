import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-text-muted/10 bg-bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-text-primary mb-3">
              David Arnold
            </h3>
            <p className="text-sm text-text-secondary">
              Independent researcher working at the intersection of AI,
              cognitive science, and language.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/research"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/vylasaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/davidcarlarnold/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-text-muted/10 text-center text-sm text-text-muted">
          <p>&copy; {currentYear} David Arnold. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
