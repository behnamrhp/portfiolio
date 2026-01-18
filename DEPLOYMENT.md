# Deployment Guide

This guide explains how to deploy the portfolio to GitHub Pages.

## Prerequisites

- GitHub repository
- Node.js 18+ installed locally
- pnpm package manager
- GitHub account with Pages enabled

## GitHub Pages Setup

### 1. Configure Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Add Environment Variables

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add the following secrets:
   - **Name**: `VITE_ARTICLE_API`
   - **Value**: Your backend proxy URL (e.g., `https://backend-proxy.com`)
   
4. Add another secret:
   - **Name**: `VITE_CV_URL`
   - **Value**: URL to your CV/resume (e.g., `https://example.com/cv.pdf`)

These environment variables are required for the build to complete successfully.

### 3. Configure Base Path

The `vite.config.ts` is configured to automatically use the correct base path:

- **For GitHub Pages** (https://username.github.io/portfiolio/): Uses `/portfiolio/`
- **For custom domain**: Change `base` in `vite.config.ts` to `'/'`

To change the repository name, update this line in `vite.config.ts`:
```typescript
base: process.env.GITHUB_PAGES ? '/your-repo-name/' : '/',
```

### 4. Deploy

The site will automatically deploy when you push to the `main` branch.

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### 5. Access Your Site

After deployment completes (2-3 minutes), your site will be available at:
```
https://behnamrhp.github.io/portfiolio/
```

## Manual Deployment

If you want to deploy manually:

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# The static files will be in the `dist/` directory
# You can deploy these to any static hosting service
```

## Local Testing

Test the build locally before deploying:

```bash
# Build the project
pnpm build

# Preview the production build
pnpm preview

# Open http://localhost:4173
```

## Troubleshooting

### Build Fails

1. **Check dependencies**: Run `pnpm install` to ensure all dependencies are installed
2. **Check Node version**: Ensure you're using Node.js 18 or higher
3. **Check pnpm**: Install pnpm globally with `npm install -g pnpm`
4. **Check TypeScript**: Run `pnpm build` locally to see TypeScript errors

### Pages Not Working

1. **Check GitHub Pages settings**: Ensure source is set to "GitHub Actions"
2. **Check workflow run**: Go to Actions tab and verify the workflow completed successfully
3. **Wait a few minutes**: GitHub Pages can take 2-3 minutes to update
4. **Check base path**: Verify the `base` setting in `vite.config.ts` matches your deployment URL

### Images Not Loading

1. **Check image paths**: Ensure all images are in the `public/` directory
2. **Check base path**: Images should use absolute paths starting with `/`
3. **Test locally**: Run `pnpm build && pnpm preview` to test production build

### Routes Not Working

1. **Check vite.config.ts**: Verify `base` is set correctly
2. **Test locally**: Run `pnpm build && pnpm preview` to test
3. **SPA routing**: GitHub Pages serves static files, so client-side routing works automatically with Vite

### Blank Page After Deployment

1. **Check base path**: Most common issue - verify `base` in `vite.config.ts`
2. **Check console**: Open browser DevTools and check for 404 errors
3. **Check Actions log**: View the GitHub Actions workflow for build errors

## Configuration Files

### vite.config.ts
Configured for GitHub Pages:
- `base: process.env.GITHUB_PAGES ? '/portfiolio/' : '/'` - Correct paths for GitHub Pages
- `build.outDir: 'dist'` - Output directory for static files
- `build.assetsDir: 'assets'` - Assets directory structure

### .github/workflows/deploy.yml
Automated deployment workflow:
- Triggers on push to `main` branch
- Uses pnpm for package management
- Builds with Vite
- Deploys to GitHub Pages
- Uses environment secrets

## Environment Variables

### Required GitHub Secrets
Set these in **Settings** → **Secrets and variables** → **Actions**:

- `VITE_ARTICLE_API`: Backend proxy API URL for fetching articles
  - Example: `https://backend-proxy.com`
  - Used at build time to configure the API endpoint

- `VITE_CV_URL`: URL to your CV/resume file
  - Example: `https://example.com/cv.pdf`
  - Can be left empty if not using CV download feature

### Automatic Variables
- `GITHUB_PAGES`: Automatically set to `true` in workflow for correct base path

### Update in Code
Update these in `src/input/constants.ts`:
- Personal information and links
- DEV_TO_USERNAME (if using dev.to articles)

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add CNAME record in your DNS:
   ```
   CNAME behnamrhp.github.io
   ```
4. Create `public/CNAME` file:
   ```
   yourdomain.com
   ```
5. Update `vite.config.ts`:
   ```typescript
   base: '/',  // Change from '/portfiolio/' to '/'
   ```

## Updating the Site

To update your portfolio:

1. Make changes locally
2. Test with `pnpm dev`
3. Build and test production: `pnpm build && pnpm preview`
4. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
5. GitHub Actions will automatically rebuild and deploy

## Monitoring

### Check Deployment Status
1. Go to **Actions** tab in your repository
2. View the latest workflow run
3. Check build and deploy logs

### View Site Analytics (if enabled)
1. Go to **Insights** → **Traffic**
2. View page views and visitor stats

## Performance

The site is optimized for performance:
- ✅ Vite production build (optimized and minified)
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Fast page loads
- ✅ Lazy loading for articles

Expected Lighthouse scores:
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Deployment**: GitHub Pages via GitHub Actions

## Support

If you encounter issues:
1. Check GitHub Actions logs in the Actions tab
2. Test build locally with `pnpm build`
3. Verify all configurations in `vite.config.ts`
4. Check GitHub Pages status: https://www.githubstatus.com/
5. Review browser console for errors

## Common Commands

```bash
# Development
pnpm dev              # Start dev server

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Linting
pnpm lint             # Run ESLint

# Dependencies
pnpm install          # Install dependencies
pnpm add <package>    # Add new package
```

---

**Your portfolio is now ready to deploy!** 🚀
