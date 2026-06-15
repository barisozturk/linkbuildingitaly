import type { CaseStudyData } from "@/types";

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: "cloudledger-saas",
    title: "CloudLedger Grows Italian Demo Requests Through Tech Media Links",
    slug: "/case-studies/cloudledger-saas-italy",
    client: "CloudLedger",
    industry: "SaaS",
    location: "Milan, Italy",
    duration: "9 months",
    excerpt:
      "A B2B accounting SaaS brand needed authority in a crowded Italian market. Editorial placements and guest contributions on tech and finance media lifted organic demos by 94%.",
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Referring domains", value: "+67", detail: "Net new Italian-relevant domains" },
      { label: "Organic traffic", value: "+112%", detail: "Italian locale segment" },
      { label: "Demo requests", value: "+94%", detail: "From organic Italian search" },
      { label: "Top 10 keywords", value: "+38", detail: "New Italian keyword rankings" },
    ],
    beforeMetrics: [
      { label: "Referring domains (IT)", before: "24", after: "91" },
      { label: "Monthly organic sessions", before: "3,200", after: "6,784" },
      { label: "Ranking keywords (top 20)", before: "89", after: "214" },
      { label: "Domain Rating", before: "31", after: "44" },
    ],
    challenge: [
      "CloudLedger launched its Italian localisation in early 2023 with strong product-market fit in the UK but almost no visibility in Italy. Competitors like domestic incumbents and well-funded EU players dominated search results for terms such as software contabilità cloud and fatturazione elettronica integrations. The marketing team had invested in translated landing pages and Google Ads, but organic acquisition stalled because the backlink profile was overwhelmingly English-language and irrelevant to Italian trust signals.",
      "The sales team reported that Italian prospects often asked whether CloudLedger was established in Italy, a perception problem rooted in weak local media presence. Paid search worked for bottom-funnel terms but cost per demo remained high. Leadership wanted an organic channel that compounded over time without relying solely on performance marketing spend.",
      "Compliance added complexity. Accounting software sits adjacent to YMYL territory in Italy given tax and invoicing regulations. Placements on low-quality blogs or irrelevant guest post networks would have created brand risk. CloudLedger needed links from publications their CFO buyers already read.",
    ],
    timeline: [
      {
        phase: "Discovery and audit",
        period: "Month 1",
        description:
          "Competitor backlink gap analysis, Italian keyword mapping, and asset audit on the .it content hub. Identified missing linkable research on e-invoicing adoption among PMI.",
      },
      {
        phase: "Asset and outreach launch",
        period: "Months 2-4",
        description:
          "Published PMI e-invoicing report in Italian. Parallel guest post campaign on fintech and SMB tech blogs. First tier-2 placements live by week six.",
      },
      {
        phase: "Digital PR wave",
        period: "Months 4-6",
        description:
          "Pitched report data to business desks ahead of tax season. Secured citations in trade press and a regional Corriere partner section.",
      },
      {
        phase: "Optimisation and scale",
        period: "Months 7-9",
        description:
          "Expanded editorial roundup outreach for software comparison pages. Reclaimed unlinked mentions from podcast show notes and conference coverage.",
      },
    ],
    approach: [
      {
        title: "Research-led content as the outreach anchor",
        content: [
          {
            type: "paragraph",
            text: "Rather than pitching product pages, we built a downloadable report on electronic invoicing adoption among Italian small businesses. The dataset compared Lombardy, Veneto, and Campania with practical commentary from CloudLedger's Italian country manager. This gave journalists and bloggers a reason to cite a primary source instead of ignoring another software pitch.",
          },
          {
            type: "list",
            items: [
              "Surveyed 420 PMI owners via a Italian panel provider",
              "Designed charts and Italian-language summary for journalists",
              "Hosted the asset on a dedicated /it/risorse URL with clear methodology",
            ],
          },
        ],
      },
      {
        title: "Layered outreach across guest and editorial",
        content: [
          {
            type: "paragraph",
            text: "Guest posts targeted established B2B blogs covering digital transformation for accountants. Editorial outreach pursued roundup pages comparing cloud accounting tools. Anchor strategy weighted 60% branded, 30% partial match on category terms, 10% generic to stay within safe thresholds for a finance-adjacent product.",
          },
        ],
      },
      {
        title: "Sales alignment and reporting",
        content: [
          {
            type: "paragraph",
            text: "Monthly reporting connected live URLs to landing page movement and shared placement summaries with the sales team for social proof in outbound sequences. Demo attribution in HubSpot showed assisted conversions rising as branded search volume increased alongside referring domains.",
          },
        ],
      },
    ],
    results: [
      "Sixty-seven new Italian-relevant referring domains over nine months, with DR 40+ representing 58% of placements.",
      "Organic sessions on the Italian site more than doubled, with strongest gains on integration and comparison pages.",
      "Demo requests from organic search rose 94% year over year in the Italian segment.",
      "Branded search volume for CloudLedger Italia increased 71%, reducing reliance on generic paid keywords.",
      "Sales team adopted placement URLs in nurture emails, reporting improved reply rates on enterprise accounts.",
    ],
    testimonial: {
      quote:
        "Italian buyers trust what they read in familiar publications. These links did more for credibility than any tradeshow booth we booked that year.",
      name: "Luca Ferretti",
      role: "VP Marketing, CloudLedger",
    },
    relatedServiceIds: ["guest-posting", "digital-pr", "seo-outreach"],
    chartData: [
      { month: "Jan", referringDomains: 24, organicTraffic: 3200, keywords: 89 },
      { month: "Feb", referringDomains: 31, organicTraffic: 3580, keywords: 102 },
      { month: "Mar", referringDomains: 42, organicTraffic: 4100, keywords: 118 },
      { month: "Apr", referringDomains: 55, organicTraffic: 4890, keywords: 145 },
      { month: "May", referringDomains: 68, organicTraffic: 5420, keywords: 172 },
      { month: "Jun", referringDomains: 91, organicTraffic: 6784, keywords: 214 },
    ],
  },
  {
    id: "payflow-fintech",
    title: "PayFlow Italia Builds Compliant Fintech Authority",
    slug: "/case-studies/payflow-fintech-italy",
    client: "PayFlow Italia",
    industry: "Fintech",
    location: "Rome, Italy",
    duration: "12 months",
    excerpt:
      "A payments startup needed backlinks compliance could approve. Editorial placements on finance media and careful guest posting grew non-branded organic leads by 76%.",
    featuredImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Referring domains", value: "+52", detail: "Finance and business media" },
      { label: "Non-branded traffic", value: "+76%", detail: "Italian organic leads" },
      { label: "Compliance-approved placements", value: "100%", detail: "Pre-publication review" },
      { label: "Cost per organic lead", value: "-41%", detail: "Vs paid search baseline" },
    ],
    beforeMetrics: [
      { label: "Referring domains", before: "18", after: "70" },
      { label: "Monthly organic leads", before: "145", after: "255" },
      { label: "Finance media mentions", before: "2", after: "19" },
      { label: "Domain Rating", before: "28", after: "41" },
    ],
    challenge: [
      "PayFlow Italia offers B2B payment infrastructure for ecommerce merchants and marketplaces. Entering a market where incumbents own trust is difficult, and fintech marketing in Italy attracts regulatory scrutiny. The compliance team rejected previous link vendors whose placements appeared on casino-adjacent blogs and thin affiliate sites.",
      "Organic visibility for payment gateway and PSD2-related queries lagged despite solid technical SEO. Competitors benefited from years of citations in finance roundups and association resource pages. PayFlow's Italian blog existed but attracted few links because articles read like product documentation rather than industry resources.",
      "The growth team needed measurable pipeline contribution from SEO while staying inside strict brand and legal guidelines. Every placement required documented context, approved copy, and avoidance of guaranteed returns language.",
    ],
    timeline: [
      {
        phase: "Compliance framework",
        period: "Month 1",
        description:
          "Established joint review workflow with legal. Defined publisher blocklist and approved anchor guidelines for regulated terms.",
      },
      {
        phase: "Linkable asset rebuild",
        period: "Months 2-3",
        description:
          "Rewrote core guides on PSD2 and merchant onboarding. Added citation-friendly statistics and glossary pages.",
      },
      {
        phase: "Editorial and guest sprint",
        period: "Months 4-8",
        description:
          "Editorial roundup outreach on payment processors. Guest articles on ecommerce and fintech publications with bylined experts.",
      },
      {
        phase: "PR and reclamation",
        period: "Months 9-12",
        description:
          "Digital PR on Italian ecommerce payment trends survey. Reclaimed links from conference speaker bios and podcast notes.",
      },
    ],
    approach: [
      {
        title: "Compliance-first publisher vetting",
        content: [
          {
            type: "paragraph",
            text: "Every domain passed a 12-point review covering editorial oversight, historical fintech coverage, and outbound link patterns. We excluded sites with crypto scams, gambling, or aggressive loan content in adjacent sidebar placements. Compliance received the target list before outreach began each quarter.",
          },
        ],
      },
      {
        title: "Expert bylines over product promotion",
        content: [
          {
            type: "paragraph",
            text: "Guest posts were authored by PayFlow's Head of Partnerships and focused on merchant education: chargeback reduction, checkout optimisation, and regulatory updates. Links pointed to glossary and guide pages rather than signup flows, which improved both publisher acceptance and compliance comfort.",
          },
          {
            type: "table",
            headers: ["Content type", "Placements", "Primary landing pages"],
            rows: [
              ["Guest posts", "14", "Guides and glossary"],
              ["Roundup inclusions", "9", "Product comparison hub"],
              ["PR citations", "6", "Research report"],
              ["Reclaimed mentions", "8", "Homepage and about"],
            ],
          },
        ],
      },
    ],
    results: [
      "Fifty-two new referring domains, all passing compliance review, with zero post-live removals for policy violations.",
      "Non-branded organic leads grew 76% as comparison and educational pages reached page one for mid-tail payment terms.",
      "Cost per organic lead fell 41% relative to Google Ads benchmark for equivalent keywords.",
      "Finance media mentions increased from two to nineteen, supporting a Series B narrative around Italian market traction.",
      "Anchor profile remained conservative with 68% branded anchors across the campaign.",
    ],
    testimonial: {
      quote:
        "Finally an agency that understood our compliance team is not the enemy of link building. Every placement had context we could defend in a due diligence room.",
      name: "Elena Marchetti",
      role: "Head of Growth, PayFlow Italia",
    },
    relatedServiceIds: ["editorial-links", "guest-posting", "digital-pr"],
    chartData: [
      { month: "Jan", referringDomains: 18, organicTraffic: 2100, keywords: 64 },
      { month: "Feb", referringDomains: 24, organicTraffic: 2450, keywords: 78 },
      { month: "Mar", referringDomains: 32, organicTraffic: 2890, keywords: 95 },
      { month: "Apr", referringDomains: 41, organicTraffic: 3200, keywords: 112 },
      { month: "May", referringDomains: 55, organicTraffic: 3650, keywords: 134 },
      { month: "Jun", referringDomains: 70, organicTraffic: 4100, keywords: 158 },
    ],
  },
  {
    id: "modaverde-ecommerce",
    title: "ModaVerde Scales Italian Fashion Ecommerce Organic Revenue",
    slug: "/case-studies/modaverde-ecommerce-italy",
    client: "ModaVerde",
    industry: "Ecommerce",
    location: "Florence, Italy",
    duration: "8 months",
    excerpt:
      "A sustainable fashion retailer used editorial roundups and digital PR to compete with legacy brands on category terms and grow organic revenue 63%.",
    featuredImage: "https://images.unsplash.com/photo-1445205170230-053b8301600?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Organic revenue", value: "+63%", detail: "Italian store segment" },
      { label: "Referring domains", value: "+44", detail: "Fashion and lifestyle media" },
      { label: "Category page rankings", value: "+29", detail: "Top 10 Italian keywords" },
      { label: "PR pieces", value: "11", detail: "With live editorial links" },
    ],
    beforeMetrics: [
      { label: "Referring domains", before: "36", after: "80" },
      { label: "Monthly organic revenue", before: "€124k", after: "€202k" },
      { label: "Top 10 category terms", before: "12", after: "41" },
      { label: "Domain Rating", before: "38", after: "49" },
    ],
    challenge: [
      "ModaVerde sells sustainable women's fashion online with a loyal customer base in Tuscany and growing national ambition. Legacy Italian fashion houses and fast-fashion giants dominated search for broad category terms like abiti sostenibili and moda ecologica donna. ModaVerde's product pages were strong on-site but lacked the off-page authority of competitors with decades of press coverage.",
      "Seasonal revenue spikes depended heavily on Meta ads. The CFO wanted organic to contribute a larger share of Q4 revenue without proportional ad spend increases. Previous link building attempts produced low-quality guest posts on unrelated lifestyle blogs that moved no rankings.",
      "The brand had a genuine sustainability story and supply chain transparency data but had not packaged it for media consumption. Editors wanted numbers on Italian consumer attitudes, not another lookbook.",
    ],
    timeline: [
      {
        phase: "Seasonal strategy",
        period: "Month 1",
        description:
          "Mapped fashion calendar hooks for spring and autumn collections. Audited category pages for internal linking to upcoming linkable guides.",
      },
      {
        phase: "Consumer research PR",
        period: "Months 2-4",
        description:
          "Launched Italian sustainable fashion sentiment survey. Pitched results to lifestyle and national news online sections.",
      },
      {
        phase: "Roundup and editorial push",
        period: "Months 4-6",
        description:
          "Targeted best sustainable brands lists and gift guides. Secured placements linking to category hubs.",
      },
      {
        phase: "Holiday amplification",
        period: "Months 7-8",
        description:
          "Reactive pitches around Black Friday greenwashing angle. Guest posts on eco-lifestyle blogs supporting long-tail terms.",
      },
    ],
    approach: [
      {
        title: "Data-led digital PR for fashion desks",
        content: [
          {
            type: "paragraph",
            text: "We surveyed 1,100 Italian women on purchasing habits, willingness to pay premiums for sustainable labels, and trust in green marketing claims. The report landed coverage in online lifestyle sections and eco-focused vertical sites, each linking to ModaVerde's research hub.",
          },
          {
            type: "stats",
            items: [
              { label: "Survey respondents", value: "1,100", detail: "Italian consumers" },
              { label: "Media pickups", value: "11", detail: "With links" },
              { label: "Social shares", value: "4,200+", detail: "Of research page" },
            ],
          },
        ],
      },
      {
        title: "Category page link concentration",
        content: [
          {
            type: "paragraph",
            text: "Roundup outreach explicitly targeted pages competing for category revenue, not just the homepage. We supplied high-quality product imagery and sustainability credentials editors needed for listicles, reducing friction in inclusion decisions.",
          },
        ],
      },
    ],
    results: [
      "Organic revenue from the Italian store rose 63% over eight months, with category pages driving the majority of incremental sales.",
      "Forty-four new referring domains from fashion, lifestyle, and regional media.",
      "Twenty-nine additional category terms reached top 10, including several high-intent long-tail combinations.",
      "Black Friday organic sessions exceeded paid social referral for the first time in company history.",
      "Email list growth from research page downloads added 8,400 subscribers for remarketing.",
    ],
    testimonial: {
      quote:
        "They turned our sustainability story into something journalists actually quoted. The links followed naturally, and so did sales.",
      name: "Sofia Ricci",
      role: "SEO Lead, ModaVerde",
    },
    relatedServiceIds: ["digital-pr", "editorial-links", "guest-posting"],
    chartData: [
      { month: "Jan", referringDomains: 36, organicTraffic: 18500, keywords: 420 },
      { month: "Feb", referringDomains: 42, organicTraffic: 19200, keywords: 445 },
      { month: "Mar", referringDomains: 51, organicTraffic: 21400, keywords: 478 },
      { month: "Apr", referringDomains: 58, organicTraffic: 23100, keywords: 512 },
      { month: "May", referringDomains: 68, organicTraffic: 25800, keywords: 548 },
      { month: "Jun", referringDomains: 80, organicTraffic: 28900, keywords: 591 },
    ],
  },
  {
    id: "viaggi-del-sud-travel",
    title: "Viaggi del Sud Expands Regional Travel Bookings via Local Media",
    slug: "/case-studies/viaggi-del-sud-travel-italy",
    client: "Viaggi del Sud",
    industry: "Travel",
    location: "Naples, Italy",
    duration: "10 months",
    excerpt:
      "A southern Italy tour operator earned regional press coverage and editorial links that lifted organic bookings for Puglia and Sicily packages by 58%.",
    featuredImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Organic bookings", value: "+58%", detail: "Italian locale" },
      { label: "Regional media links", value: "+31", detail: "Campania, Puglia, Sicily" },
      { label: "Destination page traffic", value: "+89%", detail: "Puglia and Sicily hubs" },
      { label: "Average position", value: "-4.2", detail: "Core package keywords" },
    ],
    beforeMetrics: [
      { label: "Referring domains", before: "22", after: "53" },
      { label: "Monthly organic bookings", before: "312", after: "493" },
      { label: "Destination hub sessions", before: "8,400", after: "15,876" },
      { label: "Domain Rating", before: "26", after: "37" },
    ],
    challenge: [
      "Viaggi del Sud specialises in curated tours across southern Italy for international and domestic travellers. Competition from OTAs and large tour aggregators made organic visibility for destination package terms extremely difficult. The site had beautiful photography but thin textual authority and almost no links from regional tourism media.",
      "Marketing spend focused on Google Ads and Instagram. Organic contributed less than 15% of bookings despite strong reviews on TripAdvisor. Leadership wanted to reduce OTA commission dependence by growing direct bookings, starting with Italian-language searchers planning Puglia and Sicily trips.",
      "Regional editors cover tourism seasonally and prefer local expertise angles over generic agency pitches. Viaggi del Sud's team had deep on-ground knowledge but no systematic outreach to Campanian and Sicilian news sites.",
    ],
    timeline: [
      {
        phase: "Destination content upgrade",
        period: "Months 1-2",
        description:
          "Expanded Puglia and Sicily hubs with insider guides, seasonal itineraries, and downloadable PDF maps designed for citation.",
      },
      {
        phase: "Regional media outreach",
        period: "Months 3-6",
        description:
          "Pitched local travel editors ahead of summer season. Secured features in regional news travel sections and tourism blogs.",
      },
      {
        phase: "PR index launch",
        period: "Months 5-7",
        description:
          "Published Southern Italy Overtourism Index comparing visitor dispersion across coastal towns. National and regional pickups followed.",
      },
      {
        phase: "Guest and partnership links",
        period: "Months 8-10",
        description:
          "Guest posts on travel blogs. Partnership links from approved hotel associations and local DMO resource pages.",
      },
    ],
    approach: [
      {
        title: "Hyper-local angle development",
        content: [
          {
            type: "paragraph",
            text: "We positioned Viaggi del Sud's founders as sources on sustainable tourism in less crowded southern towns. Pitches referenced specific municipalities, festivals, and transport changes Italian regional journalists were already covering, with tour data as supporting evidence.",
          },
          {
            type: "list",
            items: [
              "Built journalist list of 120 regional travel desks and bloggers",
              "Offered embargoed photography packages for summer preview pieces",
              "Created Italian and English versions of the Overtourism Index for broader pickup",
            ],
          },
        ],
      },
      {
        title: "Destination hub internal linking",
        content: [
          {
            type: "paragraph",
            text: "New links pointed to destination hubs rather than generic homepage URLs. On-site internal linking connected blog features to package booking pages, ensuring authority flowed toward revenue-generating URLs.",
          },
        ],
      },
    ],
    results: [
      "Organic bookings rose 58% with strongest gains on Puglia cycling tours and Sicily food and wine packages.",
      "Thirty-one regional media links from outlets with genuine Campanian, Pugliese, and Sicilian readership.",
      "Destination hub traffic grew 89%, improving assisted conversions from research-phase visitors.",
      "Average keyword position for core package terms improved by 4.2 positions on average.",
      "Direct booking share increased 12 percentage points year over year as organic trust signals strengthened.",
    ],
    testimonial: {
      quote:
        "Regional journalists trusted us because we offered real local insight, not a brochure. Those links brought travellers who actually completed bookings.",
      name: "Marco Bianchi",
      role: "Marketing Director, Viaggi del Sud",
    },
    relatedServiceIds: ["digital-pr", "seo-outreach", "editorial-links"],
    chartData: [
      { month: "Jan", referringDomains: 22, organicTraffic: 11200, keywords: 186 },
      { month: "Feb", referringDomains: 27, organicTraffic: 12100, keywords: 198 },
      { month: "Mar", referringDomains: 34, organicTraffic: 13800, keywords: 224 },
      { month: "Apr", referringDomains: 39, organicTraffic: 15200, keywords: 251 },
      { month: "May", referringDomains: 46, organicTraffic: 17100, keywords: 278 },
      { month: "Jun", referringDomains: 53, organicTraffic: 19800, keywords: 312 },
    ],
  },
  {
    id: "saluteplus-healthcare",
    title: "SalutePlus Earns YMYL-Safe Healthcare Links in Italy",
    slug: "/case-studies/saluteplus-healthcare-italy",
    client: "SalutePlus",
    industry: "Healthcare",
    location: "Turin, Italy",
    duration: "11 months",
    excerpt:
      "A telehealth platform needed authoritative Italian health media links. Medically reviewed content and strict publisher vetting grew qualified patient signups 71%.",
    featuredImage: "https://images.unsplash.com/photo-1576091160399-334db0e1f7?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Patient signups", value: "+71%", detail: "Organic Italian channel" },
      { label: "Health media links", value: "+28", detail: "Medically vetted placements" },
      { label: "YMYL page rankings", value: "+22", detail: "Top 10 medical terms" },
      { label: "Bounce rate on guides", value: "-18%", detail: "Improved engagement" },
    ],
    beforeMetrics: [
      { label: "Referring domains", before: "14", after: "42" },
      { label: "Monthly organic signups", before: "890", after: "1,522" },
      { label: "Medically reviewed articles", before: "18", after: "47" },
      { label: "Domain Rating", before: "32", after: "43" },
    ],
    challenge: [
      "SalutePlus connects patients with licensed specialists for video consultations across Italy. Healthcare SEO falls squarely in YMYL territory where Google applies heightened quality standards. Previous link vendors proposed guest posts on generic health blogs with no medical editorial oversight, which the medical director rejected outright.",
      "Organic patient acquisition cost less than paid channels but scaled slowly because condition-specific guides lacked authoritative citations. Competitors affiliated with hospital networks benefited from natural .edu and institutional links SalutePlus could not replicate overnight.",
      "The content team produced medically reviewed articles, but outreach had never positioned those assets for links from reputable Italian health publishers, patient associations, and wellness media with editorial standards.",
    ],
    timeline: [
      {
        phase: "Medical governance setup",
        period: "Month 1",
        description:
          "Defined YMYL publisher criteria with medical director. Established review workflow for all outreach copy and landing pages.",
      },
      {
        phase: "Guide expansion",
        period: "Months 2-4",
        description:
          "Published specialist-reviewed guides on high-demand conditions. Added citation boxes and downloadable patient checklists.",
      },
      {
        phase: "Association and resource outreach",
        period: "Months 5-8",
        description:
          "Targeted patient advocacy resource pages and university health department link lists. Guest expert columns on vetted wellness sites.",
      },
      {
        phase: "PR on access to care",
        period: "Months 9-11",
        description:
          "Digital PR on regional telehealth access survey. Secured citations in health sections of major online news brands.",
      },
    ],
    approach: [
      {
        title: "YMYL publisher standards",
        content: [
          {
            type: "paragraph",
            text: "Publishers had to demonstrate medical editorial review, author credentials on health content, and absence of predatory supplement advertising. We excluded sites promoting unverified treatments. The medical director signed off quarterly target lists.",
          },
          {
            type: "pro-tip",
            title: "Lead with clinical reviewers",
            text: "Bylines from SalutePlus's supervising physicians increased acceptance rates on health publications compared to marketing-authored drafts.",
          },
        ],
      },
      {
        title: "Patient education over promotion",
        content: [
          {
            type: "paragraph",
            text: "Links targeted condition guides explaining symptoms, when to seek care, and treatment options. No placement promised cures or guaranteed outcomes. Language matched Italian Ministry of Health communication tone where appropriate.",
          },
        ],
      },
    ],
    results: [
      "Organic patient signups increased 71% with improved conversion on condition landing pages supported by health media links.",
      "Twenty-eight placements on medically vetted publishers with zero compliance escalations post-live.",
      "Twenty-two additional YMYL keywords reached top 10, primarily long-tail condition and telehealth access terms.",
      "Guide engagement improved with bounce rate down 18% as authority signals aligned with content depth.",
      "Partnership interest from two regional clinics citing improved online credibility.",
    ],
    testimonial: {
      quote:
        "In healthcare you cannot cut corners on where you appear online. This campaign respected clinical standards and still delivered measurable growth.",
      name: "Dr. Giulia Conti",
      role: "Medical Director, SalutePlus",
    },
    relatedServiceIds: ["editorial-links", "guest-posting", "digital-pr"],
    chartData: [
      { month: "Jan", referringDomains: 14, organicTraffic: 22400, keywords: 312 },
      { month: "Feb", referringDomains: 19, organicTraffic: 24100, keywords: 334 },
      { month: "Mar", referringDomains: 24, organicTraffic: 26800, keywords: 358 },
      { month: "Apr", referringDomains: 30, organicTraffic: 29500, keywords: 389 },
      { month: "May", referringDomains: 36, organicTraffic: 32100, keywords: 421 },
      { month: "Jun", referringDomains: 42, organicTraffic: 35600, keywords: 456 },
    ],
  },
  {
    id: "meccanica-rossi-manufacturing",
    title: "Meccanica Rossi Wins B2B Manufacturing Links and Export Leads",
    slug: "/case-studies/meccanica-rossi-manufacturing-italy",
    client: "Meccanica Rossi",
    industry: "Manufacturing",
    location: "Bologna, Italy",
    duration: "7 months",
    excerpt:
      "A precision components manufacturer used trade press guest posts and industry directory editorial links to grow international organic inquiries 82%.",
    featuredImage: "https://images.unsplash.com/photo-1581091226825-aee1e8d4a973?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "International inquiries", value: "+82%", detail: "Organic contact form" },
      { label: "Trade press links", value: "+19", detail: "Engineering publications" },
      { label: "Referring domains", value: "+26", detail: "B2B industrial media" },
      { label: "LinkedIn referral traffic", value: "+45%", detail: "From PR and guest content" },
    ],
    beforeMetrics: [
      { label: "Referring domains", before: "31", after: "57" },
      { label: "Monthly organic inquiries", before: "38", after: "69" },
      { label: "Trade publication features", before: "1", after: "12" },
      { label: "Domain Rating", before: "35", after: "42" },
    ],
    challenge: [
      "Meccanica Rossi manufactures precision CNC components for automotive and aerospace suppliers from its Bologna facility. Export sales depended on trade shows and agent networks. The English and Italian websites existed but generated few inbound leads from organic search compared to German competitors with dense trade media footprints.",
      "Engineering buyers research suppliers through technical articles, standards guides, and industry association resources. Meccanica Rossi's site listed capabilities but offered little thought leadership. Link building had never been attempted beyond directory listings of questionable quality.",
      "The managing director wanted visibility in DACH and EU markets without hiring a large in-house content team. Placements needed to reflect technical credibility, not consumer-style listicles.",
    ],
    timeline: [
      {
        phase: "Technical content audit",
        period: "Month 1",
        description:
          "Identified gaps in materials, tolerances, and aerospace certification content. Prioritised linkable technical briefs.",
      },
      {
        phase: "Trade press guest programme",
        period: "Months 2-5",
        description:
          "Engineering bylines on Italian and English-language industrial publications. Topics on supply chain resilience and precision machining trends.",
      },
      {
        phase: "Association resource links",
        period: "Months 4-6",
        description:
          "Outreach to industry association member directories and supplier resource pages with updated company profiles.",
      },
      {
        phase: "PR and case study amplification",
        period: "Months 6-7",
        description:
          "Pitched joint case study with automotive client to trade media. Repurposed for outreach to international engineering blogs.",
      },
    ],
    approach: [
      {
        title: "Engineer-to-engineer content",
        content: [
          {
            type: "paragraph",
            text: "Articles were co-authored with Meccanica Rossi's head of production and focused on tolerances, material selection, and lead time optimisation in automotive supply chains. Technical depth earned acceptance in publications that reject marketing fluff.",
          },
          {
            type: "table",
            headers: ["Publication type", "Language", "Links secured"],
            rows: [
              ["Italian trade press", "Italian", "8"],
              ["EU engineering media", "English", "7"],
              ["Association resources", "Bilingual", "4"],
              ["Industry directories (editorial)", "English", "4"],
            ],
          },
        ],
      },
      {
        title: "Bilingual landing page strategy",
        content: [
          {
            type: "paragraph",
            text: "English guest posts linked to English capability pages while Italian trade coverage linked to Italian URLs, supporting hreflang structure and regional relevance without cannibalisation.",
          },
        ],
      },
    ],
    results: [
      "International organic inquiries rose 82%, with Germany and France representing the largest incremental share.",
      "Nineteen trade press links from publications the sales team already used as credibility references in proposals.",
      "LinkedIn referral traffic grew 45% as engineers shared technical articles.",
      "Two association resource inclusions led to direct RFQ emails from member companies.",
      "Sales cycle shortened for organic-sourced leads who referenced articles during first calls.",
    ],
    testimonial: {
      quote:
        "Our buyers are engineers. They responded to technical articles in the publications they already read, not ads. The inquiry quality improved noticeably.",
      name: "Andrea Rossi",
      role: "Managing Director, Meccanica Rossi",
    },
    relatedServiceIds: ["guest-posting", "seo-outreach", "editorial-links"],
    chartData: [
      { month: "Jan", referringDomains: 31, organicTraffic: 4200, keywords: 156 },
      { month: "Feb", referringDomains: 35, organicTraffic: 4580, keywords: 168 },
      { month: "Mar", referringDomains: 40, organicTraffic: 5100, keywords: 182 },
      { month: "Apr", referringDomains: 46, organicTraffic: 5620, keywords: 198 },
      { month: "May", referringDomains: 52, organicTraffic: 6100, keywords: 214 },
      { month: "Jun", referringDomains: 57, organicTraffic: 6850, keywords: 231 },
    ],
  },
];
