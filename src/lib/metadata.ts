import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/data/site";

export function buildMetadata(params: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = params.absoluteTitle
    ? params.title
    : params.title.includes("|")
      ? params.title
      : `${params.title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${params.path}`;
  const image = params.image ?? OG_IMAGE;

  return {
    title: params.absoluteTitle ? { absolute: fullTitle } : fullTitle,
    description: params.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: params.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: params.type ?? "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description: params.description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: params.description,
      images: [image],
    },
  };
}
