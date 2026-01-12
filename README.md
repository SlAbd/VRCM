# VRCM Next.js - Migration Guide

##  Migration Complétée !

Ce projet a été migré de **React (Vite)** vers **Next.js 16 (App Router)**.

##  Démarrage Rapide

\\\ash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build de production
npm run build
npm start
\\\

Le site sera accessible sur **http://localhost:3000**

##  shadcn/ui

Le projet utilise **shadcn/ui** pour les composants UI.

### Configuration

- **Style**: new-york
- **Composants**: 53 composants installés dans \src/components/ui/\
- **Alias**: \@/\ pointe vers \src/\

### Composants installés

Tous les composants sont configurés avec \'use client'\ pour Next.js :
- Button, Card, Input, Textarea, Label
- Dialog, Sheet, Popover, Dropdown Menu
- Accordion, Tabs, Carousel
- Et 40+ autres composants

### Ajouter de nouveaux composants

\\\ash
npx shadcn@latest add [component-name]
\\\

Exemple :
\\\ash
npx shadcn@latest add toast
\\\

##  Structure du Projet

\\\
vrcm-v2/
 src/
    app/              # Routes Next.js (App Router)
       layout.js     # Layout global
       page.js       # Page d'accueil (/)
       about/
       activities/
       shop/
       blog/
       contact/
    components/
       ui/           # Composants shadcn/ui
       pages/        # Composants de contenu
       Navbar.jsx
       Footer.jsx
       LandingPage.jsx
    lib/
       utils.js      # Utilitaires (cn)
    hooks/
 public/
    assets/           # Images
 next.config.mjs
\\\

##  Différences Clés React  Next.js

| Aspect | React (Vite) | Next.js |
|--------|--------------|---------|
| Routing | react-router-dom | File-based |
| Navigation | \<Link to="">\ | \<Link href="">\ |
| Images | \<img>\ | \<Image>\ |
| SEO | react-helmet | Metadata API |
| Components | Client-side | Server + Client |

##  Notes Importantes

1. **Client Components**: Les composants avec \'use client'\ utilisent des hooks React
2. **Server Components**: Par défaut, optimisés pour le SEO
3. **Images**: Configuré pour Unsplash (voir \
ext.config.mjs\)
4. **Metadata**: Chaque page a des metadata SEO optimisées

##  Technologies

- Next.js 16.1.1 (Turbopack)
- React 19
- Tailwind CSS 4
- shadcn/ui
- Framer Motion
- Lucide React Icons
- Radix UI

##  Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
