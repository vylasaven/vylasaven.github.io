import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "David Arnold — Quality engineer for autonomous systems, building with AI agents. 15+ years from Apple to Stanford to three autonomous systems companies.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-8">
        About
      </h1>

      {/* Hero */}
      <div className="mb-10 flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
          <span className="text-3xl font-bold text-white">DA</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-text-primary">
            David Arnold
          </h2>
          <p className="text-text-secondary">
            Quality engineer for autonomous systems. Building with AI agents.
          </p>
        </div>
      </div>

      {/* Narrative */}
      <section className="mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            I&apos;ve spent my career ensuring autonomous systems behave
            correctly — and AI agents are just the latest ones. After three years
            at Apple learning to diagnose systems and train people, I studied
            Philosophy and Symbolic Systems at Stanford: the study of how minds,
            machines, and language interact. Then I went straight into autonomous
            systems — ocean robots at Liquid Robotics/Boeing, mining vehicles at
            SafeAI, and now maritime autonomy at Saronic Technologies.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            At Saronic, I started using Claude Code in March 2025 to build a
            testrunner for on-water software testing. Within nine months, I had
            orchestrated AI agents to build a full-stack quality platform —
            testrunner, TestRail/Linear/GitHub/JAMA integrations, dashboard,
            CI/CD test suite — that a software engineer with a traditional CS
            degree now develops on. That work led to a promotion to Software
            Quality Manager and a team of two.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The throughline is the same problem at every scale: how do you verify
            that an autonomous system does what it should? Whether that system is
            an ocean-going robot, a 200-ton mining truck, a maritime vessel, or
            an AI agent writing production code.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Experience
        </h2>
        <div className="border-l-2 border-accent-primary/30 pl-6 space-y-8">
          {/* Saronic */}
          <div className="p-5 rounded-lg border border-accent-primary/20 bg-bg-secondary/30">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="font-semibold text-text-primary">
                Saronic Technologies
              </h3>
              <span className="text-sm text-text-muted">
                Oct 2024 &ndash; Present
              </span>
            </div>
            <p className="text-sm text-accent-primary mb-3">
              Senior Software Test Engineer &rarr; Software Quality Manager
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>
                Built full-stack quality platform through AI agent orchestration
                in 9 months — testrunner, integrations, dashboard, CI/CD
              </li>
              <li>
                Integrated TestRail, Linear, GitHub, and JAMA into unified
                traceability system
              </li>
              <li>
                Hired and managed 2 engineers; stood up PagerDuty, Linear
                workflows, and SlackBot tooling
              </li>
              <li>
                Established E2E autonomous testing and RACI-driven process
                across engineering
              </li>
            </ul>
          </div>

          {/* SafeAI */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="font-semibold text-text-primary">SafeAI</h3>
              <span className="text-sm text-text-muted">2022 &ndash; 2024</span>
            </div>
            <p className="text-sm text-accent-primary mb-3">
              Senior Software QA Engineer
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>
                QA for autonomous mining vehicles — ros2/Python test
                infrastructure
              </li>
              <li>
                Root-caused PTPv2 IEEE 1588 timing issues; network engineering
                for compute hardware revision
              </li>
              <li>Mentored junior engineers on test methodology and tooling</li>
            </ul>
          </div>

          {/* Liquid Robotics / Boeing */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="font-semibold text-text-primary">
                Liquid Robotics / Boeing
              </h3>
              <span className="text-sm text-text-muted">2015 &ndash; 2022</span>
            </div>
            <p className="text-sm text-accent-primary mb-3">
              Software QA &rarr; Test Engineer &rarr; QA Lead
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>Boeing Award for Technical Achievement</li>
              <li>
                500+ test cases on flagship shoreside project; Jenkins CI/CD
                automation
              </li>
              <li>
                Progressed from Wave Glider mission support to QA to team lead
              </li>
            </ul>
          </div>

          {/* Apple */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="font-semibold text-text-primary">Apple</h3>
              <span className="text-sm text-text-muted">2006 &ndash; 2009</span>
            </div>
            <p className="text-sm text-accent-primary mb-3">Mac Genius</p>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>
                5,000+ issues resolved, 99% customer satisfaction; trained 2
                teams
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How I Build */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          How I Build
        </h2>
        <div className="p-8 rounded-lg bg-bg-secondary/50 border border-text-muted/10">
          <p className="text-text-secondary leading-relaxed mb-4">
            In March 2025, I started using Claude Code to build a testrunner
            application at Saronic. I scaled from single-agent work to
            orchestrating teams of AI agents. By December, I had a full-stack
            quality platform — testrunner, integrations, dashboard, CI/CD —
            built almost entirely through agent orchestration. A software
            engineer with a traditional CS degree now develops on the codebase.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            This site and every public repo on my GitHub were built the same
            way.
          </p>
          <p className="text-text-secondary leading-relaxed">
            This isn&apos;t about using AI as an autocomplete. It&apos;s
            engineering methodology: specifying requirements, directing agent
            work, reviewing output, iterating on architecture. The skill is
            knowing what to build, how to decompose it, and how to verify the
            result.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Education
        </h2>
        <div className="border-l-2 border-accent-primary/30 pl-6 space-y-6">
          <div>
            <h3 className="font-semibold text-text-primary">
              Stanford University
            </h3>
            <p className="text-sm text-text-muted">2011 &ndash; 2015</p>
            <p className="mt-2 text-text-secondary">
              BA Philosophy, Symbolic Systems emphasis — the study of how minds,
              machines, and language interact, spanning CS, philosophy,
              psychology, and linguistics. Certificate in Global Human Rights.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">
              Pikes Peak Community College
            </h3>
            <p className="text-sm text-text-muted">2010 &ndash; 2011</p>
            <p className="mt-2 text-text-secondary">
              Associate of Science. 4.0 GPA.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-medium text-text-primary mb-3">
              AI &amp; Orchestration
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Claude Code",
                "AI Agent Orchestration",
                "Multi-Agent Workflows",
                "Prompt Engineering",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-bg-secondary text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-text-primary mb-3">
              Languages &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "TypeScript",
                "React",
                "Next.js",
                "Rust (PyO3)",
                "ros2",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-bg-secondary text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-text-primary mb-3">
              Quality &amp; Process
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Test Planning & Automation",
                "CI/CD",
                "Jenkins",
                "GitHub Actions",
                "JIRA/Linear",
                "TestRail",
                "JAMA",
                "Requirements Traceability",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-bg-secondary text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-text-primary mb-3">
              Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "PagerDuty",
                "Docker",
                "Ubuntu/Linux",
                "Networking",
                "PTPv2/IEEE 1588",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-bg-secondary text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Research
        </h2>
        <p className="text-text-secondary leading-relaxed">
          I also pursue independent research in AI consciousness, computational
          semantics, and social technology.{" "}
          <Link
            href="/research"
            className="text-accent-primary hover:text-accent-secondary transition-colors"
          >
            See current projects &rarr;
          </Link>
        </p>
      </section>
    </div>
  );
}
