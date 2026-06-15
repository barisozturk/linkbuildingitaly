import Link from "next/link";
import { CheckCircle2, Lightbulb } from "lucide-react";
import { ContentBlock } from "@/types";

function parseInline(text: string) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      return (
        <Link key={i} href={linkMatch[2]} className="text-accent hover:underline font-semibold">
          {linkMatch[1]}
        </Link>
      );
    }
    const formatParts = part.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return (
      <span key={i}>
        {formatParts.map((subPart, j) => {
          if (subPart.startsWith("**") && subPart.endsWith("**")) {
            return (
              <strong key={j} className="font-bold text-gray-900">
                {subPart.slice(2, -2)}
              </strong>
            );
          }
          if (subPart.startsWith("*") && subPart.endsWith("*")) {
            return (
              <em key={j} className="italic">
                {subPart.slice(1, -1)}
              </em>
            );
          }
          return subPart;
        })}
      </span>
    );
  });
}

interface ContentRendererProps {
  blocks: ContentBlock[];
  className?: string;
}

export function ContentRenderer({ blocks, className = "" }: ContentRendererProps) {
  return (
    <div className={`prose-content ${className}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={idx} className="text-gray-600 leading-relaxed text-base md:text-lg">
                {parseInline(block.text)}
              </p>
            );
          case "list":
            return (
              <ul key={idx} className="my-6 space-y-3 bg-slate-50 p-6 rounded-xl border border-gray-100">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                    <span>{parseInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={idx} className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm text-left border-collapse bg-white">
                  <thead className="bg-slate-50 text-gray-700 text-xs uppercase font-bold">
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i} className="px-5 py-4 border-b border-gray-200">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-gray-100 last:border-0">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-5 py-4 text-gray-600">
                            {parseInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "pro-tip":
            return (
              <div
                key={idx}
                className="my-8 bg-accent-muted border-l-4 border-accent p-6 rounded-r-xl"
              >
                <div className="flex items-center gap-2 font-bold text-primary text-sm uppercase mb-2">
                  <Lightbulb size={16} className="text-accent" />
                  {block.title}
                </div>
                <p className="text-gray-700 leading-relaxed">{parseInline(block.text)}</p>
              </div>
            );
          case "expert-note":
            return (
              <div
                key={idx}
                className="my-8 bg-primary text-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Expert Note
                </div>
                <div className="font-heading text-lg font-bold mb-2">{block.title}</div>
                <p className="text-white/90 leading-relaxed mb-3">{parseInline(block.text)}</p>
                {block.author && (
                  <p className="text-sm text-white/70">{block.author}</p>
                )}
              </div>
            );
          case "stats":
            return (
              <div key={idx} className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {block.items.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1">{stat.label}</div>
                    {stat.detail && (
                      <div className="text-xs text-gray-500 mt-1">{stat.detail}</div>
                    )}
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export { parseInline };
