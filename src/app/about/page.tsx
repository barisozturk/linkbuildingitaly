import Link from "next/link";
import { MapPin, Mail, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { buildLocalBusinessSchema, buildOrganizationSchema } from "@/lib/schema";
import { ABOUT_CONTENT } from "@/data/about";
import { ADDRESS, CONTACT_EMAIL } from "@/data/site";

export const metadata = buildMetadata({
  title: ABOUT_CONTENT.seo.title,
  description: ABOUT_CONTENT.seo.description,
  path: "/about",
});

export default function AboutPage() {
  const schema = [buildOrganizationSchema(), buildLocalBusinessSchema()];

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="pt-28 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About" }]} variant="light" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-6 mb-4">
            {ABOUT_CONTENT.hero.headline}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            {ABOUT_CONTENT.hero.subheading}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-primary mb-6">
            {ABOUT_CONTENT.foundingStory.title}
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            {ABOUT_CONTENT.foundingStory.paragraphs.map((p) => (
              <p key={p.slice(0, 50)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-primary mb-10 text-center">
            {ABOUT_CONTENT.values.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ABOUT_CONTENT.values.items.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                {ABOUT_CONTENT.team.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{ABOUT_CONTENT.team.intro}</p>
              <ul className="space-y-3">
                {ABOUT_CONTENT.team.roles.map((role) => (
                  <li key={role} className="flex items-start gap-3 text-gray-700">
                    <Users size={18} className="text-accent shrink-0 mt-0.5" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                {ABOUT_CONTENT.office.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{ABOUT_CONTENT.office.description}</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                  {ABOUT_CONTENT.office.address}
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-accent shrink-0" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent hover:underline font-medium"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-6 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
