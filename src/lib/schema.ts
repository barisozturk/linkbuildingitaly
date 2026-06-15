import { FaqItem } from "@/types";
import {
  ADDRESS,
  CONTACT_EMAIL,
  OG_IMAGE,
  PARENT_ORG,
  PARENT_ORG_URL,
  SITE_NAME,
  SITE_URL,
} from "@/data/site";

export function buildFaqSchema(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: OG_IMAGE,
    email: CONTACT_EMAIL,
    parentOrganization: {
      "@type": "Organization",
      name: PARENT_ORG,
      url: PARENT_ORG_URL,
    },
    areaServed: "Italy",
    description:
      "Specialist Italian link building agency helping international brands build authority in the Italian search market.",
    sameAs: [PARENT_ORG_URL],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      postalCode: ADDRESS.postalCode,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.9028,
      longitude: 12.4964,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: "Italy",
  };
}

export function buildArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    author: { "@type": "Person", name: params.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
    image: params.image ?? OG_IMAGE,
  };
}
