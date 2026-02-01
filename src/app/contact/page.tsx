import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with David Arnold.",
};

const contactLinks = [
  {
    label: "Email",
    value: "david.christopher.arnold@gmail.com",
    href: "mailto:david.christopher.arnold@gmail.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "@vylasaven",
    href: "https://github.com/vylasaven",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "David Arnold",
    href: "https://www.linkedin.com/in/davidcarlarnold/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Contact
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-12">
        Interested in discussing research, collaboration, or just want to say
        hello? I&apos;d love to hear from you.
      </p>

      <div className="grid gap-4 mb-16">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="group flex items-center gap-4 p-5 rounded-lg border border-text-muted/10 hover:border-accent-primary/30 hover:shadow-sm transition-all"
          >
            <div className="text-text-muted group-hover:text-accent-primary transition-colors">
              {link.icon}
            </div>
            <div>
              <p className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                {link.label}
              </p>
              <p className="text-sm text-text-secondary">{link.value}</p>
            </div>
            <svg
              className="w-5 h-5 ml-auto text-text-muted group-hover:text-accent-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        ))}
      </div>

      {/* What I'm Interested In */}
      <section className="p-8 rounded-lg bg-bg-secondary/50 border border-text-muted/10">
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          What I&apos;m Interested In
        </h2>
        <div className="space-y-4 text-text-secondary">
          <p>
            I&apos;m always open to conversations about:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">Research collaboration</strong> on AI
                consciousness, computational semantics, or related areas
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">Interesting problems</strong> at the
                intersection of language, mind, and technology
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">Speaking opportunities</strong> about
                AI research or interdisciplinary approaches
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">Thoughtful feedback</strong> on my
                research frameworks or creative work
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Response Time */}
      <p className="mt-8 text-sm text-text-muted text-center">
        I typically respond within a few days. If it&apos;s urgent, email is
        your best bet.
      </p>
    </div>
  );
}
