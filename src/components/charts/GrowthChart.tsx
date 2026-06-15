"use client";

import { useMemo, useState } from "react";
import { ChartDataPoint, ChartMetric } from "@/types";

interface GrowthChartProps {
  data: ChartDataPoint[];
  clientName: string;
  compact?: boolean;
  className?: string;
}

const METRICS: {
  key: ChartMetric;
  label: string;
  color: string;
  format: (v: number) => string;
}[] = [
  {
    key: "referringDomains",
    label: "Referring domains",
    color: "#0066FF",
    format: (v) => v.toString(),
  },
  {
    key: "organicTraffic",
    label: "Organic traffic",
    color: "#F80",
    format: (v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v.toString()),
  },
  {
    key: "keywords",
    label: "Keywords top 10",
    color: "#7B61FF",
    format: (v) => v.toString(),
  },
];

export function GrowthChart({
  data,
  clientName,
  compact = false,
  className = "",
}: GrowthChartProps) {
  const [activeMetric, setActiveMetric] = useState<ChartMetric>("organicTraffic");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const metric = METRICS.find((m) => m.key === activeMetric)!;
  const values = data.map((d) => d[activeMetric]);
  const maxVal = Math.max(...values) * 1.15;
  const minVal = Math.min(...values) * 0.85;

  const width = compact ? 640 : 720;
  const height = compact ? 180 : 280;
  const pad = compact
    ? { top: 12, right: 16, bottom: 28, left: 44 }
    : { top: 20, right: 24, bottom: 40, left: 56 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;

  const points = useMemo(() => {
    return values.map((v, i) => {
      const x = pad.left + (i / (values.length - 1)) * chartW;
      const y = pad.top + chartH - ((v - minVal) / (maxVal - minVal)) * chartH;
      return { x, y, v, month: data[i].month };
    });
  }, [values, data, maxVal, minVal, chartW, chartH, pad.left, pad.top]);

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${pad.top + chartH} L ${points[0].x} ${pad.top + chartH} Z`;

  const yTicks = 5;
  const yLabels = Array.from({ length: yTicks }, (_, i) => {
    const val = minVal + ((maxVal - minVal) / (yTicks - 1)) * i;
    const y = pad.top + chartH - (i / (yTicks - 1)) * chartH;
    return { val, y };
  });

  const hovered = hoverIndex !== null ? points[hoverIndex] : null;

  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden ${className}`}
    >
      <div
        className={`flex items-center justify-between border-b border-gray-100 bg-[#F8F9FA] ${compact ? "px-3 py-2" : "px-4 py-3"}`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={`flex items-center justify-center rounded bg-[#005CE6] font-bold text-white shrink-0 ${compact ? "h-6 w-6 text-[9px]" : "h-7 w-7 text-[10px]"}`}
          >
            AH
          </div>
          <div className="min-w-0">
            <p
              className={`font-semibold text-gray-900 truncate ${compact ? "text-[10px]" : "text-xs"}`}
            >
              Performance Overview
            </p>
            <p
              className={`text-gray-500 truncate ${compact ? "text-[9px]" : "text-[10px]"}`}
            >
              {clientName} · Italian search
            </p>
          </div>
        </div>
        {!compact && (
          <div className="flex gap-1 rounded-lg bg-white p-1 border border-gray-200">
            {METRICS.map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setActiveMetric(m.key)}
                className={`px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all ${
                  activeMetric === m.key
                    ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full mr-1.5"
                  style={{ backgroundColor: m.color }}
                />
                {m.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={`relative ${compact ? "p-2" : "p-4"}`}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          role="img"
          aria-label={`Growth chart for ${clientName}`}
        >
          {yLabels.map(({ val, y }, i) => (
            <g key={i}>
              <line
                x1={pad.left}
                y1={y}
                x2={width - pad.right}
                y2={y}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <text
                x={pad.left - 8}
                y={y + 4}
                textAnchor="end"
                fontSize={compact ? 9 : 10}
                fill="#9CA3AF"
              >
                {metric.format(Math.round(val))}
              </text>
            </g>
          ))}

          {points.map((p, i) => (
            <text
              key={p.month}
              x={p.x}
              y={height - 8}
              textAnchor="middle"
              fontSize={compact ? 9 : 10}
              fill="#9CA3AF"
            >
              {p.month}
            </text>
          ))}

          <path d={areaPath} fill={metric.color} fillOpacity="0.08" />
          <path
            d={linePath}
            fill="none"
            stroke={metric.color}
            strokeWidth={compact ? 2 : 2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={hoverIndex === i ? 6 : 4}
              fill="white"
              stroke={metric.color}
              strokeWidth={2}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="cursor-pointer"
            />
          ))}

          {hovered && (
            <g>
              <rect
                x={hovered.x - 50}
                y={hovered.y - 38}
                width={100}
                height={28}
                rx={6}
                fill="#1B2A4A"
              />
              <text
                x={hovered.x}
                y={hovered.y - 20}
                textAnchor="middle"
                fontSize={11}
                fill="white"
                fontWeight="600"
              >
                {metric.format(hovered.v)}
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
