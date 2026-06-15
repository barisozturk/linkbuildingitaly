export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "pro-tip"; title: string; text: string }
  | { type: "stats"; items: { label: string; value: string; detail?: string }[] }
  | { type: "expert-note"; title: string; text: string; author?: string };

export type ChartMetric = "referringDomains" | "organicTraffic" | "keywords";

export interface ChartDataPoint {
  month: string;
  referringDomains: number;
  organicTraffic: number;
  keywords: number;
}

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  iconName: string;
  seo: { title: string; description: string };
  content: {
    heroSubheading: string;
    intro: string[];
    extendedContent: { title: string; content: ContentBlock[] }[];
    benefits: { title: string; desc: string }[];
    deliverables: string[];
    faq: { question: string; answer: string }[];
    relatedServiceIds?: string[];
  };
}

export interface BlogPostSection {
  title: string;
  content: ContentBlock[];
}

export interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  featuredImage?: string;
  content: {
    intro: string[];
    keyTakeaways?: string[];
    sections: BlogPostSection[];
    conclusion: string;
    faq?: { question: string; answer: string }[];
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  phase: string;
  period: string;
  description: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  location: string;
  duration: string;
  excerpt: string;
  featuredImage: string;
  metrics: { label: string; value: string; detail: string }[];
  beforeMetrics: { label: string; before: string; after: string }[];
  challenge: string[];
  timeline: TimelineItem[];
  approach: { title: string; content: ContentBlock[] }[];
  results: string[];
  testimonial?: { quote: string; name: string; role: string };
  relatedServiceIds: string[];
  chartData: ChartDataPoint[];
}

export interface BreadcrumbItem {
  name: string;
  path?: string;
}
