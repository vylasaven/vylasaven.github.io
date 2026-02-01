import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Book David Arnold for keynotes, panels, workshops, and podcasts on AI, interdisciplinary thinking, and personal resilience.",
};

const speakingTopics = [
  {
    title: "AI & Technology",
    description:
      "What does it mean for a machine to be conscious? How do we build AI systems that genuinely understand language? I explore these questions at the cutting edge of AI research, making complex technical and philosophical ideas accessible to diverse audiences.",
    topics: [
      "AI consciousness and the future of machine intelligence",
      "Building at the intersection of disciplines",
      "The Agentic Hypothesis: What agency means for AI",
      "Computational approaches to language and meaning",
    ],
    accent: "accent-primary",
  },
  {
    title: "The Polymath Path",
    description:
      "My Stanford education spanned engineering, computer science, psychology, design, and philosophy—not because I couldn't choose, but because the most important questions live at disciplinary boundaries. I speak about thriving as a generalist in a specialist world.",
    topics: [
      "Thriving across disciplines",
      "Integration as expertise: why generalists matter",
      "Career paths that defy categorization",
      "Bridging academic research and practical application",
    ],
    accent: "accent-secondary",
  },
  {
    title: "Resilience & Personal Growth",
    description:
      "Some of my most meaningful insights come from navigating family challenges, including supporting parents through mental health struggles and processing profound loss. I've also lost over 250 pounds over the course of my life—a journey that taught me about sustainable change, identity, and the psychology of transformation. I draw on long-term research into what I call 'insidious loops'—the self-reinforcing psychological patterns that keep people stuck—offering frameworks for recognizing and escaping them.",
    topics: [
      "Navigating family challenges and finding your path",
      "Building meaning through adversity",
      "Transformation: lessons from losing 250+ pounds",
      "Insidious loops: understanding self-defeating psychological patterns",
      "Mental health awareness: supporting those who support others",
      "The intersection of personal experience and professional purpose",
    ],
    accent: "accent-warm",
  },
];

const formats = [
  {
    title: "Keynote Talks",
    description: "Engaging presentations for conferences and summits",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    title: "Panel Discussions",
    description: "Fireside chats and moderated conversations",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Interactive Workshops",
    description: "Hands-on sessions for deeper exploration",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Podcasts & Media",
    description: "Long-form conversations and interviews",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
];

const audiences = [
  "Tech conferences and AI summits",
  "Universities and research institutions",
  "Corporate teams and leadership offsites",
  "Mental health and wellness organizations",
];

export default function SpeakingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
          Speaking
        </h1>
        <p className="text-lg text-text-secondary mb-6">
          Bridging technical depth, interdisciplinary insight, and authentic
          lived experience.
        </p>
        <p className="text-text-secondary leading-relaxed">
          I bring a unique perspective shaped by interdisciplinary training,
          independent research, and lived experience. Whether exploring the
          frontiers of AI consciousness or sharing insights from navigating
          personal challenges, I aim to leave audiences with both new frameworks
          for thinking and practical wisdom they can apply.
        </p>
      </section>

      {/* Speaking Topics */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">
          Speaking Topics
        </h2>
        <div className="grid gap-6">
          {speakingTopics.map((topic) => (
            <div
              key={topic.title}
              className="p-6 rounded-lg border border-text-muted/10 bg-bg-primary hover:border-text-muted/20 transition-colors"
            >
              <h3
                className={`text-xl font-semibold mb-3 ${
                  topic.accent === "accent-primary"
                    ? "text-accent-primary"
                    : topic.accent === "accent-secondary"
                    ? "text-accent-secondary"
                    : "text-accent-warm"
                }`}
              >
                {topic.title}
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                {topic.description}
              </p>
              <ul className="space-y-2">
                {topic.topics.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        topic.accent === "accent-primary"
                          ? "bg-accent-primary"
                          : topic.accent === "accent-secondary"
                          ? "bg-accent-secondary"
                          : "bg-accent-warm"
                      }`}
                    />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Formats Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">
          Formats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {formats.map((format) => (
            <div
              key={format.title}
              className="p-4 rounded-lg border border-text-muted/10 bg-bg-secondary/30 text-center"
            >
              <div className="text-text-muted mb-3 flex justify-center">
                {format.icon}
              </div>
              <h3 className="font-medium text-text-primary text-sm mb-1">
                {format.title}
              </h3>
              <p className="text-xs text-text-muted">{format.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audiences Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Audiences
        </h2>
        <div className="flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="px-4 py-2 rounded-full bg-bg-secondary text-text-secondary text-sm"
            >
              {audience}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-8 rounded-lg bg-bg-secondary/50 border border-text-muted/10">
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Book a Speaking Engagement
        </h2>
        <p className="text-text-secondary mb-6">
          Interested in having me speak at your event? I&apos;d love to hear
          about it. Please include details about:
        </p>
        <ul className="space-y-2 mb-6 text-text-secondary">
          <li className="flex items-start gap-2">
            <span className="text-accent-primary mt-1">•</span>
            <span>Event type and format</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-primary mt-1">•</span>
            <span>Your audience</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-primary mt-1">•</span>
            <span>Topics you&apos;re interested in</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-primary mt-1">•</span>
            <span>Proposed date(s)</span>
          </li>
        </ul>
        <a
          href="mailto:david.christopher.arnold@gmail.com?subject=Speaking%20Inquiry"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          Get in Touch
        </a>
      </section>
    </div>
  );
}
