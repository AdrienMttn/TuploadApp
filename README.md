# 📲 Tupload

**Tupload** est une solution automatisée permettant de récupérer facilement des vidéos depuis TikTok, Instagram ou YouTube via leur lien de partage, puis de les republier sur votre propre compte TikTok.

---

## ⚙️ Fonctionnement du processus automatisé

1. **Récupération de la vidéo**  
   L’utilisateur renseigne l’URL d’une vidéo TikTok sur le site. Les métadonnées de la vidéo sont automatiquement extraites et affichées.

2. **Envoi vers n8n**  
   En cliquant sur **Upload**, une requête est envoyée à votre instance n8n, qui ajoute les données dans un fichier Google Sheets.
   Zapier détecte la mise à jour du fichier et transmet les informations à Buffer, qui publie automatiquement la vidéo sur TikTok.

---

## 🚀 Déploiement

### Prérequis : Docker

Installez Docker sur votre machine.  
Pour Linux, utilisez les commandes suivantes :  
👉 [Documentation officielle Docker](https://docs.docker.com/engine/install/)

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

### 📦 Installation de n8n

```bash
mkdir n8n
cd n8n
nano docker-compose.yml
```

Collez le contenu suivant :

```yml
services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_SECURE_COOKIE=false
      - N8N_BASIC_AUTH_USER=YOUR_USERNAME
      - N8N_BASIC_AUTH_PASSWORD=YOUR_PASSWORD
    volumes:
      - ./n8n_data:/home/node/.n8n
```

Lancez le conteneur :

```bash
docker compose up -d
```

n8n est maintenant accessible sur le port `5678` de votre machine.

---

### 🔧 Configuration de n8n

- Importez le fichier `Tupload.json` dans votre instance n8n.
- Configurez l’accès à votre Google Sheets pour permettre l’écriture des données.

---

### 📤 Buffer

- Créez un compte sur [Buffer](https://buffer.com/)
- Connectez vos réseaux sociaux à votre compte Buffer pour permettre la publication automatique.

---

### 🔁 Zapier

- Créez un compte sur [Zapier](https://zapier.com/app/home)
- Importez le template suivant :  
  👉 [Template Zapier](https://zapier.com/shared/a1b26f684ed67a7d9b24dd6c268dede49909e117)
- Configurez le Zap avec vos identifiants et services connectés.

---

## 🖥️ Installation locale (développement)

### Prérequis

- Node.js (version recommandée : ≥ 18)
- npm (installé avec Node.js)

### Étapes d’installation

1. **Cloner le dépôt**

```bash
git clone <URL_DU_DEPOT>
cd tiktok_uploader
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

4. **Accéder à l’application**
   Ouvre ton navigateur à l’adresse : [http://localhost:5173](http://localhost:5173)

> **⚠️ N’oubliez pas de renseigner votre domaine vers les webhooks de n8n dans le fichier** `src/services/tiktokService.js` **pour que l’application fonctionne correctement**

### Scripts utiles

- `npm run dev` : démarre le serveur de développement
- `npm run build` : génère la version de production dans le dossier `dist`
- `npm run preview` : lance un serveur local pour prévisualiser la version de production

### Structure du projet

```
src/
  components/
  services/
  vue/
  assets/
public/
```

## 🌐 Hébergement du site

Pour héberger l’interface web, il suffit de déposer les fichiers présents dans le dossier `dist/` sur votre serveur web.

---
