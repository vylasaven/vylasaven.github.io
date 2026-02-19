"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Literal = number; // positive = true, negative = negated
type Clause = Literal[];
type Assignment = Record<number, boolean | null>; // variable -> true/false/unset

interface Preset {
  name: string;
  description: string;
  numVars: number;
  clauses: Clause[];
}

const presets: Preset[] = [
  {
    name: "Easy (SAT)",
    description: "Unit propagation solves it immediately",
    numVars: 3,
    clauses: [
      [1, 2, 3],
      [1, -2, 3],
      [-1, 2, 3],
    ],
  },
  {
    name: "Hard (SAT)",
    description: "Near the phase transition — requires search",
    numVars: 4,
    clauses: [
      [1, 2, -3],
      [-1, 3, 4],
      [2, -3, -4],
      [-1, -2, 4],
      [1, -3, 4],
      [-2, 3, -4],
      [1, 2, 4],
    ],
  },
  {
    name: "Unsatisfiable",
    description: "No assignment can satisfy all clauses",
    numVars: 3,
    clauses: [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ],
  },
];

function evaluateClause(clause: Clause, assignment: Assignment): boolean | null {
  let hasUnset = false;
  for (const lit of clause) {
    const variable = Math.abs(lit);
    const value = assignment[variable];
    if (value === null || value === undefined) {
      hasUnset = true;
      continue;
    }
    // lit > 0 means "variable is true", lit < 0 means "variable is false"
    const literalTrue = lit > 0 ? value : !value;
    if (literalTrue) return true; // clause satisfied
  }
  return hasUnset ? null : false; // null = undetermined, false = violated
}

function literalToString(lit: number): string {
  const v = Math.abs(lit);
  return lit > 0 ? `x${v}` : `\u00ACx${v}`;
}

export default function SATVisualizer() {
  const [presetIndex, setPresetIndex] = useState(0);
  const preset = presets[presetIndex];
  const [assignment, setAssignment] = useState<Assignment>(() => {
    const a: Assignment = {};
    for (let i = 1; i <= preset.numVars; i++) a[i] = null;
    return a;
  });

  const selectPreset = useCallback((idx: number) => {
    setPresetIndex(idx);
    const p = presets[idx];
    const a: Assignment = {};
    for (let i = 1; i <= p.numVars; i++) a[i] = null;
    setAssignment(a);
  }, []);

  const toggleVariable = useCallback(
    (v: number) => {
      setAssignment((prev) => {
        const current = prev[v];
        // cycle: null -> true -> false -> null
        const next = current === null ? true : current === true ? false : null;
        return { ...prev, [v]: next };
      });
    },
    []
  );

  const clauseResults = preset.clauses.map((c) => evaluateClause(c, assignment));
  const allSatisfied = clauseResults.every((r) => r === true);
  const anyViolated = clauseResults.some((r) => r === false);
  const assignedCount = Object.values(assignment).filter((v) => v !== null).length;

  return (
    <div>
      {/* Preset selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {presets.map((p, i) => (
          <button
            key={p.name}
            onClick={() => selectPreset(i)}
            className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
              i === presetIndex
                ? "border-accent-primary bg-accent-primary/10 text-accent-primary"
                : "border-text-muted/10 text-text-secondary hover:border-text-muted/30"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
      <p className="text-sm text-text-muted mb-6">{preset.description}</p>

      {/* Variable toggles */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-text-secondary mb-3">
          Click variables to assign truth values:
        </h4>
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: preset.numVars }, (_, i) => i + 1).map((v) => {
            const val = assignment[v];
            return (
              <button
                key={v}
                onClick={() => toggleVariable(v)}
                className={`px-4 py-2 rounded-lg border text-sm font-mono font-medium transition-all ${
                  val === true
                    ? "border-green-500/50 bg-green-500/10 text-green-400"
                    : val === false
                    ? "border-red-500/50 bg-red-500/10 text-red-400"
                    : "border-text-muted/20 bg-bg-secondary/30 text-text-muted"
                }`}
              >
                x{v} ={" "}
                {val === null ? "?" : val ? "T" : "F"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clauses */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-text-secondary mb-3">Clauses:</h4>
        <AnimatePresence mode="popLayout">
          {preset.clauses.map((clause, i) => {
            const result = clauseResults[i];
            return (
              <motion.div
                key={`${presetIndex}-${i}`}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  result === true
                    ? "border-green-500/30 bg-green-500/5"
                    : result === false
                    ? "border-red-500/30 bg-red-500/5"
                    : "border-text-muted/10 bg-bg-secondary/30"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    result === true
                      ? "bg-green-500/20 text-green-400"
                      : result === false
                      ? "bg-red-500/20 text-red-400"
                      : "bg-text-muted/10 text-text-muted"
                  }`}
                >
                  {result === true ? "\u2713" : result === false ? "\u2717" : "?"}
                </span>
                <span className="font-mono text-sm text-text-secondary">
                  ({clause.map((lit, j) => (
                    <span key={j}>
                      {j > 0 && <span className="text-text-muted"> \u2228 </span>}
                      <span
                        className={
                          assignment[Math.abs(lit)] !== null
                            ? (lit > 0 ? assignment[Math.abs(lit)] : !assignment[Math.abs(lit)])
                              ? "text-green-400"
                              : "text-red-400"
                            : "text-text-secondary"
                        }
                      >
                        {literalToString(lit)}
                      </span>
                    </span>
                  ))})
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Status */}
      <div className="mt-6 p-4 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
        {assignedCount < preset.numVars ? (
          <p className="text-sm text-text-muted">
            {preset.numVars - assignedCount} variable{preset.numVars - assignedCount !== 1 && "s"} unassigned.
            {clauseResults.filter((r) => r === true).length > 0 && (
              <span className="text-green-400">
                {" "}{clauseResults.filter((r) => r === true).length}/{preset.clauses.length} clauses satisfied so far.
              </span>
            )}
          </p>
        ) : allSatisfied ? (
          <p className="text-sm text-green-400 font-medium">
            All clauses satisfied! This assignment is a model of the formula.
          </p>
        ) : anyViolated ? (
          <p className="text-sm text-red-400 font-medium">
            {clauseResults.filter((r) => r === false).length} clause{clauseResults.filter((r) => r === false).length !== 1 && "s"} violated.
            {preset.name === "Unsatisfiable"
              ? " No assignment can satisfy this formula — it is unsatisfiable."
              : " Try a different assignment."}
          </p>
        ) : null}
      </div>
    </div>
  );
}
