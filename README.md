Vist https://sarthakworks.netlify.app/ to view this app live

Tech stack used:
React and various packages
Bootstrap 5
HTML
CSS
Apex chart
React-icons
uuid
concurrently

Developer - Sarthak Bansal
contact - sarthak.workplace@gmail.com
linkedn - https://www.linkedin.com/in/sarthakworks/

## Deployment

This project is configured for automated deployment to **GitHub Pages** and supports **Netlify**.

### 1. GitHub Pages (Automated)
We use **GitHub Actions** to build and deploy the site automatically.

- **How it works**:
  1. Any push to the `master` branch triggers the [.github/workflows/deploy.yml](.github/workflows/deploy.yml) workflow.
  2. The workflow installs dependencies, builds the app, and deploys the `build` folder to a branch named `gh-pages`.
  3. GitHub Pages serves the website from the `gh-pages` branch.

- **How to configure**:
  - Go to **Settings > Pages**.
  - Set **Source** to `Deploy from a branch`.
  - Content: **Source** = `Deploy from a branch`, **Branch** = `gh-pages`.

- **How to change**:
  - Edit `.github/workflows/deploy.yml` to change triggers or build steps.

### 2. Netlify (Supported)
This repository includes a `netlify.toml` file for easy Netlify deployment.

- **How to deploy**:
  - Connect this repository to your Netlify account.
  - Netlify will automatically detect the settings from `netlify.toml` (Build command: `npm run build`, Publish directory: `build`).
