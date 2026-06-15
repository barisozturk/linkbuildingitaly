import Link from "next/link";
import { ArrowRight, FileText, Send, Megaphone, Link as LinkIcon, Target } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { buildOrganizationSchema } from "@/lib/schema";
import { SERVICES } from "@/data/services";

export const metadata = buildMetadata({
  title: "Italian Link Building Services",
  description:
    "Editorial guest posting, digital PR, SEO outreach and authority link building for brands targeting the Italian search market.",
  path: "/services",
});

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  Send,
  Megaphone,
  Link: LinkIcon,
  Target,
};

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup schema={buildOrganizationSchema()} />

      <section className="pt-28 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[{ name: "Home", path: "/" }, { name: "Services" }]}
            variant="light"
          />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-6 mb-4">
            Italian Link Building Services
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Editorial placements, digital PR and outreach campaigns built for brands that need
            sustainable authority in Italian search.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose-content max-w-3xl mb-16">
            <p>
              Growing in Italy requires more than translated content and generic outreach. Search
              engines reward backlinks from publishers that Italian readers already trust, and those
              publishers expect pitches that respect their editorial standards.
            </p>
            <p>
              Our services cover the full link acquisition stack: guest posting on vetted niche
              sites, digital PR for media coverage, editorial link building for authority signals,
              and dedicated SEO outreach to scale publisher relationships over time. Each service
              can run standalone or as part of an integrated campaign aligned with your keyword
              targets and compliance requirements.
            </p>
          </div>

          <div className="grid gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.iconName] ?? FileText;
              return (
                <article
                  key={service.id}
                  className="rounded-2xl border border-gray-100 bg-slate-50 p-8 md:p-10 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm shrink-0">
                      <Icon size={32} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl font-bold text-primary mb-3">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.shortDesc}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{service.content.heroSubheading}</p>
                      <Link
                        href={service.slug}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                      >
                        Read full service details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
