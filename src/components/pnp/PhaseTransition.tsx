"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

// Approximate the 3-SAT phase transition curve using a logistic sigmoid
// The real curve drops sharply around ratio ~4.267
function satProbability(ratio: number): number {
  // Logistic function centered at 4.267, steepness tuned to match empirical data
  const k = 4.5; // steepness
  const midpoint = 4.267;
  return 1 / (1 + Math.exp(k * (ratio - midpoint)));
}

const SVG_WIDTH = 600;
const SVG_HEIGHT = 300;
const PADDING = { top: 20, right: 30, bottom: 50, left: 55 };
const PLOT_W = SVG_WIDTH - PADDING.left - PADDING.right;
const PLOT_H = SVG_HEIGHT - PADDING.top - PADDING.bottom;

const RATIO_MIN = 1.0;
const RATIO_MAX = 7.0;

function ratioToX(ratio: number): number {
  return PADDING.left + ((ratio - RATIO_MIN) / (RATIO_MAX - RATIO_MIN)) * PLOT_W;
}

function probToY(p: number): number {
  return PADDING.top + (1 - p) * PLOT_H;
}

export default function PhaseTransition() {
  const [hoverRatio, setHoverRatio] = useState<number | null>(null);

  // Generate curve points
  const curvePoints = useMemo(() => {
    const points: string[] = [];
    for (let i = 0; i <= 200; i++) {
      const ratio = RATIO_MIN + (i / 200) * (RATIO_MAX - RATIO_MIN);
      const p = satProbability(ratio);
      points.push(`${ratioToX(ratio)},${probToY(p)}`);
    }
    return points.join(" ");
  }, []);

  // Generate the fill area under the curve
  const areaPath = useMemo(() => {
    let d = `M ${ratioToX(RATIO_MIN)},${probToY(0)}`;
    for (let i = 0; i <= 200; i++) {
      const ratio = RATIO_MIN + (i / 200) * (RATIO_MAX - RATIO_MIN);
      const p = satProbability(ratio);
      d += ` L ${ratioToX(ratio)},${probToY(p)}`;
    }
    d += ` L ${ratioToX(RATIO_MAX)},${probToY(0)} Z`;
    return d;
  }, []);

  const thresholdX = ratioToX(4.267);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const svgX = (x / rect.width) * SVG_WIDTH;
    const ratio = RATIO_MIN + ((svgX - PADDING.left) / PLOT_W) * (RATIO_MAX - RATIO_MIN);
    if (ratio >= RATIO_MIN && ratio <= RATIO_MAX) {
      setHoverRatio(ratio);
    } else {
      setHoverRatio(null);
    }
  };

  return (
    <div>
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="w-full h-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverRatio(null)}
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1.0].map((p) => (
          <line
            key={p}
            x1={PADDING.left}
            y1={probToY(p)}
            x2={SVG_WIDTH - PADDING.right}
            y2={probToY(p)}
            stroke="var(--text-muted)"
            strokeOpacity={0.1}
            strokeDasharray="4,4"
          />
        ))}
        {[2, 3, 4, 5, 6].map((r) => (
          <line
            key={r}
            x1={ratioToX(r)}
            y1={PADDING.top}
            x2={ratioToX(r)}
            y2={SVG_HEIGHT - PADDING.bottom}
            stroke="var(--text-muted)"
            strokeOpacity={0.1}
            strokeDasharray="4,4"
          />
        ))}

        {/* Area under curve */}
        <motion.path
          d={areaPath}
          fill="var(--accent-primary)"
          fillOpacity={0.08}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Main curve */}
        <motion.polyline
          points={curvePoints}
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Critical threshold line */}
        <line
          x1={thresholdX}
          y1={PADDING.top}
          x2={thresholdX}
          y2={SVG_HEIGHT - PADDING.bottom}
          stroke="var(--accent-warm)"
          strokeWidth={1.5}
          strokeDasharray="6,4"
        />

        {/* Threshold annotation */}
        <text
          x={thresholdX + 6}
          y={PADDING.top + 16}
          fill="var(--accent-warm)"
          fontSize={11}
          fontWeight={600}
        >
          4.267
        </text>
        <text
          x={thresholdX + 6}
          y={PADDING.top + 30}
          fill="var(--accent-warm)"
          fontSize={9}
          opacity={0.8}
        >
          critical threshold
        </text>

        {/* Hardness region annotation */}
        <rect
          x={ratioToX(3.8)}
          y={probToY(0.85)}
          width={ratioToX(4.8) - ratioToX(3.8)}
          height={probToY(0.15) - probToY(0.85)}
          fill="var(--accent-warm)"
          fillOpacity={0.06}
          rx={4}
        />
        <text
          x={(ratioToX(3.8) + ratioToX(4.8)) / 2}
          y={probToY(0.15) + 14}
          fill="var(--accent-warm)"
          fontSize={9}
          textAnchor="middle"
          opacity={0.7}
        >
          hardest instances
        </text>

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1.0].map((p) => (
          <text
            key={p}
            x={PADDING.left - 8}
            y={probToY(p) + 4}
            fill="var(--text-muted)"
            fontSize={10}
            textAnchor="end"
          >
            {(p * 100).toFixed(0)}%
          </text>
        ))}

        {/* X-axis labels */}
        {[1, 2, 3, 4, 5, 6, 7].map((r) => (
          <text
            key={r}
            x={ratioToX(r)}
            y={SVG_HEIGHT - PADDING.bottom + 18}
            fill="var(--text-muted)"
            fontSize={10}
            textAnchor="middle"
          >
            {r}.0
          </text>
        ))}

        {/* Axis labels */}
        <text
          x={SVG_WIDTH / 2}
          y={SVG_HEIGHT - 6}
          fill="var(--text-secondary)"
          fontSize={11}
          textAnchor="middle"
        >
          clause / variable ratio
        </text>
        <text
          x={14}
          y={SVG_HEIGHT / 2}
          fill="var(--text-secondary)"
          fontSize={11}
          textAnchor="middle"
          transform={`rotate(-90, 14, ${SVG_HEIGHT / 2})`}
        >
          P(satisfiable)
        </text>

        {/* Axes */}
        <line
          x1={PADDING.left}
          y1={PADDING.top}
          x2={PADDING.left}
          y2={SVG_HEIGHT - PADDING.bottom}
          stroke="var(--text-muted)"
          strokeOpacity={0.3}
        />
        <line
          x1={PADDING.left}
          y1={SVG_HEIGHT - PADDING.bottom}
          x2={SVG_WIDTH - PADDING.right}
          y2={SVG_HEIGHT - PADDING.bottom}
          stroke="var(--text-muted)"
          strokeOpacity={0.3}
        />

        {/* Hover indicator */}
        {hoverRatio !== null && (
          <>
            <line
              x1={ratioToX(hoverRatio)}
              y1={PADDING.top}
              x2={ratioToX(hoverRatio)}
              y2={SVG_HEIGHT - PADDING.bottom}
              stroke="var(--text-secondary)"
              strokeWidth={1}
              strokeOpacity={0.3}
            />
            <circle
              cx={ratioToX(hoverRatio)}
              cy={probToY(satProbability(hoverRatio))}
              r={4}
              fill="var(--accent-primary)"
            />
            <text
              x={ratioToX(hoverRatio) + (hoverRatio > 5 ? -8 : 8)}
              y={probToY(satProbability(hoverRatio)) - 10}
              fill="var(--text-primary)"
              fontSize={11}
              fontWeight={600}
              textAnchor={hoverRatio > 5 ? "end" : "start"}
            >
              {(satProbability(hoverRatio) * 100).toFixed(0)}% at {hoverRatio.toFixed(2)}
            </text>
          </>
        )}

        {/* Region labels */}
        <text
          x={ratioToX(2.2)}
          y={probToY(0.95) + 4}
          fill="var(--accent-primary)"
          fontSize={10}
          textAnchor="middle"
          fontWeight={600}
        >
          SATISFIABLE
        </text>
        <text
          x={ratioToX(2.2)}
          y={probToY(0.95) + 16}
          fill="var(--accent-primary)"
          fontSize={9}
          textAnchor="middle"
          opacity={0.6}
        >
          (underconstrained)
        </text>
        <text
          x={ratioToX(5.8)}
          y={probToY(0.05) + 4}
          fill="var(--text-muted)"
          fontSize={10}
          textAnchor="middle"
          fontWeight={600}
        >
          UNSATISFIABLE
        </text>
        <text
          x={ratioToX(5.8)}
          y={probToY(0.05) + 16}
          fill="var(--text-muted)"
          fontSize={9}
          textAnchor="middle"
          opacity={0.6}
        >
          (overconstrained)
        </text>
      </svg>

      <p className="mt-4 text-sm text-text-muted">
        Random 3-SAT undergoes a sharp phase transition at a clause/variable ratio of ~4.267.
        Below this ratio, almost all instances are satisfiable. Above it, almost none are.
        The hardest instances &mdash; those that take exponential time to solve &mdash; cluster precisely
        at this boundary, where formulas have just enough constraints to be ambiguous.
      </p>
    </div>
  );
}
