import { LocalizedHomePage } from "@/components/home/LocalizedHomePage";
import { NL_HOME } from "@/data/localized-home";
import { homepageLanguageAlternates } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: NL_HOME.seo.title,
  absoluteTitle: true,
  description: NL_HOME.seo.description,
  path: NL_HOME.seo.path,
  locale: NL_HOME.seo.ogLocale,
  languages: homepageLanguageAlternates(),
  alternateLocales: ["en_US", "es_ES"],
});

export default function DutchHomePage() {
  return <LocalizedHomePage content={NL_HOME} />;
}
