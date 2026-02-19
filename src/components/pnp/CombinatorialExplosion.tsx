"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function formatNumber(n: number): string {
  if (n >= 1e15) return n.toExponential(1);
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toFixed(0);
}

const comparisons: { n: number; label: string }[] = [
  { n: 10, label: "10 variables" },
  { n: 20, label: "20 variables" },
  { n: 30, label: "30 variables" },
  { n: 40, label: "40 variables" },
  { n: 50, label: "50 variables" },
];

export default function CombinatorialExplosion() {
  const [n, setN] = useState(10);

  const poly2 = n * n;
  const poly3 = n * n * n;
  const exp = Math.pow(2, n);

  // For bar widths, use log scale so everything is visible
  const maxLog = Math.log10(exp || 1);
  const barWidth = (val: number) => {
    if (val <= 0) return 0;
    return Math.max(2, (Math.log10(val) / Math.max(maxLog, 1)) * 100);
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Number of variables: <span className="text-accent-primary font-bold">{n}</span>
        </label>
        <input
          type="range"
          min={1}
          max={30}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="w-full accent-[var(--accent-primary)]"
        />
        <div className="flex justify-between text-xs text-text-muted mt-1">
          <span>1</span>
          <span>15</span>
          <span>30</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* n^2 */}
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-text-secondary">
              n&sup2; <span className="text-text-muted">(polynomial)</span>
            </span>
            <span className="font-mono text-accent-primary">{formatNumber(poly2)}</span>
          </div>
          <div className="h-6 bg-bg-secondary/50 rounded-full overflow-hidden border border-text-muted/10">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--accent-primary)" }}
              animate={{ width: `${barWidth(poly2)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
        </div>

        {/* n^3 */}
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-text-secondary">
              n&sup3; <span className="text-text-muted">(polynomial)</span>
            </span>
            <span className="font-mono text-accent-secondary">{formatNumber(poly3)}</span>
          </div>
          <div className="h-6 bg-bg-secondary/50 rounded-full overflow-hidden border border-text-muted/10">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--accent-secondary)" }}
              animate={{ width: `${barWidth(poly3)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
        </div>

        {/* 2^n */}
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-text-secondary">
              2<sup>n</sup> <span className="text-text-muted">(exponential)</span>
            </span>
            <span className="font-mono text-accent-warm font-bold">{formatNumber(exp)}</span>
          </div>
          <div className="h-6 bg-bg-secondary/50 rounded-full overflow-hidden border border-text-muted/10">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--accent-warm)" }}
              animate={{ width: `${barWidth(exp)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
        </div>
      </div>

      {/* Scale comparison table */}
      <div className="mt-8 overflow-x-auto rounded-lg border border-text-muted/10">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-text-muted/10 bg-bg-secondary/50">
              <th className="py-2 px-3 font-semibold text-text-secondary">n</th>
              <th className="py-2 px-3 font-semibold text-text-secondary">n&sup2;</th>
              <th className="py-2 px-3 font-semibold text-text-secondary">n&sup3;</th>
              <th className="py-2 px-3 font-semibold text-accent-warm">2<sup>n</sup></th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row) => (
              <tr key={row.n} className="border-b border-text-muted/5">
                <td className="py-2 px-3 text-text-primary font-medium">{row.n}</td>
                <td className="py-2 px-3 font-mono text-text-secondary">
                  {formatNumber(row.n * row.n)}
                </td>
                <td className="py-2 px-3 font-mono text-text-secondary">
                  {formatNumber(row.n * row.n * row.n)}
                </td>
                <td className="py-2 px-3 font-mono text-accent-warm font-bold">
                  {formatNumber(Math.pow(2, row.n))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-text-muted">
        At 50 variables, 2<sup>50</sup> &asymp; 1.13 quadrillion &mdash; more than every grain of sand on Earth.
        This is why brute-force search fails. The question is whether structure can tame the explosion.
      </p>
    </div>
  );
}
