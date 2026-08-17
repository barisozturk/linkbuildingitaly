"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_CONFIG, SITE_LOCALES, localeFromPathname, type SiteLocale } from "@/lib/i18n";

const SWITCHER_LABELS: Record<SiteLocale, string> = {
  en: "Language",
  nl: "Taal",
  es: "Idioma",
};

interface LanguageSwitcherProps {
  variant?: "header" | "footer";
}

export function LanguageSwitcher({ variant = "header" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const active = localeFromPathname(pathname);
  const ariaLabel = SWITCHER_LABELS[active];

  if (variant === "footer") {
    return (
      <nav aria-label={ariaLabel} className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {SITE_LOCALES.map((code) => {
          const locale = LOCALE_CONFIG[code];
          const isActive = active === code;
          return (
            <Link
              key={code}
              href={locale.href}
              hrefLang={locale.hrefLang}
              lang={locale.htmlLang}
              aria-current={isActive ? "page" : undefined}
              className={`text-xs transition-colors ${
                isActive ? "text-white font-semibold" : "text-white/50 hover:text-white"
              }`}
            >
              {locale.nativeLabel}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav
      aria-label={ariaLabel}
      className="flex items-center shrink-0 rounded-full border border-border bg-slate-50 p-0.5"
    >
      {SITE_LOCALES.map((code) => {
        const locale = LOCALE_CONFIG[code];
        const isActive = active === code;
        return (
          <Link
            key={code}
            href={locale.href}
            hrefLang={locale.hrefLang}
            lang={locale.htmlLang}
            aria-current={isActive ? "page" : undefined}
            className={`min-w-[2.25rem] px-2.5 py-1.5 text-[11px] font-bold tracking-wide rounded-full transition-colors text-center ${
              isActive
                ? "bg-primary text-white shadow-sm"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            {locale.code}
          </Link>
        );
      })}
    </nav>
  );
}
