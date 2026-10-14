# Nova website

Official marketing site for Nova — a Life Operating System.

```bash
cd website
npm install
npm run dev
```

Opens on [http://localhost:3001](http://localhost:3001).

The site is a **static export**. GitHub Actions publishes it to GitHub Pages on every push to `master` that touches `website/`.

Live (after Pages is enabled): [https://devyanit05.github.io/Nova/](https://devyanit05.github.io/Nova/)

```bash
npm run build
npm start          # serves the `out/` folder
```

On GitHub: **Settings → Pages → Source: GitHub Actions**. The first deploy runs from `.github/workflows/website.yml`.

Stack: Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Lucide, shadcn-style UI.
