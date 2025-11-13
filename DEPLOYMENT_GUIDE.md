# 🚀 MaxFood AB - Deployment Guide for Netlify

## ✅ Pre-Deployment Checklist

- [x] Next.js project configured
- [x] All 8 languages implemented (EN, ES, SV, FR, DE, AR, ZH, JA)
- [x] Multilingual routing configured with next-intl
- [x] PWA support (Service Worker, manifest.json)
- [x] Security headers configured
- [x] Performance optimized
- [x] netlify.toml configured
- [x] Build tested locally
- [x] All messages/translations added
- [x] middleware.ts configured for i18n
- [x] robots.txt and sitemap.xml ready

## 📋 What's Included

### Core Files
- ✅ `next.config.mjs` - Optimized Next.js configuration
- ✅ `netlify.toml` - Netlify deployment settings
- ✅ `middleware.ts` - i18n middleware for locale routing
- ✅ `package.json` - All dependencies configured
- ✅ `.gitignore` - Git configuration

### i18n Setup
- ✅ 8 message files in `/messages` (en.json, es.json, sv.json, fr.json, de.json, ar.json, zh.json, ja.json)
- ✅ `i18n/routing.ts` - Locale routing configuration
- ✅ `i18n/request.ts` - Request configuration for messages

### PWA & Offline
- ✅ `public/manifest.json` - PWA manifest with 8 languages
- ✅ `public/sw.js` - Service Worker for offline support
- ✅ `public/offline.html` - Offline fallback page
- ✅ Cache strategies configured

### Security & SEO
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ hreflang alternates for all languages
- ✅ Open Graph + Twitter Card tags
- ✅ robots.txt (auto-generated)
- ✅ sitemap.xml (auto-generated)

### Layout & Pages
- ✅ Root layout with metadata
- ✅ Main page component with hero section
- ✅ Language switcher navigation
- ✅ Dark premium theme with Tailwind CSS

## 🚀 Step-by-Step Deployment

### Method 1: GitHub + Netlify (RECOMMENDED)

#### 1. Initialize Git Repository

```bash
cd C:\Users\Johan Romberg\Desktop\MaxFood_Web\maxfood

git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

git init
git add .
git commit -m "Initial commit: MaxFood AB - Production ready"
```

#### 2. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create repository: `maxfood-ab`
3. Do NOT initialize with README (we have one)
4. Copy the commands provided

#### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/maxfood-ab.git
git branch -M main
git push -u origin main
```

#### 4. Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"New site from Git"**
3. Authorize GitHub
4. Select repository: `maxfood-ab`
5. Deployment settings should auto-fill:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next/standalone` (or `.next`)
   - **Node version:** 18.17.0 or higher
6. Click **"Deploy site"**

#### 5. Monitor Build

- Netlify will automatically build and deploy
- Check **"Deploys"** tab for build logs
- Site will be live at: `https://[random-name].netlify.app`

### Method 2: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Deploy (creates/updates project)
netlify deploy --prod --dir=.next

# Or build and deploy in one command
netlify deploy --prod --build
```

### Method 3: Drag & Drop (Manual)

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag `.next` folder onto the Netlify area
4. Site will deploy instantly

## ⚙️ Configuration Details

### Build Settings (Already Configured)

**Build Command:**
```
npm run build
```

**Publish Directory:**
```
.next/standalone  (or .next for static export)
```

**Environment Variables:**

Add in Netlify Dashboard → Site Settings → Build & Deploy → Environment:

```
NODE_VERSION=18.17.0
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (optional)
NEXT_PUBLIC_SITE_URL=https://your-domain.netlify.app
```

### Netlify Configuration (netlify.toml)

All settings are pre-configured:
- ✅ Build command
- ✅ Publish directory
- ✅ Redirects for SPA
- ✅ Security headers
- ✅ Cache control
- ✅ Content-Type headers

## 🔗 Post-Deployment Steps

### 1. Test Multilingual Routing

After deployment, test all languages:
- `https://your-site.netlify.app/en` ✅
- `https://your-site.netlify.app/es` ✅
- `https://your-site.netlify.app/sv` ✅
- `https://your-site.netlify.app/fr` ✅
- `https://your-site.netlify.app/de` ✅
- `https://your-site.netlify.app/ar` ✅ (RTL)
- `https://your-site.netlify.app/zh` ✅
- `https://your-site.netlify.app/ja` ✅

### 2. Test PWA Installation

- Open site in Chrome on Android/Desktop
- Look for "Install app" option
- PWA should be installable

### 3. Test SEO

Run Lighthouse audit:
```bash
# Or use Chrome DevTools
# Right-click → Inspect → Lighthouse tab
```

Target scores:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 4. Test Offline Mode

- Open site normally
- Go offline (DevTools → Network → Offline)
- Navigate around - should load from cache
- Try new pages - should show offline.html

### 5. Setup Custom Domain (Optional)

1. Netlify Dashboard → Domain settings
2. Add your domain
3. Update DNS records at your registrar
4. Wait for SSL certificate (auto-issued)

## 📊 Monitoring & Maintenance

### Netlify Dashboard

Monitor:
- **Deploys** - View build logs and status
- **Functions** - Monitor any serverless functions
- **Analytics** - Track site usage
- **Forms** - If you add forms later
- **DNS** - Manage domain

### Performance Monitoring

After deployment, check:
- [Google Lighthouse](https://web.dev/measure/)
- [WebPageTest](https://www.webpagetest.org/)
- [Netlify Analytics](https://docs.netlify.com/analytics/overview/)

## 🛠️ Troubleshooting

### Build Fails

Check build logs in Netlify Dashboard:

1. Go to **Deploys** tab
2. Click failing deploy
3. Click **"Deploy log"**
4. Look for error messages

Common issues:
- Missing environment variables
- Node version mismatch
- Missing dependencies

### Pages Not Loading

If pages show 404:

1. Check netlify.toml redirects
2. Ensure middleware.ts is present
3. Verify .next folder was generated

### Language Routes Not Working

1. Test locally: `npm run dev`
2. Check middleware.ts configuration
3. Verify i18n/routing.ts has all locales
4. Ensure messages/*.json files exist

### PWA Not Installing

1. Check manifest.json is valid
2. Verify site is HTTPS (Netlify provides this)
3. Check console for Service Worker errors
4. Test in Chrome/Chromium browser

## 📞 Support

### Netlify Support
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Support](https://support.netlify.com/)

### Next.js Support
- [Next.js Docs](https://nextjs.org/docs)
- [Next-intl Docs](https://next-intl-docs.vercel.app/)

## ✨ Next Steps After Deployment

1. **Add Content**
   - Create products in `/content/products`
   - Update translations in `/messages`

2. **Setup Analytics**
   - Create Google Analytics property
   - Add GA_ID to environment variables

3. **Setup Forms**
   - Use Netlify Forms for contact forms
   - Configure submissions

4. **Setup Email**
   - Configure Netlify Functions for emails
   - Or use third-party email service

5. **Monitor Performance**
   - Use Netlify Analytics
   - Monitor Core Web Vitals

## 🎉 You're Done!

Your MaxFood AB website is now ready for production and will auto-deploy whenever you push to GitHub!

---

**Last Updated:** 2025-11-08
**Version:** 1.0.0
**Status:** Ready for Production
**Languages:** 8 (EN, ES, SV, FR, DE, AR, ZH, JA)
**Framework:** Next.js 14 + React 18 + TypeScript
