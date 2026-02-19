"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Checking answers is easy",
    visual: "puzzle-check",
    text: "Imagine you have a big jigsaw puzzle. If someone hands you a finished puzzle, it's easy to check — you just look at it and see if all the pieces fit. That takes a few seconds.",
  },
  {
    title: "Finding answers is hard",
    visual: "puzzle-solve",
    text: "But if someone dumps a box of 1,000 pieces on the floor and says \"solve it\" — that takes hours. Maybe days. Finding the answer is way harder than checking it.",
  },
  {
    title: "That's P vs NP",
    visual: "question",
    text: "P vs NP is asking: is checking always easier than finding? Or is there some clever trick that makes finding just as fast as checking — for every problem, ever?",
  },
  {
    title: "Why it matters",
    visual: "lock",
    text: "Right now, your passwords work because finding them is hard but checking them is easy. If P = NP, someone could find every password as fast as they can check one. Every lock in the digital world breaks.",
  },
  {
    title: "Our argument",
    visual: "lightbulb",
    text: "We think the \"impossibly hard\" puzzles are puzzles about nothing — like a jigsaw where the pieces are random colors with no picture. Real puzzles, about real things, have structure you can exploit. The universe doesn't make pointlessly hard puzzles.",
  },
];

function PuzzleCheck() {
  return (
    <div className="grid grid-cols-4 gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm"
          style={{ background: `hsl(${200 + (i % 4) * 15}, 60%, ${45 + Math.floor(i / 4) * 8}%)` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.03, type: "spring", stiffness: 200 }}
        />
      ))}
    </div>
  );
}

function PuzzleSolve() {
  const positions = [
    { x: 0, y: 30 }, { x: 45, y: 5 }, { x: 20, y: 55 }, { x: 70, y: 40 },
    { x: 10, y: 10 }, { x: 55, y: 60 }, { x: 35, y: 35 }, { x: 75, y: 15 },
    { x: 5, y: 65 }, { x: 60, y: 25 }, { x: 25, y: 0 }, { x: 80, y: 55 },
    { x: 40, y: 70 }, { x: 15, y: 40 }, { x: 65, y: 5 }, { x: 50, y: 45 },
  ];
  return (
    <div className="relative w-28 h-24 sm:w-36 sm:h-28">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 sm:w-7 sm:h-7 rounded-sm"
          style={{
            background: `hsl(${200 + (i % 4) * 15}, 60%, ${45 + Math.floor(i / 4) * 8}%)`,
            left: `${pos.x}%`,
            top: `${pos.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: [0, 10, -5, 0],
          }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
        />
      ))}
    </div>
  );
}

function QuestionMark() {
  return (
    <motion.div
      className="text-6xl sm:text-7xl font-bold"
      style={{ color: "var(--accent-primary)" }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ?
    </motion.div>
  );
}

function Lock() {
  return (
    <div className="flex gap-2">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-8 h-6 rounded-t-full border-3 border-green-400" style={{ borderBottom: "none", borderWidth: 3 }} />
        <div className="w-10 h-8 rounded-sm bg-green-500/20 border-2 border-green-400 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-green-400 mt-1">check</span>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-8 h-6 rounded-t-full border-3 border-red-400" style={{ borderBottom: "none", borderWidth: 3 }} />
        <div className="w-10 h-8 rounded-sm bg-red-500/20 border-2 border-red-400 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-red-400" />
        </div>
        <span className="text-xs text-red-400 mt-1">find</span>
      </motion.div>
    </div>
  );
}

function Lightbulb() {
  return (
    <motion.div
      className="text-5xl sm:text-6xl"
      animate={{
        filter: [
          "drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))",
          "drop-shadow(0 0 16px rgba(251, 191, 36, 0.6))",
          "drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg width="48" height="56" viewBox="0 0 48 56" fill="none" className="sm:w-14 sm:h-16">
        <path
          d="M24 4C14 4 6 12 6 22C6 28 9 33 14 36V42C14 44.2 15.8 46 18 46H30C32.2 46 34 44.2 34 42V36C39 33 42 28 42 22C42 12 34 4 24 4Z"
          fill="var(--accent-warm)"
          fillOpacity={0.3}
          stroke="var(--accent-warm)"
          strokeWidth={2}
        />
        <rect x="18" y="46" width="12" height="3" rx="1" fill="var(--accent-warm)" fillOpacity={0.5} />
        <rect x="20" y="50" width="8" height="3" rx="1" fill="var(--accent-warm)" fillOpacity={0.4} />
        <line x1="24" y1="18" x2="24" y2="30" stroke="var(--accent-warm)" strokeWidth={2} strokeLinecap="round" />
        <line x1="18" y1="24" x2="30" y2="24" stroke="var(--accent-warm)" strokeWidth={2} strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

const visuals: Record<string, () => React.ReactNode> = {
  "puzzle-check": PuzzleCheck,
  "puzzle-solve": PuzzleSolve,
  question: QuestionMark,
  lock: Lock,
  lightbulb: Lightbulb,
};

export default function ELI5() {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const Visual = visuals[current.visual];

  return (
    <div>
      {/* Step indicator */}
      <div className="flex gap-1.5 mb-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === step
                ? "w-8 bg-accent-primary"
                : i < step
                ? "w-4 bg-accent-primary/40"
                : "w-4 bg-text-muted/20"
            }`}
            aria-label={`Step ${i + 1}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 flex items-center justify-center">
              <Visual />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                {current.title}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {current.text}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="px-4 py-2 text-sm rounded-lg border border-text-muted/10 text-text-secondary hover:border-accent-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          &larr; Back
        </button>
        <span className="text-xs text-text-muted">
          {step + 1} / {steps.length}
        </span>
        <button
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
          className="px-4 py-2 text-sm rounded-lg border border-accent-primary/30 text-accent-primary hover:bg-accent-primary/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
