# 🚀 Next.js Project

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Made by StarDev](https://img.shields.io/badge/Made%20by-StarDev-blue)](https://vercel.com/)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## 🧠 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open http://localhost:3000
 in your browser to see the result.

You can start editing the page by modifying app/page.js.
The page auto-updates as you edit the file.

This project uses next/font

to automatically optimize and load Geist
, a new font family for Vercel.

📚 Learn More

To learn more about Next.js, check out these resources:

📘 Next.js Documentation
 — learn about Next.js features and API.

🧩 Learn Next.js
 — an interactive Next.js tutorial.

💡 Next.js GitHub Repository
 — feedback and contributions are welcome!

🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform
 — created by the same team behind Next.js.

1️⃣ Deploy via GitHub (Recommended)

This method enables automatic deployments every time you push updates to GitHub.

Steps:

Push your project to GitHub:

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/username/nama-project.git
git push -u origin main


Go to https://vercel.com/dashboard
.

Click “Add New Project” → “Import Git Repository”.

Choose your repository.

Configure settings (usually auto-detected):

Framework Preset → Next.js

Build Command → next build

Output Directory → .next

Click Deploy.

After build is complete, your live project will be available at:

https://your-project-name.vercel.app

2️⃣ Deploy via Vercel CLI (Manual Upload)

If you prefer deploying directly from your terminal:

Steps:

Install the Vercel CLI:

npm install -g vercel


Login to your account:

vercel login


Deploy the project:

vercel


Vercel will ask a few questions interactively (project name, scope, etc.).
Once done, it’ll generate a live URL like:

https://your-project.vercel.app


For production deployment (recommended):

vercel --prod

🔄 Update / Redeploy on Vercel
If You Used GitHub (Auto-Deploy)

Whenever you make code changes, just commit and push:

git add .
git commit -m "update home page design"
git push


Vercel will automatically:

Rebuild the project

Deploy the latest version

Keep your site live under the same domain

You can check the deployment status on your Vercel Dashboard
.

If You Used CLI (Manual Deploy)

After editing your project locally, redeploy manually:

vercel --prod


✅ That’s it — Vercel will rebuild and redeploy your latest version.

🧩 Rollback (Optional)

If something breaks after an update:

Go to Vercel Dashboard → Deployments
.

Open your project.

Click Rollback on any previous deployment.

Your site will instantly revert to that version.

💡 Tips

You can connect custom domains in Vercel:
Project → Settings → Domains → Add Domain.

For environment variables, go to
Project → Settings → Environment Variables.

To preview before production, push changes to a branch (like dev), and Vercel will create a preview URL automatically.

🧠 Summary
Action	Command / Location	Description
Run Dev Server	npm run dev	Run locally on localhost:3000
Build Project	npm run build	Create optimized build
Deploy (CLI)	vercel --prod	Manual production deploy
Update via Git	git push	Auto deploy via GitHub
Rollback	Dashboard → Deployments	Revert to older version
✨ Credits

Built with ❤️ using Next.js
 and hosted on Vercel
.

Developed by StarDev — Web Development & Creative Solutions.
📩 Contact: stardev-creative.vercel.app
