import { LocalizedHomePage } from "@/components/home/LocalizedHomePage";
import { ES_HOME } from "@/data/localized-home";
import { homepageLanguageAlternates } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: ES_HOME.seo.title,
  absoluteTitle: true,
  description: ES_HOME.seo.description,
  path: ES_HOME.seo.path,
  locale: ES_HOME.seo.ogLocale,
  languages: homepageLanguageAlternates(),
  alternateLocales: ["en_US", "nl_NL"],
});

export default function SpanishHomePage() {
  return <LocalizedHomePage content={ES_HOME} />;
}
