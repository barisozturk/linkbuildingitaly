import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { buildOrganizationSchema } from "@/lib/schema";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata = buildMetadata({
  title: "Link Building Case Studies in Italy",
  description:
    "Real campaign results from Italian link building projects across SaaS, fintech, ecommerce, travel, healthcare and manufacturing.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <SchemaMarkup schema={buildOrganizationSchema()} />

      <section className="pt-28 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[{ name: "Home", path: "/" }, { name: "Case Studies" }]}
            variant="light"
          />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-6 mb-4">
            Italian Link Building Case Studies
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Before and after metrics, campaign timelines and strategy breakdowns from brands that
            grew organic visibility in the Italian market.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.id}
                href={study.slug}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all bg-white"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={study.featuredImage}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="bg-accent/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {study.duration}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {study.client} · {study.location}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{study.excerpt}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="bg-slate-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-accent">{m.value}</div>
                        <div className="text-xs text-gray-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
                    Read case study <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
