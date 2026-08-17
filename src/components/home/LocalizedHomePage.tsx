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
  Target,
  Shield,
  Search,
  Link2,
  CheckCircle2,
} from "lucide-react";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
} from "@/lib/schema";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SERVICES } from "@/data/services";
import { SITE_NAME, SITE_URL } from "@/data/site";
import type { LocalizedHomeContent } from "@/data/localized-home";

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  Link: LinkIcon,
  Send,
  Megaphone,
  Target,
};

const serviceAccents = [
  "from-blue-500/10 to-sky-500/5 border-blue-200/60",
  "from-indigo-500/10 to-blue-500/5 border-indigo-200/60",
  "from-violet-500/10 to-purple-500/5 border-violet-200/60",
  "from-sky-500/10 to-cyan-500/5 border-sky-200/60",
];

const meaningStatIcons = [Target, Shield, TrendingUp, Search];

interface LocalizedHomePageProps {
  content: LocalizedHomeContent;
}

export function LocalizedHomePage({ content }: LocalizedHomePageProps) {
  const pageUrl = `${SITE_URL}${content.seo.path}`;
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
        {
          "@type": "WebPage",
          "@id": pageUrl,
          url: pageUrl,
          name: content.seo.title,
          description: content.seo.description,
          inLanguage: content.inLanguage,
          isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
        },
      ],
    },
    buildFaqSchema(content.faq.items),
  ];

  return (
    <div lang={content.htmlLang}>
      <SchemaMarkup schema={schema} />

      <section className="bg-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                {content.hero.h1}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{content.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={content.hero.ctaPrimaryHref}
                  className="bg-accent hover:bg-accent-dark text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-blue-500/25 text-center"
                >
                  {content.hero.ctaPrimary}
                </Link>
                <Link
                  href={content.hero.ctaSecondaryHref}
                  className="bg-white hover:bg-gray-50 text-primary border-2 border-gray-100 text-lg font-bold px-8 py-4 rounded-xl transition-all text-center"
                >
                  {content.hero.ctaSecondary}
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                {content.hero.badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-accent" /> {badge}
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 bg-accent-muted border border-blue-200 rounded-full px-4 py-1.5 text-primary text-xs font-bold uppercase tracking-wider mt-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {content.hero.pill}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -right-20 -top-20 w-[120%] h-[120%] bg-gradient-to-br from-blue-50 to-white rounded-full opacity-50 z-0" />
              <Image
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80"
                alt={content.hero.imageAlt}
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
                    <div className="text-xs text-gray-500 font-bold uppercase">
                      {content.hero.rankingLabel}
                    </div>
                    <div className="text-xl font-bold text-primary">{content.hero.rankingValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4">
                {content.meaning.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 leading-tight">
                {content.meaning.title}
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                {content.meaning.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:max-w-md lg:ml-auto">
              {content.meaning.stats.map((stat, index) => {
                const Icon = meaningStatIcons[index] ?? Target;
                return (
                  <div key={stat.label} className="bg-slate-50 rounded-xl border border-gray-100 p-5">
                    <Icon size={20} className="text-accent mb-3" />
                    <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-snug">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-14 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-blue-300 uppercase mb-4">
                {content.ranking.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                {content.ranking.title}
              </h2>
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {content.ranking.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-6">
                {content.ranking.processTitle}
              </h3>
              <div className="space-y-5">
                {content.ranking.steps.map((step, i) => (
                  <div key={step.label} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{step.label}</div>
                      <div className="text-slate-400 text-sm mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              {content.backlinks.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{content.backlinks.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.backlinks.types.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                  {type.stat}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
                  {content.backlinks.learnMore} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            {content.whyUs.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.whyUs.items.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={content.whyUs.storyHref}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              {content.whyUs.storyLink}
              <Link2 size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4">
              {content.services.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              {content.services.title}
            </h2>
            <p className="text-gray-600">{content.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = serviceIcons[service.iconName] ?? FileText;
              const localized = content.services.items[service.id];
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
                        {localized?.title ?? service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {localized?.shortDesc ?? service.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
                        {content.services.explore} <ArrowRight size={14} />
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
                {content.caseStudies.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                {content.caseStudies.title}
              </h2>
            </div>
            <Link
              href={content.caseStudies.viewAllHref}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              {content.caseStudies.viewAll} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 3).map((study) => {
              const localized = content.caseStudies.items[study.id];
              return (
                <Link
                  key={study.id}
                  href={study.slug}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.featuredImage}
                      alt={localized?.title ?? study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-accent uppercase mb-2">
                      {localized?.industry ?? study.industry}
                    </div>
                    <h3 className="font-heading font-bold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {localized?.title ?? study.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {localized?.excerpt ?? study.excerpt}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            {content.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.testimonials.items.map((t) => (
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
            {content.faq.title}
          </h2>
          <FaqAccordion items={content.faq.items} />
        </div>
      </section>

      <CtaBanner
        title={content.cta.title}
        description={content.cta.description}
        ctaLabel={content.cta.button}
        ctaHref={content.cta.href}
      />
    </div>
  );
}
