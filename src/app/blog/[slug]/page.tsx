import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User } from "lucide-react";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { buildArticleSchema, buildFaqSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/data/blog";
import { OG_IMAGE, SITE_URL } from "@/data/site";
import { formatDate, slugFromPath } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: slugFromPath(post.slug),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => slugFromPath(p.slug) === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: post.slug,
    type: "article",
    image: post.featuredImage ?? OG_IMAGE,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => slugFromPath(p.slug) === slug);

  if (!post) notFound();

  const schema = [
    buildArticleSchema({
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}${post.slug}`,
      datePublished: post.date,
      author: post.author,
      image: post.featuredImage,
    }),
    ...(post.content.faq?.length ? [buildFaqSchema(post.content.faq)] : []),
  ];

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="pt-28 pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title },
            ]}
          />
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-6 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <User size={14} /> {post.author}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          {post.featuredImage && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      <article className="pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose-content mb-10">
            {post.content.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          {post.content.keyTakeaways && post.content.keyTakeaways.length > 0 && (
            <div className="bg-accent-muted border border-blue-100 rounded-xl p-6 mb-12">
              <h2 className="font-heading text-lg font-bold text-primary mb-4">Key Takeaways</h2>
              <ul className="space-y-2">
                {post.content.keyTakeaways.map((item) => (
                  <li key={item} className="text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.content.sections.map((section) => (
            <div key={section.title} className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
                {section.title}
              </h2>
              <ContentRenderer blocks={section.content} />
            </div>
          ))}

          <div className="border-t border-gray-100 pt-10 mt-10">
            <h2 className="font-heading text-xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{post.content.conclusion}</p>
          </div>

          {post.content.faq && post.content.faq.length > 0 && (
            <div className="mt-14">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">FAQ</h2>
              <FaqAccordion items={post.content.faq} defaultOpen={null} />
            </div>
          )}
        </div>
      </article>

      <section className="py-12 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-primary mb-6">Related Articles</h2>
          <div className="grid gap-4">
            {related.map((r) => (
              <Link
                key={r.id}
                href={r.slug}
                className="block bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="font-semibold text-primary hover:text-accent">{r.title}</div>
                <div className="text-sm text-gray-500 mt-1">{formatDate(r.date)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
