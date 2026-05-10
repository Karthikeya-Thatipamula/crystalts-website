# Crystal Technology Services (CrystalTS) Website

A premium single-page React website for Crystal Technology Services Pte. Ltd. with a futuristic Liquid Glass + Crystal identity, immersive 3D hero, GSAP scroll storytelling, Lenis smooth scrolling, and polished micro-interactions.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- React Three Fiber + Drei + Postprocessing
- GSAP 3 + ScrollTrigger
- Lenis smooth scroll
- Framer Motion micro-interactions

## Recommended folder structure

```txt
crystalts-website/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── styles.css
    ├── components/
    │   ├── CrystalScene.tsx
    │   ├── Hero.tsx
    │   ├── Navbar.tsx
    │   └── Sections.tsx
    ├── data/
    │   └── content.ts
    └── hooks/
        └── useLenis.ts
```

## Content source

Company profile, services, address, email, values, and growth context were adapted from the existing CrystalTS website and provided company deck imagery:

- Founded: 2018
- Legal entity: Crystal Technology Services Pte. Ltd.
- Address: 446 Hougang Avenue 8, #08-1633, Singapore 530446
- Email: support@crystalts.com
- Core services: AI predictive maintenance, energy optimization, cost optimization, transport/network transformation, SAP advisory, customer experience/contact center, and Telco OSS
- Values: Excellence, Innovation, Integrity, Collaboration
- Ambition: 200+ team and USD 20M revenue target

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```
