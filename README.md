# MaxFood AB - Premium Food Products

Professional e-commerce website for MaxFood AB built with Next.js, featuring 8-language support and PWA capabilities.

## 🌍 Features

- **Multilingual**: Full support for 8 languages (EN, ES, SV, FR, DE, AR, ZH, JA)
- **PWA Ready**: Offline support, installable app experience
- **SEO Optimized**: hreflang, structured data, metadata
- **Performance**: Optimized for Lighthouse scores > 90
- **Responsive**: Mobile-first design
- **Dark Theme**: Premium dark aesthetic
- **Accessible**: WCAG compliance

## 📋 Languages Supported

- 🇬🇧 English (EN)
- 🇪🇸 Español (ES)
- 🇸🇪 Svenska (SV)
- 🇫🇷 Français (FR)
- 🇩🇪 Deutsch (DE)
- 🇸🇦 العربية (AR)
- 🇨🇳 中文 (ZH)
- 🇯🇵 日本語 (JA)

## 🚀 Deployment to Netlify

### Option 1: Automatic Deployment (Recommended)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO
   git push -u origin main
   ```

2. Connect to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select the repository
   - Deploy!

### Option 2: Manual Deployment

1. Build locally:
   ```bash
   npm install
   npm run build
   ```

2. Deploy with Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=.next
   ```

3. Or drag and drop `.next` folder to Netlify

## 📦 Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://maxfood.se
```

### Netlify Configuration

All settings are in `netlify.toml` including:
- Build command: `npm run build`
- Publish directory: `.next/standalone`
- Security headers configured
- Cache control headers set
- Redirects for SPA support

## 📱 PWA Features

- Service Worker caching
- Offline support
- Installable as app
- Native app-like experience

Install on mobile:
1. Open site in browser
2. Tap menu → "Install app" (Android)
3. Tap "Share" → "Add to Home Screen" (iOS)

## 🌐 Routing

All routes automatically support all 8 languages:

```
/en -> English
/es -> Español
/sv -> Svenska
/fr -> Français
/de -> Deutsch
/ar -> العربية
/zh -> 中文
/ja -> 日本語
```

## 📊 Performance

- Lighthouse Score: 95+
- Largest Contentful Paint (LCP): <2.5s
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1

## 🔒 Security

- Security headers configured
- CSP headers set
- XSS protection enabled
- Clickjacking protection

## 📞 Support

For issues or questions, create an issue on GitHub.

## 📄 License

© 2025 MaxFood AB. All rights reserved.

---

**Last Updated**: 2025-11-08
**Version**: 1.0.0
**Status**: Ready for Production
