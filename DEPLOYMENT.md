# Japora Website - GitHub Pages Deployment Guide

This guide explains how to deploy the Japora website to GitHub Pages.

## Prerequisites

- A GitHub account
- The `Rudra Web` folder containing all website files

## Step 1: Create or Open a GitHub Repository

### Option A: Create a New Repository

1. Go to https://github.com/new
2. Repository name: `japora` (or any name you prefer)
3. Description: "Website for Japora - Jaap Counter & Spiritual Practice App"
4. Visibility: Choose Public (required for GitHub Pages with free account)
5. Do NOT initialize with README, .gitignore, or License (we already have these)
6. Click "Create repository"

### Option B: Use Existing Repository

If you already have a repository, navigate to it in GitHub.

## Step 2: Upload Website Files

### Using GitHub Web Interface

1. In your repository, click "Add file" → "Upload files"
2. Drag and drop the entire contents of the `Rudra Web` folder
3. Or, click "Upload" and select all files from `Rudra Web/`

### Using Git Command Line

```bash
# Clone the repository
git clone https://github.com/USERNAME/REPOSITORY.git

# Copy all files from Rudra Web to the repo root
cp -r Rudra Web/* REPOSITORY/

# Add and commit
cd REPOSITORY
git add .
git commit -m "Add Japora website files"

# Push to GitHub
git push origin main
# or
git push origin master
```

## Step 3: Select GitHub Pages Deployment Source

1. Go to your repository on GitHub
2. Click "Settings" (usually top-right or from the sidebar)
3. In the left sidebar, click "Pages" under "Code automation"
4. Under "Build and deployment", configure:

   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` (or `master`)
   - **Folder**: Select `/root` (root directory)

5. Click "Save"

## Step 4: Configure Branch and Root Directory

The website is configured to work in both scenarios:

### Scenario 1: Root Repository (https://USERNAME.github.io/)

- No repository name prefix needed
- Files are served directly from the root
- All asset paths use relative paths starting with `assets/`

### Scenario 2: Project Repository (https://USERNAME.github.io/REPOSITORY/)

- All asset paths in the HTML files use relative paths (starting with `assets/`)
- No `base` tag is needed because we use relative paths
- The `sitemap.xml` and `robots.txt` use relative URLs
- The website will be available at `https://USERNAME.github.io/japora/`

**Important**: Do not change the folder setting to `/(/) subdirectory` unless you update all asset paths in the HTML files to include the repository name prefix.

## Step 5: Enable GitHub Pages

After configuring the source branch:

1. GitHub will automatically build and deploy your site
2. Wait 1-2 minutes for the deployment to complete
3. The status will change from "None" to "Published"

## Step 6: Obtain the Published URL

Once deployed, your website URL will be:

- **Root repo**: `https://USERNAME.github.io/`
- **Project repo**: `https://USERNAME.github.io/REPOSITORY/`

The exact URL appears on the "Pages" settings page after deployment succeeds.

**Note**: If using a project repository (`USERNAME.github.io/REPOSITORY/`), the website uses relative paths for all assets, so it will work correctly without additional configuration.

## Step 7: Test All Pages After Deployment

After deployment, verify these URLs work:

- `https://USERNAME.github.io/` - Home page
- `https://username.github.io/privacy-policy.html` - Privacy Policy
- `https://username.github.io/support.html` - Support & FAQ
- `https://username.github.io/contact.html` - Contact page
- `https://username.github.io/404.html` - Error page (if accessed via broken link)

## Step 8: Google Play Console Integration

### Obtaining the Website URL

After deployment, note your published URL:

- **Root repo URL**: `https://USERNAME.github.io/`
- **Project repo URL**: `https://USERNAME.github.io/REPOSITORY/`

### Entering URL in Google Play Console

1. Go to the Google Play Console
2. Select your app
3. Navigate to **Store presence** → **Website**
4. Enter your GitHub Pages URL in the "Website" field
5. Save changes

### Entering Privacy Policy URL Separately

1. In the Google Play Console, navigate to **Store presence** → **Privacy policy**
2. Enter the direct link to your privacy policy page:
   - `https://USERNAME.github.io/privacy-policy.html` (root repo)
   - `https://USERNAME.github.io/REPOSITORY/privacy-policy.html` (project repo)
3. Save changes

## Step 9: Updating the Website When Application Changes

1. Edit the relevant HTML, CSS, or JavaScript files in the `Rudra Web` folder
2. Commit and push the changes to your GitHub repository
3. GitHub Pages will automatically redeploy on push
4. Wait 1-2 minutes for the new version to go live
5. Test all pages after deployment

**Tip**: Keep the `Rudra Web` folder in sync with any changes to the app's features, privacy policy, or contact information.

## Folder Structure

```
Rudra Web/
├── index.html
├── privacy-policy.html
├── support.html
├── contact.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── manifest.json
├── README.md
├── DEPLOYMENT.md
├── PROJECT_AUDIT.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── app-icon.png
│   │   ├── favicon.png
│   │   └── og-image.png
│   └── fonts/
└── .nojekyll
```