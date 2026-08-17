import type { FaqItem } from "@/types";

export interface LocalizedHomeContent {
  locale: "nl" | "es";
  htmlLang: string;
  inLanguage: string;
  seo: {
    title: string;
    description: string;
    path: string;
    ogLocale: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    badges: string[];
    pill: string;
    imageAlt: string;
    rankingLabel: string;
    rankingValue: string;
  };
  meaning: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  ranking: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    processTitle: string;
    steps: { label: string; desc: string }[];
  };
  backlinks: {
    title: string;
    subtitle: string;
    learnMore: string;
    types: { title: string; stat: string; desc: string; href: string }[];
  };
  whyUs: {
    title: string;
    items: string[];
    storyLink: string;
    storyHref: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    explore: string;
    items: Record<string, { title: string; shortDesc: string }>;
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    viewAll: string;
    viewAllHref: string;
    items: Record<string, { title: string; excerpt: string; industry: string }>;
  };
  testimonials: {
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
    href: string;
  };
}

export const NL_HOME: LocalizedHomeContent = {
  locale: "nl",
  htmlLang: "nl",
  inLanguage: "nl-NL",
  seo: {
    title: "Linkbulding Italië",
    description:
      "Linkbulding Italië voor merken die autoriteit opbouwen in de Italiaanse zoekmarkt. Editoriale backlinks, native outreach en white-hat campagnes vanuit Rome.",
    path: "/nl",
    ogLocale: "nl_NL",
  },
  hero: {
    h1: "Linkbulding Italië",
    subtitle:
      "Verdien gezaghebbende Italiaanse backlinks die rankings in Italië daadwerkelijk vooruithelpen. Wij begeleiden SEO-managers, marketingteams en internationale merken naar redactionele plaatsingen bij uitgevers die Italiaanse zoekers vertrouwen.",
    ctaPrimary: "Plan een gesprek",
    ctaPrimaryHref: "/contact",
    ctaSecondary: "Bekijk diensten",
    ctaSecondaryHref: "/services",
    badges: ["Alleen white-hat", "650+ Italiaanse uitgevers", "Native Italiaanse outreach"],
    pill: "Specialist in Italiaanse linkbuilding · Rome",
    imageAlt: "Team van Linkbulding Italië op kantoor in Rome, Via Roma",
    rankingLabel: "Gem. rankingstijging",
    rankingValue: "+38%",
  },
  meaning: {
    eyebrow: "Linkbulding Italië",
    title: "Wat Linkbulding Italië voor uw merk betekent",
    paragraphs: [
      "Linkbulding Italië betekent redactionele backlinks verdienen op betrouwbare Italiaanse websites, zodat uw zichtbaarheid groeit in een van de meest competitieve zoekmarkten van Europa. Voor internationale merken die Italië binnenkomen, weegt dat zwaar. Zoekmachines kijken naar verwijzende domeinen, thematische relevantie en hoe natuurlijk uw linkprofiel in elkaar steekt bij het ranken op Italiaanse zoekwoorden.",
      "Daarvoor heeft u native outreach nodig, echte relaties met uitgevers en plaatsingen die bij uw sector passen. Een relevante link vanaf een Italiaanse nichesite wint het vaak van een hoge-DR-link vanaf een willekeurig domein. Wij werken met getoetste uitgevers, contextuele in-body links en verticale afstemming via guest posting, digital PR en outreachcampagnes.",
      "Ons team in Rome werkt met SaaS-bedrijven, e-commerce merken, fintechs en gereguleerde sectoren die Italiaanse zichtbaarheid willen zonder shortcuts. Of u nu kopers in Milaan, landelijke zoekopdrachten of regionale queries in Campanië en Toscane target: redactionele kwaliteit wint het altijd van volume.",
    ],
    stats: [
      { value: "650+", label: "Italiaanse uitgevers getoetst" },
      { value: "100%", label: "Alleen white-hat plaatsingen" },
      { value: "+38%", label: "Gem. gerapporteerde rankingstijging" },
      { value: "95%+", label: "Google-aandeel in Italië" },
    ],
  },
  ranking: {
    eyebrow: "Italiaanse linkbuilding",
    title: "Italiaanse linkbuilding die rankings écht in beweging zet",
    paragraphs: [
      "Italiaanse linkbuilding is geen Engelstalige campagne met vertaalde pitches. Redacteuren in Italië verwachten native copy, inhoudelijke meerwaarde en fatsoenlijke redactionele standaarden. Koude outreach in het Engels scoort zelden; native Italiaanse outreach naar relevante uitgevers levert merkbare hogere respons op.",
      "Wij analyseren de backlinkprofielen van concurrenten en bouwen daarna plaatsingen via gastartikelen, digital PR en outreach naar getoetste Italiaanse uitgevers in uw vakgebied. Elk domein wordt handmatig beoordeeld voordat het in een campagne komt. U ontvangt live URL’s, screenshots en maandelijkse rapportage, zodat u altijd weet wat is opgeleverd.",
      "Merken die Italië als afvinkmarkt behandelen, verspillen budget aan irrelevante plaatsingen. Wij brengen regionale uitgevers, vakpers en nieuwscycli in kaart die generieke tools missen. Die diepgang scheidt duurzame groei van een linkrapport dat indrukwekkend oogt, maar niets verandert in Search Console.",
    ],
    processTitle: "Ons proces voor Italiaanse linkbuilding",
    steps: [
      {
        label: "Gap-analyse van concurrenten",
        desc: "Breng Italiaanse referring domains in kaart die rivalen al hebben",
      },
      {
        label: "Toetsing van uitgevers",
        desc: "Verkeerskwaliteit, DR en handmatige redactionele review",
      },
      {
        label: "Native Italiaanse content",
        desc: "Artikelen geschreven voor echte Italiaanse lezers",
      },
      {
        label: "Contextuele plaatsing",
        desc: "In-body links op geïndexeerde redactionele pagina’s",
      },
      {
        label: "Maandelijkse rapportage",
        desc: "Live URL’s, indexatiechecks en ankerverdeling",
      },
    ],
  },
  backlinks: {
    title: "Authority-backlinks voor de Italiaanse markt",
    subtitle:
      "Verschillende doelen vragen om verschillende tactieken. Wij combineren redactionele linkbuilding, digital PR en outreach, zodat uw backlinkprofiel groeit op een manier die zoekmachines én Italiaanse lezers vertrouwen.",
    learnMore: "Meer informatie",
    types: [
      {
        title: "Guest posting",
        stat: "Nieuwe pagina’s",
        desc: "Nieuwe redactionele artikelen op Italiaanse nichesites met contextuele in-body links.",
        href: "/services/guest-posting-italy",
      },
      {
        title: "Digital PR",
        stat: "Mediacoverage",
        desc: "Datastudies en nieuwshoeken, gepitcht aan Italiaanse journalisten en vakpers.",
        href: "/services/digital-pr-italy",
      },
      {
        title: "SEO-outreach",
        stat: "Schaalbaar sourcen",
        desc: "Toegewijde teams die elke maand nieuwe Italiaanse uitgevers vinden en benaderen.",
        href: "/services/seo-outreach-italy",
      },
    ],
  },
  whyUs: {
    title: "Waarom merken voor ons team in Rome kiezen",
    items: [
      "Native Italiaanse outreachmanagers die de uitgeverscultuur kennen",
      "Handmatige toetsing van elk domein vóórdat outreach start",
      "Campagnes afgestemd op uw ankertekst en compliance-eisen",
      "Transparante rapportage met live URL’s en indexatiestatus",
      "Ervaring in YMYL-sectoren, waaronder fintech en healthcare",
      "Naadloze samenwerking met uw SEO-bureau of intern team",
    ],
    storyLink: "Lees ons verhaal vanaf Via Roma 22, Rome",
    storyHref: "/about",
  },
  services: {
    eyebrow: "Onze diensten",
    title: "Italiaanse linkbuilding-diensten",
    subtitle:
      "Redactionele plaatsingen, digital PR en outreachcampagnes, ontworpen voor de Italiaanse zoekmarkt.",
    explore: "Bekijk dienst",
    items: {
      "guest-posting": {
        title: "Guest posting in Italië",
        shortDesc:
          "Verdien contextuele backlinks op echte Italiaanse publicaties via deskundige gastartikelen en contributor-plaatsingen.",
      },
      "digital-pr": {
        title: "Digital PR Italië",
        shortDesc:
          "Zet data, onderzoek en verhalen om in Italiaanse mediacoverage en high-authority links die journalisten zelf citeren.",
      },
      "editorial-links": {
        title: "Redactionele linkbuilding",
        shortDesc:
          "Verdien follow-links van Italiaanse redacteuren via resourcepagina’s, round-ups en citaties die inhoudelijk standhouden.",
      },
      "seo-outreach": {
        title: "SEO-outreach Italië",
        shortDesc:
          "Strategische Italiaanse outreach voor backlinks, partnerships en uitgeversrelaties die organische groei langdurig ondersteunen.",
      },
    },
  },
  caseStudies: {
    eyebrow: "Cases",
    title: "Resultaten op de Italiaanse markt",
    viewAll: "Alle cases bekijken",
    viewAllHref: "/case-studies",
    items: {
      "cloudledger-saas": {
        industry: "SaaS",
        title: "CloudLedger laat Italiaanse demo-aanvragen groeien via techmedia-links",
        excerpt:
          "Een B2B-boekhoud-SaaS had autoriteit nodig in een drukke Italiaanse markt. Redactionele plaatsingen en gastbijdragen op tech- en financemedia tilde organische demo’s met 94%.",
      },
      "payflow-fintech": {
        industry: "Fintech",
        title: "PayFlow Italia bouwt compliant fintech-autoriteit",
        excerpt:
          "Een payments-startup had backlinks nodig die compliance kon goedkeuren. Plaatsingen op financemedia en zorgvuldige guest posts lieten non-branded organische leads met 76% groeien.",
      },
      "modaverde-ecommerce": {
        industry: "E-commerce",
        title: "ModaVerde schaalt organische omzet in Italiaanse mode-e-commerce",
        excerpt:
          "Een duurzame modestore gebruikte redactionele round-ups en digital PR om op categorietermen te concurreren met gevestigde merken en de organische omzet met 63% te laten groeien.",
      },
    },
  },
  testimonials: {
    title: "Wat opdrachtgevers zeggen",
    items: [
      {
        quote:
          "Generieke outreachtools leverden in Italië vrijwel niets op. Dit team begreep welke uitgevers ertoe doen in fintech en leverde plaatsingen op sites die onze compliance-afdeling daadwerkelijk kon goedkeuren.",
        name: "Elena Marchetti",
        role: "Head of Growth, PayFlow Italia",
      },
      {
        quote:
          "Zij pitchten onze traveldata naar regionale titels die we zelf nooit hadden bereikt. Het organische verkeer uit Italiaanse zoekopdrachten steeg gestaag in zes maanden, zonder dat wij elke plaatsing hoefden na te jagen.",
        name: "Marco Bianchi",
        role: "Marketing Director, Viaggi del Sud",
      },
      {
        quote:
          "Heldere rapportage, realistische doorlooptijden en links die écht op de pagina thuishoren. Dat is zeldzaam in deze markt. We hebben verlengd voor een tweede jaar en digital PR erbij genomen.",
        name: "Sofia Ricci",
        role: "SEO Lead, ModaVerde Ecommerce",
      },
      {
        quote:
          "Als B2B-SaaS die Italië binnenkwam, hadden we snel autoriteitssignalen nodig. Gastartikelen en redactionele vermeldingen in Italiaanse techmedia gaven ons geloofwaardigheid die zich vertaalde in demo-aanvragen, niet alleen in rankings.",
        name: "Luca Ferretti",
        role: "VP Marketing, CloudLedger",
      },
    ],
  },
  faq: {
    title: "Veelgestelde vragen",
    items: [
      {
        question: "Wat maakt Italiaanse linkbuilding anders dan andere markten?",
        answer:
          "Italië heeft een eigen medialandschap: sterke regionale titels, gevestigde krantenmerken en een voorkeur voor redactionele geloofwaardigheid boven volume. Italiaanse redacteuren reageren op goed onderbouwde pitches in hun taal, met data en verhalen die in de lokale nieuwscyclus passen. Wij bouwen campagnes rond die verwachtingen, in plaats van een generiek Engelstalig outreachtemplate te vertalen.",
      },
      {
        question: "Hoe lang duurt het voordat we resultaat zien van een campagne?",
        answer:
          "De meeste opdrachtgevers zien de eerste live plaatsingen binnen vier tot zes weken. Echte beweging in referring domains en organische zichtbaarheid bouwt doorgaans op over drie tot zes maanden, naarmate links worden geïndexeerd en autoriteit zich opstapelt. U ontvangt vanaf dag één een maandelijks rapport, zodat u de voortgang tegen afgesproken KPI’s kunt volgen.",
      },
      {
        question: "Werken jullie met internationale merken die Italië willen bereiken?",
        answer:
          "Ja. Veel van onze opdrachtgevers zitten buiten Italië, maar hebben Italiaanstalige zichtbaarheid nodig voor lokale zoekopdrachten, hreflang-structuren of marktuitbreiding. Wij verzorgen de Italiaanse outreach, contentadaptatie en uitgeversrelaties, en stemmen af met uw interne SEO-team of bureau.",
      },
      {
        question: "In welke sectoren zijn jullie gespecialiseerd?",
        answer:
          "Wij werken onder meer in SaaS, fintech, e-commerce, travel, healthcare en manufacturing. YMYL-sectoren krijgen extra aandacht bij het toetsen van uitgevers en de ankertekststrategie. Outreachhoeken stemmen we af op wat redacteuren in die verticale écht publiceren, niet op wat er mooi uitziet in een linkrapport.",
      },
      {
        question: "Hoe toetsen jullie uitgevers voordat een link live gaat?",
        answer:
          "Elke site krijgt een handmatige review: redactionele standaarden, verkeerskwaliteit, indexatiegezondheid en thematische relevantie. PBN’s, expired-domainnetwerken en sites met een duidelijk betaald-linkprofiel sluiten we uit. Waar uw workflow dat vereist, ontvangt u plaatsings-URL’s met context voordat iets live gaat.",
      },
      {
        question: "Kan linkbuilding naast ons bestaande SEO-bureau werken?",
        answer:
          "Absoluut. Wij opereren vaak als specialistische outreachpartner, terwijl een ander bureau technische SEO, contentstrategie of paid media doet. We stemmen landingspagina’s, ankerrichtlijnen en rapportageformats af, zodat uw totale SEO-programma coherent blijft.",
      },
    ],
  },
  cta: {
    title: "Klaar om te groeien in de Italiaanse markt?",
    description:
      "Plan een strategiesessie met ons team in Rome. We bekijken uw backlinkprofiel, de gaten ten opzichte van concurrenten en stellen een campagne voor die bij uw vakgebied past.",
    button: "Plan een strategiesessie",
    href: "/contact",
  },
};

export const ES_HOME: LocalizedHomeContent = {
  locale: "es",
  htmlLang: "es",
  inLanguage: "es-ES",
  seo: {
    title: "Linkbuilding italia",
    description:
      "Linkbuilding italia para marcas que buscan autoridad en el mercado de búsqueda italiano. Enlaces editoriales, outreach nativo y campañas white-hat desde Roma.",
    path: "/es",
    ogLocale: "es_ES",
  },
  hero: {
    h1: "Linkbuilding italia",
    subtitle:
      "Consiga backlinks italianos de autoridad que mueven rankings en Italia. Ayudamos a responsables de SEO, equipos de marketing y marcas internacionales a ganar menciones editoriales en medios italianos de confianza.",
    ctaPrimary: "Reservar una llamada",
    ctaPrimaryHref: "/contact",
    ctaSecondary: "Ver servicios",
    ctaSecondaryHref: "/services",
    badges: ["Solo white-hat", "Más de 650 editores italianos", "Outreach nativo en italiano"],
    pill: "Agencia especialista en linkbuilding italiano · Roma",
    imageAlt: "Equipo de Linkbuilding italia en nuestra oficina de Roma, Via Roma",
    rankingLabel: "Subida media de ranking",
    rankingValue: "+38%",
  },
  meaning: {
    eyebrow: "Linkbuilding italia",
    title: "Qué significa Linkbuilding italia para su marca",
    paragraphs: [
      "Linkbuilding italia es ganar backlinks editoriales en sitios italianos de confianza para crecer en uno de los mercados de búsqueda más competitivos de Europa. Para una marca internacional que entra en Italia, eso importa. Los buscadores ponderan los dominios de referencia, la relevancia temática y lo natural que resulta el perfil de enlaces al posicionar keywords italianas competitivas.",
      "Hace falta outreach nativo, relaciones reales con editores y menciones que encajen en su sector. Un enlace relevante en un medio italiano de nicho suele valer más que un enlace de DR alto en un dominio ajeno a su temática. Trabajamos con editores vetados, enlaces contextuales en el cuerpo del artículo y alineación vertical a través de guest posting, digital PR y campañas de outreach.",
      "Nuestro equipo en Roma trabaja con compañías SaaS, marcas de ecommerce, fintechs e industrias reguladas que necesitan visibilidad italiana sin atajos. Tanto si apunta a compradores en Milán, a búsquedas nacionales o a consultas regionales en Campania y Toscana, el principio es el mismo: la calidad editorial gana siempre al volumen.",
    ],
    stats: [
      { value: "650+", label: "Editores italianos vetados" },
      { value: "100%", label: "Solo menciones white-hat" },
      { value: "+38%", label: "Subida media de ranking reportada" },
      { value: "95%+", label: "Cuota de Google en Italia" },
    ],
  },
  ranking: {
    eyebrow: "Linkbuilding italiano",
    title: "Linkbuilding italiano que sí mueve rankings",
    paragraphs: [
      "El linkbuilding italiano no es una campaña en inglés con pitches traducidos. Los editores en Italia esperan copy nativo, contenido útil y un estándar editorial real. El outreach en frío en inglés rara vez funciona; el outreach nativo en italiano a medios relevantes obtiene tasas de respuesta claramente superiores.",
      "Analizamos los perfiles de backlinks de la competencia y construimos menciones mediante guest posts, digital PR y outreach a editores italianos vetados de su vertical. Cada dominio se revisa a mano antes de entrar en campaña. Recibe URLs en vivo, capturas y reporting mensual para saber exactamente qué se ha entregado.",
      "Las marcas que tratan Italia como un mercado de checklist suelen gastar presupuesto en menciones irrelevantes. Mapeamos editores regionales, prensa especializada y ciclos informativos que las herramientas genéricas no ven. Esa profundidad es lo que separa un crecimiento sostenible de un informe de enlaces que impresiona y no cambia nada en Search Console.",
    ],
    processTitle: "Nuestro proceso de linkbuilding italiano",
    steps: [
      {
        label: "Análisis de huecos frente a competidores",
        desc: "Mapeamos los dominios de referencia italianos que ya tienen sus rivales",
      },
      {
        label: "Vetting de editores",
        desc: "Calidad de tráfico, DR y revisión editorial manual",
      },
      {
        label: "Contenido nativo en italiano",
        desc: "Artículos escritos para audiencias italianas reales",
      },
      {
        label: "Colocación contextual",
        desc: "Enlaces en el cuerpo de páginas editoriales indexadas",
      },
      {
        label: "Reporting mensual",
        desc: "URLs en vivo, control de indexación y distribución de anchors",
      },
    ],
  },
  backlinks: {
    title: "Backlinks de autoridad para el mercado italiano",
    subtitle:
      "Cada objetivo pide una táctica distinta. Combinamos linkbuilding editorial, digital PR y outreach para que su perfil de enlaces crezca de un modo que buscadores y lectores italianos puedan confiar.",
    learnMore: "Saber más",
    types: [
      {
        title: "Guest posting",
        stat: "Páginas nuevas",
        desc: "Artículos editoriales nuevos en sitios italianos de nicho, con enlaces contextuales en el cuerpo del texto.",
        href: "/services/guest-posting-italy",
      },
      {
        title: "Digital PR",
        stat: "Cobertura mediática",
        desc: "Estudios de datos y ángulos noticiables pitchados a periodistas italianos y prensa especializada.",
        href: "/services/digital-pr-italy",
      },
      {
        title: "SEO outreach",
        stat: "Captación a escala",
        desc: "Equipos dedicados que cada mes encuentran y contactan nuevos editores italianos.",
        href: "/services/seo-outreach-italy",
      },
    ],
  },
  whyUs: {
    title: "Por qué las marcas eligen a nuestro equipo en Roma",
    items: [
      "Managers de outreach nativos en italiano que entienden la cultura editorial",
      "Vetting manual de cada dominio antes de empezar el outreach",
      "Campañas alineadas con su anchor text y requisitos de compliance",
      "Reporting transparente con URLs en vivo y estado de indexación",
      "Experiencia en sectores YMYL, incluidos fintech y salud",
      "Integración con su agencia SEO o con el equipo interno",
    ],
    storyLink: "Lee nuestra historia desde Via Roma 22, Roma",
    storyHref: "/about",
  },
  services: {
    eyebrow: "Nuestros servicios",
    title: "Servicios de linkbuilding italiano",
    subtitle:
      "Menciones editoriales, digital PR y campañas de outreach pensadas para el mercado de búsqueda italiano.",
    explore: "Ver servicio",
    items: {
      "guest-posting": {
        title: "Guest posting en Italia",
        shortDesc:
          "Obtenga backlinks contextuales en publicaciones italianas reales mediante artículos de invitado y colaboraciones editoriales.",
      },
      "digital-pr": {
        title: "Digital PR Italia",
        shortDesc:
          "Convierta datos, investigación e historias en cobertura mediática italiana y enlaces de autoridad que los periodistas eligen citar.",
      },
      "editorial-links": {
        title: "Linkbuilding editorial",
        shortDesc:
          "Consiga enlaces follow de editores italianos a través de páginas de recursos, roundups y citas que aportan valor real.",
      },
      "seo-outreach": {
        title: "SEO outreach Italia",
        shortDesc:
          "Outreach estratégico en Italia para backlinks, partnerships y relaciones con editores que sostienen el crecimiento orgánico a largo plazo.",
      },
    },
  },
  caseStudies: {
    eyebrow: "Casos de éxito",
    title: "Resultados en el mercado italiano",
    viewAll: "Ver todos los casos",
    viewAllHref: "/case-studies",
    items: {
      "cloudledger-saas": {
        industry: "SaaS",
        title: "CloudLedger aumenta las demos italianas con enlaces en medios tech",
        excerpt:
          "Una SaaS B2B de contabilidad necesitaba autoridad en un mercado italiano saturado. Las menciones editoriales y los guest posts en medios tech y financieros elevaron las demos orgánicas un 94%.",
      },
      "payflow-fintech": {
        industry: "Fintech",
        title: "PayFlow Italia construye autoridad fintech compatible con compliance",
        excerpt:
          "Una startup de pagos necesitaba backlinks que compliance pudiera aprobar. Las menciones en medios financieros y un guest posting cuidadoso hicieron crecer un 76% los leads orgánicos no de marca.",
      },
      "modaverde-ecommerce": {
        industry: "Ecommerce",
        title: "ModaVerde escala el ingreso orgánico de su ecommerce de moda en Italia",
        excerpt:
          "Un retailer de moda sostenible usó roundups editoriales y digital PR para competir con marcas consolidadas en términos de categoría y crecer un 63% en ingreso orgánico.",
      },
    },
  },
  testimonials: {
    title: "Lo que dicen nuestros clientes",
    items: [
      {
        quote:
          "Habíamos probado herramientas de outreach genéricas con poco resultado en Italia. Entendieron qué medios importaban en fintech y consiguieron menciones en sitios que nuestro equipo de compliance podía aprobar de verdad.",
        name: "Elena Marchetti",
        role: "Head of Growth, PayFlow Italia",
      },
      {
        quote:
          "Pitcharon nuestros datos de viaje a medios regionales a los que nunca habríamos llegado solos. El tráfico orgánico de consultas italianas subió de forma constante en seis meses, sin que tuviéramos que perseguir cada mención.",
        name: "Marco Bianchi",
        role: "Marketing Director, Viaggi del Sud",
      },
      {
        quote:
          "Reporting claro, plazos realistas y enlaces que parecen pertenecer a la página. Eso es raro en este sector. Renovamos un segundo año y ampliamos a digital PR.",
        name: "Sofia Ricci",
        role: "SEO Lead, ModaVerde Ecommerce",
      },
      {
        quote:
          "Como SaaS B2B que entraba en Italia, necesitábamos señales de autoridad rápido. Los guest posts y las menciones editoriales en medios tech italianos nos dieron credibilidad que se tradujo en solicitudes de demo, no solo en rankings.",
        name: "Luca Ferretti",
        role: "VP Marketing, CloudLedger",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿En qué se diferencia el linkbuilding italiano de otros mercados?",
        answer:
          "Italia tiene un ecosistema mediático propio: editores regionales, marcas de prensa consolidadas y una preferencia por la credibilidad editorial frente al volumen. Los editores italianos responden a pitches bien documentados en su idioma, con datos e historias que encajan en el ciclo informativo local. Diseñamos las campañas alrededor de esas expectativas, no a partir de una plantilla de outreach en inglés.",
      },
      {
        question: "¿Cuánto tarda en verse resultado una campaña de linkbuilding?",
        answer:
          "La mayoría de los clientes ve las primeras menciones en vivo en cuatro a seis semanas. El movimiento relevante en dominios de referencia y visibilidad orgánica suele consolidarse entre tres y seis meses, a medida que los enlaces se indexan y la autoridad se acumula. Compartimos un informe mensual desde el primer día para seguir el progreso frente a los KPI acordados.",
      },
      {
        question: "¿Trabajan con marcas internacionales que quieren entrar en Italia?",
        answer:
          "Sí. Muchos de nuestros clientes tienen sede fuera de Italia, pero necesitan visibilidad en italiano para búsquedas locales, estructuras hreflang o expansión de mercado. Nos ocupamos del outreach italiano, la adaptación de contenido y las relaciones con editores, coordinándonos con su equipo SEO interno o con su agencia.",
      },
      {
        question: "¿En qué sectores están especializados?",
        answer:
          "Trabajamos en SaaS, fintech, ecommerce, travel, salud y manufacturing. Los sectores YMYL reciben un escrutinio extra en el vetting de editores y en la estrategia de anchor text. Los ángulos de outreach se adaptan a lo que los editores de cada vertical cubren de verdad, no a lo que queda bien en un informe de enlaces.",
      },
      {
        question: "¿Cómo vetan a los editores antes de colocar un enlace?",
        answer:
          "Cada sitio pasa una revisión manual de estándares editoriales, calidad de tráfico, salud de indexación y relevancia temática. Excluimos PBN, redes de dominios caducados y sitios con huella evidente de enlaces de pago. Si su flujo de trabajo lo requiere, recibe las URLs de publicación con notas de contexto antes de que nada salga en vivo.",
      },
      {
        question: "¿El linkbuilding puede convivir con nuestra agencia SEO actual?",
        answer:
          "Por supuesto. A menudo actuamos como partner especialista de outreach mientras otra agencia se encarga del SEO técnico, la estrategia de contenidos o el paid media. Alineamos páginas objetivo, directrices de anchors y formatos de reporting para que el programa SEO global siga siendo coherente.",
      },
    ],
  },
  cta: {
    title: "¿Listo para crecer en el mercado italiano?",
    description:
      "Reserve una llamada de estrategia con nuestro equipo en Roma. Revisaremos su perfil de backlinks, los huecos frente a competidores y le propondremos una campaña a medida de su vertical.",
    button: "Reservar una llamada de estrategia",
    href: "/contact",
  },
};

export const LOCALIZED_HOMES = {
  nl: NL_HOME,
  es: ES_HOME,
} as const;
