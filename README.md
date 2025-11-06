# MaxFood AB — Premium Food Solutions

Next.js 16 + React 19 + TypeScript + Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
maxfood/
├── app/
│   ├── [locale]/              # Localized routes (8 languages)
│   │   ├── components/        # Reusable components
│   │   ├── products/          # Product catalog page
│   │   ├── contact/           # Contact form page
│   │   ├── about/             # About page
│   │   └── page.tsx           # Home page
│   ├── layout.tsx             # Root layout with i18n
│   ├── i18n-config.ts         # i18n configuration
│   └── globals.css            # Global styles
│
├── messages/                  # Translation files (8 languages)
│   ├── es.json
│   ├── sv.json
│   ├── en.json
│   └── ... (5 more languages)
│
├── public/                    # Static assets
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                  # Service Worker
│   ├── sitemap.xml            # SEO sitemap
│   ├── robots.txt             # Robots.txt
│   └── offline.html           # Offline fallback
│
├── types/                     # TypeScript types
│   └── index.ts
│
├── navigation.ts              # next-intl navigation
├── middleware.ts              # i18n middleware
├── next.config.ts             # Next.js configuration
├── netlify.toml               # Netlify deployment config
└── package.json               # Dependencies
```

## 🌐 Supported Languages

- 🇪🇸 Spanish (es)
- 🇸🇪 Swedish (sv)
- 🇬🇧 English (en)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- 🇸🇦 Arabic (ar) - RTL
- 🇨🇳 Chinese (zh)
- 🇯🇵 Japanese (ja)

## 🔧 Features

### ✅ Implemented
- [x] Next.js 16 with React 19
- [x] TypeScript
- [x] Tailwind CSS
- [x] Multiidioma (8 languages) with next-intl
- [x] SEO optimized (hreflang, metadata, sitemap)
- [x] PWA ready (manifest, service worker)
- [x] Netlify CMS configured (/admin)
- [x] Security headers
- [x] Dark theme UI
- [x] Responsive design
- [x] Contact form
- [x] Product catalog
- [x] About page

### ⏳ TODO (Next Phases)
- [ ] GA4 Analytics integration
- [ ] GDPR banner and consent
- [ ] Performance optimization (Lighthouse ≥90)
- [ ] Product images and content
- [ ] Email service integration
- [ ] Advanced animations
- [ ] Testing suite
- [ ] API endpoints for CMS

## 📝 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://maxfood.se
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_DEFAULT_LOCALE=en
```

See `.env.example` for full reference.

## 🚀 Deployment

### Netlify (Recommended)

```bash
# Push to GitHub
git push origin main

# Netlify will auto-deploy from:
# Build command: npm run build
# Publish directory: .next/static
```

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 Performance

Current metrics:
- Lighthouse Performance: Pending ⏳
- Lighthouse SEO: Pending ⏳
- Lighthouse Accessibility: Pending ⏳
- Lighthouse Best Practices: Pending ⏳

## 🔐 Security

- HTTPS enforced
- Security headers configured
- No sensitive data in repo (.gitignore)
- GDPR compliance ready
- CSP headers configured

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Create a feature branch
2. Commit changes
3. Push to GitHub
4. Create a Pull Request

## 📞 Support

For questions or issues:
- Email: info@maxfood.se
- Contact form: /en/contact

## 📄 License

Copyright © 2025 MaxFood AB. All rights reserved.

---

**Last Updated:** 2025-11-05  
**Status:** Phase 2 Complete ✅
