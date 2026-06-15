import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CampaignTimeline } from "@/components/case-studies/CampaignTimeline";
import { GrowthChart } from "@/components/charts/GrowthChart";
import { MetricsTable } from "@/components/charts/MetricsTable";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { buildArticleSchema } from "@/lib/schema";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/data/site";
import { slugFromPath } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: slugFromPath(study.slug),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => slugFromPath(s.slug) === slug);
  if (!study) return {};
  return buildMetadata({
    title: `${study.title} | Case Study`,
    description: study.excerpt,
    path: study.slug,
    type: "article",
    image: study.featuredImage,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => slugFromPath(s.slug) === slug);

  if (!study) notFound();

  const schema = buildArticleSchema({
    title: study.title,
    description: study.excerpt,
    url: `${SITE_URL}${study.slug}`,
    datePublished: "2025-01-15",
    author: "Link Building Italy",
    image: study.featuredImage,
  });

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative pt-28 pb-20 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-900 opacity-95" />
        <div className="relative container mx-auto px-4 max-w-4xl text-white mb-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Case Studies", path: "/case-studies" },
              { name: study.client },
            ]}
            variant="light"
          />
          <div className="flex flex-wrap gap-2 mb-4 mt-6">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
              {study.industry}
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">{study.duration}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-white/80">
            {study.client} | {study.location}
          </p>
        </div>
        <div className="relative container mx-auto px-4 max-w-5xl">
          <GrowthChart data={study.chartData} clientName={study.client} />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-4 mb-16 -mt-12 relative z-10">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">{m.value}</div>
                <div className="text-sm font-semibold text-gray-900">{m.label}</div>
                <div className="text-xs text-gray-500 mt-1">{m.detail}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">The Challenge</h2>
                {study.challenge.map((p) => (
                  <p key={p.slice(0, 40)} className="text-gray-700 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Campaign Timeline
                </h2>
                <CampaignTimeline items={study.timeline} />
              </div>

              {study.approach.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  <ContentRenderer blocks={section.content} />
                </div>
              ))}

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Before vs After Metrics
                </h2>
                <MetricsTable rows={study.beforeMetrics} />
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                  Results Analysis
                </h2>
                <ul className="space-y-3">
                  {study.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {study.testimonial && (
                <blockquote className="bg-primary text-white p-8 rounded-2xl">
                  <p className="text-lg italic mb-4">&ldquo;{study.testimonial.quote}&rdquo;</p>
                  <footer className="text-white/80 text-sm">
                    <strong className="text-white">{study.testimonial.name}</strong>,{" "}
                    {study.testimonial.role}
                  </footer>
                </blockquote>
              )}
            </div>

            <aside className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-28">
                <h3 className="font-bold text-primary mb-4">Related Services</h3>
                <ul className="space-y-2 mb-6">
                  {study.relatedServiceIds.map((id) => {
                    const svc = SERVICES.find((s) => s.id === id);
                    return svc ? (
                      <li key={id}>
                        <Link href={svc.slug} className="text-accent hover:underline text-sm">
                          {svc.title}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-accent text-white text-center font-bold py-3 rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
