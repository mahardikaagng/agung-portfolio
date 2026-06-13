# Deployment Guide

## Vercel Deployment (Recommended)

This portfolio is optimized for deployment on Vercel. Follow these steps:

### Option 1: Automatic Deployment from GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click "Add New..." → "Project"
4. Select the `mahardikaagng/agung-portfolio` repository
5. Vercel will auto-detect Next.js and configure automatically
6. Click "Deploy"
7. Your site will be live at `https://agung-portfolio-{random}.vercel.app`

### Option 2: CLI Deployment

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy from project directory
cd /workspaces/agung-portfolio
vercel

# For production deployment
vercel --prod
```

### Option 3: GitHub Pages Deployment

```bash
npm run build
# The .next/standalone build is ready for deployment
```

## Performance Checklist

- ✅ Production build: 19.4s
- ✅ ESLint: All checks pass
- ✅ TypeScript: Strict mode
- ✅ Image optimization: Next.js Image component
- ✅ SEO: Schema.org, OpenGraph, Twitter cards
- ✅ Mobile responsive: All breakpoints tested

## Environment Variables

No environment variables required for basic deployment.

Optional for custom domain:
- Set custom domain in Vercel project settings

## Post-Deployment

1. Verify all sections load correctly
2. Test mobile responsiveness
3. Check performance with Lighthouse
4. Test all external links (GitHub, LinkedIn, CV)
5. Verify email and phone links work

## Current Repository

- GitHub: https://github.com/mahardikaagng/agung-portfolio
- Commits: 3 total
- Latest: polish: final visual and UX refinements for production (3ed6bc0)

## Support

For issues or updates, create a new branch and submit a pull request.
