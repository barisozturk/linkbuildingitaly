"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MetricRow {
  label: string;
  before: string;
  after: string;
}

interface MetricsTableProps {
  rows: MetricRow[];
  title?: string;
}

function parseNumeric(value: string): number | null {
  const match = value.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : null;
}

export function MetricsTable({ rows, title = "Before vs After Metrics" }: MetricsTableProps) {
  const [sortKey, setSortKey] = useState<"label" | "change">("label");
  const [sortAsc, setSortAsc] = useState(true);

  const enriched = rows.map((row) => {
    const beforeNum = parseNumeric(row.before);
    const afterNum = parseNumeric(row.after);
    let change: number | null = null;
    if (beforeNum !== null && afterNum !== null && beforeNum > 0) {
      change = ((afterNum - beforeNum) / beforeNum) * 100;
    }
    return { ...row, change };
  });

  const sorted = [...enriched].sort((a, b) => {
    if (sortKey === "label") {
      return sortAsc ? a.label.localeCompare(b.label) : b.label.localeCompare(a.label);
    }
    const aVal = a.change ?? 0;
    const bVal = b.change ?? 0;
    return sortAsc ? aVal - bVal : bVal - aVal;
  });

  const toggleSort = (key: "label" | "change") => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 bg-slate-50">
        <h3 className="font-heading font-bold text-primary">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">Click column headers to sort</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-5 py-3">
                <button
                  type="button"
                  onClick={() => toggleSort("label")}
                  className="font-bold text-gray-700 hover:text-accent uppercase text-xs tracking-wide"
                >
                  Metric {sortKey === "label" && (sortAsc ? "↑" : "↓")}
                </button>
              </th>
              <th className="text-left px-5 py-3 font-bold text-gray-700 uppercase text-xs tracking-wide">
                Before
              </th>
              <th className="text-left px-5 py-3 font-bold text-gray-700 uppercase text-xs tracking-wide">
                After
              </th>
              <th className="text-left px-5 py-3">
                <button
                  type="button"
                  onClick={() => toggleSort("change")}
                  className="font-bold text-gray-700 hover:text-accent uppercase text-xs tracking-wide"
                >
                  Change {sortKey === "change" && (sortAsc ? "↑" : "↓")}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr key={row.label} className="border-b border-gray-50 last:border-0 hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-primary">{row.label}</td>
                <td className="px-5 py-4 text-gray-600">{row.before}</td>
                <td className="px-5 py-4 font-semibold text-gray-900">{row.after}</td>
                <td className="px-5 py-4">
                  {row.change !== null ? (
                    <span
                      className={`inline-flex items-center gap-1 font-semibold ${
                        row.change >= 0 ? "text-accent" : "text-red-500"
                      }`}
                    >
                      {row.change >= 0 ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}
                      {row.change >= 0 ? "+" : ""}
                      {row.change.toFixed(0)}%
                    </span>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
