import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/data/site";

const homepageLanguages = {
  en: `${SITE_URL}/`,
  nl: `${SITE_URL}/nl`,
  es: `${SITE_URL}/es`,
  "x-default": `${SITE_URL}/`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const homepagePages: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "/nl", priority: 0.95 },
    { path: "/es", priority: 0.95 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
    alternates: { languages: homepageLanguages },
  }));

  const staticPages = ["/about", "/contact", "/services", "/case-studies", "/blog"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }),
  );

  const servicePages = SERVICES.map((service) => ({
    url: `${SITE_URL}${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyPages = CASE_STUDIES.map((study) => ({
    url: `${SITE_URL}${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...homepagePages, ...staticPages, ...servicePages, ...caseStudyPages, ...blogPages];
}
