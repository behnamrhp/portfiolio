# Deployment Guide

This guide explains how to deploy the portfolio to GitHub Pages.

## Prerequisites

- GitHub repository
- Node.js 18+ installed locally
- GitHub account with Pages enabled

## GitHub Pages Setup

### 1. Configure Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Add Environment Variables

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add the following secret:
   - **Name**: `ARTICLE_API_KEY`
   - **Value**: Your dev.to API key (get it from https://dev.to/settings/extensions)

### 3. Deploy

The site will automatically deploy when you push to the `main` branch.

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### 4. Access Your Site

After deployment completes (2-3 minutes), your site will be available at:
```
https://<your-username>.github.io/<repository-name>/
```

## Manual Deployment

If you want to deploy manually:

```bash
# Build the project
npm run build

# The static files will be in the `out/` directory
# You can deploy these to any static hosting service
```

## Local Testing

Test the build locally before deploying:

```bash
# Build the project
npm run build

# Serve the static files
npx serve out

# Open http://localhost:3000
```

## Troubleshooting

### Build Fails

1. **Check dependencies**: Run `npm install` to ensure all dependencies are installed
2. **Check Node version**: Ensure you're using Node.js 18 or higher
3. **Check environment variables**: Verify ARTICLE_API_KEY is set in GitHub Secrets

### Pages Not Working

1. **Check GitHub Pages settings**: Ensure source is set to "GitHub Actions"
2. **Check workflow run**: Go to Actions tab and verify the workflow completed successfully
3. **Wait a few minutes**: GitHub Pages can take 2-3 minutes to update

### Images Not Loading

1. **Check image paths**: Ensure all images are in the `public/` directory
2. **Check Next.js config**: Verify `unoptimized: true` in `next.config.js`

### Routes Not Working

1. **Check next.config.js**: Verify `output: 'export'` and `trailingSlash: true`
2. **Test locally**: Run `npm run build` and `npx serve out` to test

## Configuration Files

### next.config.js
Already configured for GitHub Pages:
- `output: 'export'` - Static export
- `images.unoptimized: true` - Images work without Next.js server
- `trailingSlash: true` - URLs work with GitHub Pages

### .github/workflows/deploy.yml
Automated deployment workflow:
- Triggers on push to `main` branch
- Builds the project
- Deploys to GitHub Pages
- Uses environment secrets

## Environment Variables

### Required
- `NEXT_PUBLIC_ARTICLE_API_KEY`: dev.to API key for fetching articles

### Optional
Update these in `input/constants.ts`:
- `CV_LINK`: Link to your CV
- `DEV_TO_USERNAME`: Your dev.to username

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add CNAME record in your DNS:
   ```
   CNAME <your-username>.github.io
   ```
4. Create `public/CNAME` file:
   ```
   yourdomain.com
   ```

## Updating the Site

To update your portfolio:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
4. GitHub Actions will automatically rebuild and deploy

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
- ✅ Static generation (SSG)
- ✅ Optimized images
- ✅ Minimal JavaScript
- ✅ CSS optimization
- ✅ Fast page loads

Expected Lighthouse scores:
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Test build locally
3. Verify all configurations
4. Check GitHub Pages status: https://www.githubstatus.com/

---

**Your portfolio is now ready to deploy!** 🚀


