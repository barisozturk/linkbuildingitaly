import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaBanner({
  title = "Ready to grow in the Italian market?",
  description = "Book a strategy call with our Rome-based team. We will review your backlink profile, competitor gaps and recommend a campaign tailored to your vertical.",
  ctaLabel = "Book a Strategy Call",
  ctaHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-slate-900">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/80 text-lg mb-8 leading-relaxed">{description}</p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
        >
          {ctaLabel}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
