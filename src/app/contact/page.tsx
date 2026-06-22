import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ContactForm } from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { buildLocalBusinessSchema, buildOrganizationSchema } from "@/lib/schema";
import { ADDRESS, CONTACT_EMAIL } from "@/data/site";

export const metadata = buildMetadata({
  title: "Contact Our Italian Link Building Team",
  description:
    "Get in touch with our Rome team. Via Roma 22, editorial link building and digital PR for brands targeting Italy.",
  path: "/contact",
});

export default function ContactPage() {
  const schema = [buildOrganizationSchema(), buildLocalBusinessSchema()];

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="pt-28 pb-0 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact" }]} />
          <div className="grid lg:grid-cols-2 gap-16 mt-10 pb-20">
            <div>
              <h1 className="font-heading text-4xl md:text-[2.75rem] font-bold text-primary mb-5 leading-tight">
                Talk to someone who runs Italian campaigns every day
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                No sales scripts. Tell us what you are trying to rank for, which competitors worry
                you, and what you have already tried. We will tell you honestly if we can help.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent-muted flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-0.5">Email</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-accent font-medium hover:underline text-base"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <p className="text-sm text-muted mt-1">We reply within one business day.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent-muted flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-0.5">Office</p>
                    <p className="text-primary">{ADDRESS.full}</p>
                    <p className="text-sm text-muted mt-1">Meetings by appointment. Fifth floor.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent-muted flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-0.5">Hours</p>
                    <p className="text-primary">Monday to Friday, 9:00 to 18:00 CET</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] max-w-md border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
                  alt="Rome cityscape near our Via Roma office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">Via Roma, Rome</p>
                  <p className="text-xs text-white/80">Where our outreach team works daily</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
              <p className="text-sm text-muted mt-6 leading-relaxed">
                Prefer email? Write directly to{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
                  {CONTACT_EMAIL}
                </a>{" "}
                with your domain and target keywords. That is often faster than a form.
              </p>
              <p className="text-sm text-muted mt-3">
                Already working with an SEO agency? Mention that in your message. We often plug in
                as a specialist outreach partner without replacing your existing team.{" "}
                <Link href="/services" className="text-accent hover:underline">
                  See our services
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
