import { SITE_URL } from "@/data/site";

export const SITE_LOCALES = ["en", "nl", "es"] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];

export const LOCALE_CONFIG: Record<
  SiteLocale,
  { href: string; hrefLang: string; htmlLang: string; ogLocale: string; nativeLabel: string; code: string }
> = {
  en: {
    href: "/",
    hrefLang: "en",
    htmlLang: "en",
    ogLocale: "en_US",
    nativeLabel: "English",
    code: "EN",
  },
  nl: {
    href: "/nl",
    hrefLang: "nl",
    htmlLang: "nl",
    ogLocale: "nl_NL",
    nativeLabel: "Nederlands",
    code: "NL",
  },
  es: {
    href: "/es",
    hrefLang: "es",
    htmlLang: "es",
    ogLocale: "es_ES",
    nativeLabel: "Español",
    code: "ES",
  },
};

export function homepageLanguageAlternates() {
  return {
    en: `${SITE_URL}/`,
    nl: `${SITE_URL}/nl`,
    es: `${SITE_URL}/es`,
    "x-default": `${SITE_URL}/`,
  };
}

export function localeFromPathname(pathname: string | null): SiteLocale {
  if (!pathname) return "en";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "en";
}
