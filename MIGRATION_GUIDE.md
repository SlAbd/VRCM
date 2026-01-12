#  Guide de Migration React  Next.js

##  Ce qui a été fait

### 1. Initialisation du Projet
-  Création du projet Next.js 16 avec App Router
-  Installation de toutes les dépendances (Tailwind, shadcn/ui, Framer Motion, etc.)
-  Configuration de jsconfig.json pour l'alias \@/\

### 2. Configuration shadcn/ui
-  **53 composants UI** copiés et configurés
-  Directive \'use client'\ ajoutée à tous les composants UI
-  Configuration dans components.json
-  Utilitaire \cn()\ dans src/lib/utils.js

### 3. Structure des Fichiers
-  Layout global (src/app/layout.js) avec Navbar + Footer
-  6 pages créées avec metadata SEO :
  - / (Accueil)
  - /about
  - /activities
  - /shop
  - /blog
  - /contact

### 4. Migration des Composants
-  **Navbar**: Client Component (\'use client'\) - navigation interactive
-  **Footer**: Server Component - pur SEO
-  **LandingPage**: Client Component - animations
-  **Pages**: Tous les composants de pages avec \'use client'\
-  **Assets**: Copiés dans public/assets/

### 5. Corrections Appliquées
-  Imports corrigés : \../components/ui/\  \@/components/ui/\
-  Navigation : \<Link to="">\  \<Link href="">\
-  Images : Chemins adaptés pour public/
-  CSS : Suppression de tw-animate-css, installation de tailwindcss-animate
-  Configuration next.config.mjs pour images Unsplash

### 6. SEO Optimisé
Chaque page a maintenant des metadata :
\\\js
export const metadata = {
  title: 'Page Title | VRCM',
  description: '...',
  keywords: ['...'],
  openGraph: { ... },
  twitter: { ... },
};
\\\

##  Commandes Utiles

### Développement
\\\ash
npm run dev           # Serveur de développement (http://localhost:3000)
npm run build         # Build de production
npm start             # Serveur de production
npm run lint          # Vérification du code
\\\

### shadcn/ui
\\\ash
# Ajouter un nouveau composant
npx shadcn@latest add [component]

# Exemples
npx shadcn@latest add toast
npx shadcn@latest add form
npx shadcn@latest add data-table

# Ou utiliser le script PowerShell
.\add-component.ps1 toast
\\\

##  Composants shadcn Installés

### Navigation & Layout
- accordion, breadcrumb, menubar, navigation-menu, pagination
- sidebar, tabs

### Formulaires
- button, input, textarea, label, checkbox, radio-group
- select, switch, slider, calendar, form
- input-otp, input-group

### Feedback
- alert, alert-dialog, dialog, drawer, sheet
- toast (sonner), progress, spinner, skeleton

### Affichage
- card, avatar, badge, separator, aspect-ratio
- carousel, table, empty, kbd

### Interactif
- dropdown-menu, context-menu, popover, hover-card
- tooltip, command, collapsible, resizable
- toggle, toggle-group, button-group

### Charts
- chart (recharts)

##  Personnalisation

### Ajouter des Metadata à une Page
\\\js
// src/app/ma-page/page.js
export const metadata = {
  title: 'Mon Titre',
  description: 'Ma description',
};
\\\

### Créer un Client Component
\\\jsx
'use client';

import { useState } from 'react';

export default function MonComposant() {
  const [count, setCount] = useState(0);
  // ...
}
\\\

### Créer un Server Component
\\\jsx
// Pas de 'use client' = Server Component par défaut
export default function MonComposant() {
  // Pas de hooks React ici
  return <div>...</div>;
}
\\\

### Optimiser une Image
\\\jsx
import Image from 'next/image';

<Image 
  src="/assets/photo.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority  // Pour images above-the-fold
  quality={85}
/>
\\\

##  Dépannage

### Erreur "Module not found"
- Vérifiez que jsconfig.json a \aseUrl: "."\
- Utilisez \@/\ pour les imports depuis src/

### Erreur "use client" manquant
- Ajoutez \'use client';\ en haut du fichier si vous utilisez useState, useEffect, etc.

### Images ne se chargent pas
- Vérifiez que les images sont dans public/
- Utilisez \/assets/image.jpg\ (pas \./assets/\)

##  Prochaines Étapes

1. **Optimiser les images** : Remplacer \<img>\ par \<Image>\
2. **Tester le SEO** : Vérifier avec Google Lighthouse
3. **Ajouter des animations** : Utiliser Framer Motion avec 'use client'
4. **Build de production** : \
pm run build\ et tester

##  Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Radix UI Docs](https://www.radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

**Migration réalisée le : 08/01/2026**  
**Version Next.js : 16.1.1**  
**Version React : 19.2.0**
