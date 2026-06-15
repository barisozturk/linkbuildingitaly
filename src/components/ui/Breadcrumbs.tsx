"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const textClass = variant === "light" ? "text-white/70" : "text-muted";
  const activeClass = variant === "light" ? "text-white" : "text-primary";
  const linkClass =
    variant === "light"
      ? "text-white/80 hover:text-white"
      : "text-muted hover:text-accent";

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.name} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight
                size={14}
                className={variant === "light" ? "text-white/50" : "text-gray-300"}
              />
            )}
            {item.path && !isLast ? (
              <Link href={item.path} className={`${linkClass} transition-colors`}>
                {item.name}
              </Link>
            ) : (
              <span className={isLast ? `${activeClass} font-medium` : textClass}>
                {item.name}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
