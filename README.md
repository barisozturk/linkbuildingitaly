# Link Building Italy

Production-ready Next.js website for [link-building-italy.com](https://link-building-italy.com), a specialist Italian link building agency based in Rome.

## Tech Stack

- **Next.js 16** (App Router, Static Site Generation)
- **React 19** with TypeScript
- **Tailwind CSS 4**
- **Lucide React** icons
- Deployed on **Netlify** via `@netlify/plugin-nextjs`

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # App Router pages and routes
│   ├── page.tsx          # Homepage (targets Link Building Italy keywords)
│   ├── about/
│   ├── blog/
│   ├── case-studies/
│   ├── contact/
│   ├── services/
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # Robots.txt
├── components/           # Reusable UI, SEO, charts
├── data/                 # Content (services, blog, case studies)
├── lib/                  # Metadata, schema, utilities
└── types/                # TypeScript interfaces
public/
└── logo.png              # Site logo
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Primary SEO target: Link Building Italy |
| Services | `/services/*` | 4 service pages (1000+ words each) |
| Case Studies | `/case-studies/*` | 6 case studies with charts and metrics |
| Blog | `/blog/*` | 12 SEO articles (800+ words each) |
| About | `/about` | Agency story and team |
| Contact | `/contact` | Contact form and Rome office details |

## SEO Features

- Auto-generated `sitemap.xml` and `robots.txt`
- Canonical URLs and Open Graph tags on every page
- Twitter Card metadata
- JSON-LD schema: Organization, LocalBusiness, Article, FAQ
- Internal linking between services, blog and case studies
- Next.js Image optimization for remote Unsplash assets

## Deployment (Netlify)

1. Push this repository to GitHub
2. Connect the repo in Netlify
3. Netlify auto-detects Next.js via `netlify.toml`
4. Set environment variable if needed: none required for static content
5. Point custom domain `link-building-italy.com` to Netlify DNS

Build command: `npm run build`  
Plugin: `@netlify/plugin-nextjs`

## Logo

Replace `public/logo.png` with your brand logo. The file is used in the header, footer and Open Graph metadata.

## Contact

**Link Building Italy**  
Via Roma 22, 5th Floor, 00184 Rome, Italy  
Email: fabi@site-media.co.uk

Part of [Intseo Media](https://internationalseo.agency).
