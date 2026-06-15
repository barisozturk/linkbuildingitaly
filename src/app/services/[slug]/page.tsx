import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqSchema } from "@/lib/schema";
import { SERVICES } from "@/data/services";
import { SITE_NAME, SITE_URL } from "@/data/site";
import { slugFromPath } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: slugFromPath(service.slug),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => slugFromPath(s.slug) === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: service.slug,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => slugFromPath(s.slug) === slug);

  if (!service) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.title,
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: "Italy",
      url: `${SITE_URL}${service.slug}`,
      description: service.shortDesc,
    },
    ...(service.content.faq.length > 0 ? [buildFaqSchema(service.content.faq)] : []),
  ];

  const related = SERVICES.filter(
    (s) => service.content.relatedServiceIds?.includes(s.id) && s.id !== service.id,
  );

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="pt-28 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title },
            ]}
            variant="light"
          />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-6 mb-4">{service.title}</h1>
          <p className="text-xl text-white/80 leading-relaxed">{service.content.heroSubheading}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose-content mb-12">
            {service.content.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          {service.content.extendedContent.map((section) => (
            <div key={section.title} className="mb-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
                {section.title}
              </h2>
              <ContentRenderer blocks={section.content} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.content.benefits.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-accent shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary">{b.title}</div>
                      <div className="text-gray-600 text-sm">{b.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Deliverables</h2>
              <ul className="space-y-3 bg-white rounded-xl p-6 border border-gray-100">
                {service.content.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-xl font-bold text-primary mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-4">
              {related.map((s) => (
                <Link
                  key={s.id}
                  href={s.slug}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                >
                  {s.title} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-primary text-center mb-8">FAQ</h2>
          <FaqAccordion items={service.content.faq} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
