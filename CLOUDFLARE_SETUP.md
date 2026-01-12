# Configuration Cloudflare Pages

## 📋 Prérequis

1. Un compte Cloudflare (gratuit) : https://dash.cloudflare.com/sign-up
2. Un dépôt GitHub avec votre code

## 🔧 Configuration GitHub Secrets

### 1. Obtenir votre API Token Cloudflare

1. Connectez-vous à votre tableau de bord Cloudflare
2. Allez dans **Mon profil** → **Jetons API** (https://dash.cloudflare.com/profile/api-tokens)
3. Cliquez sur **Créer un jeton**
4. Utilisez le modèle **Modifier Cloudflare Pages** ou créez un jeton personnalisé avec :
   - Permissions : `Account` → `Cloudflare Pages` → `Edit`
   - Ressources de compte : `Inclure` → `Votre compte`
5. Copiez le jeton généré

### 2. Obtenir votre Account ID

1. Sur le tableau de bord Cloudflare
2. Sélectionnez votre compte
3. Dans la barre latérale droite, vous verrez **ID de compte**
4. Copiez cet ID

### 3. Ajouter les secrets dans GitHub

1. Allez sur votre dépôt GitHub : https://github.com/SlAbd/VRCM
2. Cliquez sur **Settings** → **Secrets and variables** → **Actions**
3. Cliquez sur **New repository secret**
4. Ajoutez les secrets suivants :

   - **Nom** : `CLOUDFLARE_API_TOKEN`
     **Valeur** : Votre jeton API Cloudflare
   
   - **Nom** : `CLOUDFLARE_ACCOUNT_ID`
     **Valeur** : Votre ID de compte Cloudflare

## 🚀 Méthodes de déploiement

### Option 1 : Déploiement automatique via GitHub Actions (Recommandé)

Le workflow est déjà configuré dans `.github/workflows/deploy.yml`. Il se déclenchera automatiquement à chaque push sur la branche `master`.

**Étapes :**
1. Configurez les secrets GitHub (voir ci-dessus)
2. Poussez votre code :
   ```bash
   git add .
   git commit -m "Configure Cloudflare deployment"
   git push origin master
   ```
3. Le workflow se lance automatiquement
4. Vérifiez les logs dans l'onglet **Actions** de votre dépôt GitHub

### Option 2 : Connexion directe Cloudflare Pages ↔ GitHub

1. Allez sur le tableau de bord Cloudflare Pages : https://dash.cloudflare.com/pages
2. Cliquez sur **Créer un projet**
3. Sélectionnez **Connecter à Git**
4. Autorisez l'accès à votre dépôt GitHub `SlAbd/VRCM`
5. Configurez le projet :
   - **Nom du projet** : `vrcm`
   - **Branche de production** : `master`
   - **Framework preset** : `Next.js (Static HTML Export)`
   - **Commande de build** : `npm run build`
   - **Répertoire de sortie** : `out`
6. Cliquez sur **Enregistrer et déployer**

### Option 3 : Déploiement manuel avec Wrangler CLI

1. Installez Wrangler :
   ```bash
   npm install -g wrangler
   ```

2. Connectez-vous à Cloudflare :
   ```bash
   wrangler login
   ```

3. Buildez et déployez :
   ```bash
   npm run build
   npx wrangler pages deploy out --project-name=vrcm
   ```

## 🌐 Après le déploiement

Votre site sera accessible sur :
- URL Cloudflare : `https://vrcm.pages.dev`
- Vous pouvez configurer un domaine personnalisé dans les paramètres Cloudflare Pages

## 🔍 Vérification

1. Allez dans l'onglet **Actions** de GitHub pour voir le statut du workflow
2. Consultez le tableau de bord Cloudflare Pages pour voir votre site
3. Chaque commit sur `master` déclenchera un nouveau déploiement

## ⚙️ Configuration supplémentaire (optionnel)

### Variables d'environnement

Si vous avez besoin de variables d'environnement :
1. Dans Cloudflare Pages → Votre projet → **Settings** → **Environment variables**
2. Ajoutez vos variables pour Production et Preview

### Domaine personnalisé

1. Dans Cloudflare Pages → Votre projet → **Custom domains**
2. Cliquez sur **Set up a custom domain**
3. Suivez les instructions pour configurer votre domaine

## 📝 Notes

- Les déploiements sur Cloudflare Pages sont gratuits (jusqu'à 500 builds/mois)
- Le build est automatique à chaque push
- Les Pull Requests génèrent des aperçus automatiques
- Le site est servi via le CDN global de Cloudflare
