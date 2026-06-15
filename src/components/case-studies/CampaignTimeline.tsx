"use client";

import { TimelineItem } from "@/types";
import { CheckCircle2 } from "lucide-react";

interface CampaignTimelineProps {
  items: TimelineItem[];
}

export function CampaignTimeline({ items }: CampaignTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-blue-200" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.phase} className="relative pl-12">
            <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-xs font-bold shadow-md">
              {index + 1}
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-heading font-bold text-primary text-lg">{item.phase}</h3>
                <span className="text-xs font-semibold bg-accent-muted text-accent px-2 py-1 rounded-full">
                  {item.period}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed flex items-start gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-1" />
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
