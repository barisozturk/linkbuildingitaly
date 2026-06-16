import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Star,
  FileText,
  Link as LinkIcon,
  Send,
  Megaphone,
} from "lucide-react";
import { HomeSeoSections } from "@/components/home/HomeSeoSections";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { buildMetadata } from "@/lib/metadata";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
} from "@/lib/schema";
import { CASE_STUDIES } from "@/data/caseStudies";
import { HOMEPAGE_FAQ, TESTIMONIALS } from "@/data/home";
import { SERVICES } from "@/data/services";
import { SITE_NAME, SITE_URL } from "@/data/site";

export const metadata = buildMetadata({
  title: "Link Building Italy",
  absoluteTitle: true,
  description:
    "Specialist Link Building Italy services for international brands. Build Italian backlinks, authority links and editorial placements with white-hat outreach from Rome.",
  path: "/",
});

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  Link: LinkIcon,
  Send,
  Megaphone,
};

const serviceAccents = [
  "from-blue-500/10 to-sky-500/5 border-blue-200/60",
  "from-indigo-500/10 to-blue-500/5 border-indigo-200/60",
  "from-violet-500/10 to-purple-500/5 border-violet-200/60",
  "from-sky-500/10 to-cyan-500/5 border-sky-200/60",
];

export default function HomePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@graph": [
        buildOrganizationSchema(),
        buildLocalBusinessSchema(),
        {
          "@type": "WebSite",
          url: SITE_URL,
          name: SITE_NAME,
        },
      ],
    },
    buildFaqSchema(HOMEPAGE_FAQ),
  ];

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="bg-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Link Building in Italy
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build authoritative Italian backlinks that drive rankings across Italy. Our Italian
                link building services help SEO managers, marketing teams and international brands
                earn editorial placements from trusted Italian publishers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-dark text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-blue-500/25 text-center"
                >
                  Book a Call
                </Link>
                <Link
                  href="/services"
                  className="bg-white hover:bg-gray-50 text-primary border-2 border-gray-100 text-lg font-bold px-8 py-4 rounded-xl transition-all text-center"
                >
                  View Services
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-accent" /> White-Hat Only
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-accent" /> 650+ Italian Publishers
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-accent" /> Native Italian Outreach
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-accent-muted border border-blue-200 rounded-full px-4 py-1.5 text-primary text-xs font-bold uppercase tracking-wider mt-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Specialist Italian Link Building Agency · Rome
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -right-20 -top-20 w-[120%] h-[120%] bg-gradient-to-br from-blue-50 to-white rounded-full opacity-50 z-0" />
              <Image
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80"
                alt="Link Building Italy team at our Rome office on Via Roma"
                width={1600}
                height={1000}
                priority
                className="relative z-10 rounded-2xl shadow-2xl border-8 border-white w-full object-cover aspect-[16/10]"
              />
              <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-accent-muted p-2 rounded-full">
                    <TrendingUp size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Avg. Ranking Lift</div>
                    <div className="text-xl font-bold text-primary">+38%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeSeoSections />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Italian Link Building Services
            </h2>
            <p className="text-gray-600">
              Editorial placements, digital PR and outreach campaigns designed for the Italian
              search market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = serviceIcons[service.iconName] ?? FileText;
              return (
                <Link
                  key={service.id}
                  href={service.slug}
                  className={`group rounded-2xl p-8 bg-gradient-to-br border ${serviceAccents[i % serviceAccents.length]} hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {service.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
                        Explore service <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4">
                Case Studies
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Results in the Italian Market
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              View all case studies <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 3).map((study) => (
              <Link
                key={study.id}
                href={study.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.featuredImage}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-accent uppercase mb-2">{study.industry}</div>
                  <h3 className="font-heading font-bold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{study.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="bg-slate-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-sm">
                  <strong className="text-primary">{t.name}</strong>
                  <span className="text-gray-500"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={HOMEPAGE_FAQ} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
