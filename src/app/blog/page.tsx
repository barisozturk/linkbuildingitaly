import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { buildOrganizationSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Italian SEO & Link Building Blog",
  description:
    "Expert articles on Italian link building, digital PR, outreach, guest posting, authority backlinks and SEO growth strategies for the Italian market.",
  path: "/blog",
});

const TOPIC_LABELS: Record<string, string> = {
  "italian-link-building-guide": "Link Building",
  "digital-pr-italy-strategies": "Digital PR",
  "seo-outreach-best-practices-italy": "Outreach",
  "guest-posting-italy-guide": "Guest Posting",
  "authority-backlinks-italian-market": "Authority Links",
  "italian-market-seo-fundamentals": "Market SEO",
  "hreflang-italy-multilingual-seo": "Technical SEO",
  "ymyl-link-building-italy": "YMYL",
  "ecommerce-link-building-italy": "Ecommerce",
  "saas-link-building-italy": "SaaS",
  "content-led-link-building": "Content Strategy",
  "measuring-link-building-roi": "Analytics",
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80";

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const [featured, ...rest] = sorted;

  return (
    <>
      <SchemaMarkup schema={buildOrganizationSchema()} />

      <section className="pt-28 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog" }]} variant="light" />
          <div className="mt-8 max-w-2xl">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
              Insights from Rome
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Italian SEO & Link Building Blog
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Long-form guides on outreach, digital PR, guest posting and authority building. Written
              by the team running campaigns in Italy every week.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="py-12 bg-surface border-b border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link href={featured.slug} className="group grid lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
                <Image
                  src={featured.featuredImage ?? DEFAULT_IMAGE}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex self-start items-center gap-1.5 bg-accent-muted text-accent text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  <BookOpen size={12} />
                  Latest · {TOPIC_LABELS[featured.id] ?? "SEO"}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted mb-6">
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> 8 min read
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-accent font-semibold">
                  Read the full guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-2xl font-bold text-primary">All Articles</h2>
            <p className="text-muted text-sm hidden sm:block">{rest.length} guides published</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <Link href={post.slug} className="block overflow-hidden rounded-xl mb-4 aspect-[16/10] relative border border-border">
                  <Image
                    src={post.featuredImage ?? DEFAULT_IMAGE}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-primary text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {TOPIC_LABELS[post.id] ?? "SEO"}
                  </span>
                </Link>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>8 min read</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-muted mb-3">By {post.author}</p>
                  <Link
                    href={post.slug}
                    className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Read article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
