import Link from "next/link";
import {
  Target,
  Shield,
  TrendingUp,
  Link2,
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const PROCESS_STEPS = [
  { label: "Competitor gap analysis", desc: "Map Italian referring domains your rivals already hold" },
  { label: "Publisher vetting", desc: "Traffic quality, DR and manual editorial review" },
  { label: "Native Italian content", desc: "Articles written for real Italian audiences" },
  { label: "Contextual placement", desc: "In-body links inside indexed editorial pages" },
  { label: "Monthly reporting", desc: "Live URLs, indexation checks and anchor distribution" },
];

const BACKLINK_TYPES = [
  {
    title: "Guest Posting",
    stat: "Fresh pages",
    desc: "New editorial articles on Italian niche sites with contextual in-body links.",
    href: "/services/guest-posting-italy",
  },
  {
    title: "Digital PR",
    stat: "Media coverage",
    desc: "Data studies and news angles pitched to Italian journalists and trade press.",
    href: "/services/digital-pr-italy",
  },
  {
    title: "SEO Outreach",
    stat: "Scale sourcing",
    desc: "Dedicated teams finding and pitching new Italian publishers every month.",
    href: "/services/seo-outreach-italy",
  },
];

export function HomeSeoSections() {
  return (
    <>
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4">
                Link Building Italy
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 leading-tight">
                What Link Building Italy Means for Your Brand
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Link Building Italy means earning editorial backlinks from trusted Italian websites
                  to grow organic visibility in one of Europe&apos;s most competitive search markets.
                  For international brands entering Italy, that matters. Search engines weigh referring
                  domains, topical relevance and how naturally your links fit together when ranking
                  competitive Italian keywords.
                </p>
                <p>
                  It takes native outreach, real publisher relationships and placements that make
                  sense for your industry. A relevant link from an Italian niche site often beats a
                  high-DR link from an unrelated domain. We focus on vetted publishers, in-body
                  contextual links and vertical alignment across guest posting, digital PR and
                  outreach campaigns.
                </p>
                <p>
                  Our Rome team works with SaaS companies, ecommerce brands, fintech firms and
                  regulated industries that need Italian visibility without cutting corners. Whether
                  you target Milan buyers, national search or regional queries across Campania and
                  Tuscany, the same principle applies: editorial quality beats volume every time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:max-w-md lg:ml-auto">
              {[
                { icon: Target, value: "650+", label: "Italian publishers vetted" },
                { icon: Shield, value: "100%", label: "White-hat placements only" },
                { icon: TrendingUp, value: "+38%", label: "Avg. ranking lift reported" },
                { icon: Search, value: "95%+", label: "Google share in Italy" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-slate-50 rounded-xl border border-gray-100 p-5">
                  <Icon size={20} className="text-accent mb-3" />
                  <div className="text-2xl font-heading font-bold text-primary">{value}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-14 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-blue-300 uppercase mb-4">
                Italian Link Building
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                Italian Link Building That Actually Moves Rankings
              </h2>
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  Italian link building is not an English campaign with translated pitches. Editors
                  in Italy expect native copy, useful content and proper editorial standards. Cold
                  outreach in English rarely works; native Italian outreach to relevant publishers
                  gets noticeably better response rates.
                </p>
                <p>
                  We analyze competitor backlink profiles, then build placements through guest
                  posts, digital PR and outreach to vetted Italian publishers in your industry.
                  Every site is checked manually before it enters a campaign. You receive live URLs,
                  screenshots and monthly reporting so you always know what was delivered.
                </p>
                <p>
                  Brands that treat Italy as a checkbox market often waste budget on irrelevant
                  placements. We map regional publishers, vertical trade press and news cycles that
                  generic tools miss. That depth is what separates sustainable growth from a link
                  report that looks impressive but changes nothing in Search Console.
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-6">
                Our Italian Link Building Process
              </h3>
              <div className="space-y-5">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={step.label} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{step.label}</div>
                      <div className="text-slate-400 text-sm mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Authority Backlinks for the Italian Market
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Different goals need different tactics. We combine editorial link building, digital PR
              and outreach so your backlink profile grows in a way search engines and Italian
              readers both trust.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BACKLINK_TYPES.map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                  {type.stat}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Why Brands Choose Our Rome-Based Team
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Native Italian outreach managers who understand publisher culture",
              "Manual vetting on every domain before outreach begins",
              "Campaigns aligned with your anchor text and compliance requirements",
              "Transparent reporting with live URLs and indexation status",
              "Experience across YMYL sectors including fintech and healthcare",
              "Integration with your existing SEO agency or in-house team",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Read our story from Via Roma 22, Rome
              <Link2 size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
