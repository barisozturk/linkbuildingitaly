"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  ChevronDown,
  Clock,
  CheckCircle2,
  Globe,
  FileText,
  Send,
  Megaphone,
  Link as LinkIcon,
  Target,
} from "lucide-react";
import { CONTACT_EMAIL, NAV_LINKS, PARENT_ORG, PARENT_ORG_URL, ADDRESS } from "@/data/site";
import { SERVICES } from "@/data/services";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  Send,
  Megaphone,
  Link: LinkIcon,
  Target,
};

function TopBar() {
  return (
    <div className="bg-primary text-white border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-2.5 gap-3 md:gap-0">
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 hover:text-blue-300 transition-colors group"
            >
              <div className="bg-white/10 p-1.5 rounded-md group-hover:bg-accent/40 transition-colors">
                <Mail size={14} />
              </div>
              <span className="font-medium">{CONTACT_EMAIL}</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 text-white/80">
              <MapPin size={14} />
              <span>{ADDRESS.full}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6 text-sm">
            <div className="hidden md:flex items-center gap-2">
              <Clock size={14} className="text-blue-300" />
              <span>Mon-Fri 9AM-6PM CET</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-blue-300" />
              <span className="font-medium">95+ Italian campaigns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass =
    "text-base font-medium text-primary hover:text-accent transition-colors";

  return (
    <>
      <TopBar />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-border"
            : "bg-white border-border"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Link Building Italy logo"
                width={180}
                height={52}
                className="h-11 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services" className={`flex items-center gap-1 ${navLinkClass}`}>
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-3 w-[340px]">
                    <div className="bg-white rounded-xl shadow-xl border border-border p-2">
                      {SERVICES.map((service) => {
                        const Icon = iconMap[service.iconName] ?? FileText;
                        return (
                          <Link
                            key={service.id}
                            href={service.slug}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface transition-colors"
                          >
                            <div className="bg-accent-muted p-2 rounded-lg">
                              <Icon size={18} className="text-accent" />
                            </div>
                            <div>
                              <div className="font-semibold text-primary text-sm">
                                {service.title}
                              </div>
                              <div className="text-sm text-muted line-clamp-2 mt-0.5">
                                {service.shortDesc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              {NAV_LINKS.filter((l) => l.href !== "/services").map((link) => (
                <Link key={link.href} href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white text-base font-semibold px-7 py-3 rounded-lg transition-colors shadow-sm"
              >
                Book a Call
              </Link>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher />
              <button
                type="button"
                className="p-2 text-primary"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white px-4 py-6 space-y-5">
            <Link
              href="/services"
              className="block text-base font-medium text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            {NAV_LINKS.filter((l) => l.href !== "/services").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-accent text-white text-center font-semibold py-3.5 rounded-lg text-base"
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-5 rounded-lg bg-white px-4 py-3">
              <Image
                src="/logo.png"
                alt="Link Building Italy"
                width={200}
                height={60}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Editorial link building, digital PR and outreach campaigns for brands targeting the
              Italian search market. Based in Rome, serving clients worldwide.
            </p>
            <a
              href={PARENT_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors"
            >
              <Globe size={14} />
              Part of {PARENT_ORG}
            </a>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.slug}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-blue-300" />
                {ADDRESS.full}
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-blue-300" />
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Link Building Italy. All rights reserved.</p>
          <LanguageSwitcher variant="footer" />
          <p>White-hat link building for the Italian market.</p>
        </div>
      </div>
    </footer>
  );
}
