# 🚀 How to Deploy This Folder to Netlify (Live in 30 Seconds)

This folder (`netlify-deploy`) contains the complete, production-ready static website bundle for the **SAMARTH CUET PG 2027 Operating System Quiz Platform** (total size: ~960 KB, completely free of large videos or PDFs).

---

## Method 1: Instant Drag & Drop via Netlify Drop (Recommended & Easiest)

1. Open your web browser and go to:
   👉 **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Log in or create a free account (with GitHub, Google, or Email).
3. Open Windows File Explorer and navigate to:
   `D:\cuet pg\OPERATING SYSTEM\`
4. Simply **drag and drop the `netlify-deploy` folder** directly into the dashed box on the Netlify webpage.
5. In just 5 to 10 seconds, Netlify will generate your **live, free, global HTTPS website link** (e.g., `https://random-name.netlify.app`)!
6. *(Optional)* Click **Site configuration > Change site name** to give your site a custom name, such as:
   `https://cuet-pg-os-quiz.netlify.app`

---

## Method 2: Deploy using Netlify CLI (Terminal)

If you have Node.js installed, open PowerShell or Terminal in this folder and run:

```bash
# 1. Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# 2. Login to your Netlify account
netlify login

# 3. Deploy to production
netlify deploy --prod --dir="D:\cuet pg\OPERATING SYSTEM\netlify-deploy"
```

---

## Method 3: Connect via GitHub (Automatic Continuous Deployment)

1. Create a new GitHub repository (e.g., `cuet-pg-os-quiz`).
2. Push the contents of this `netlify-deploy` folder to your GitHub repo.
3. In [Netlify Dashboard](https://app.netlify.com/), click **"Add new site" > "Import an existing project" > "GitHub"**.
4. Select your repository.
5. Set:
   - **Build command**: *(leave blank)*
   - **Publish directory**: `.`
6. Click **Deploy Site**. Every time you push changes to GitHub, Netlify updates your live site automatically!

---

## 📁 Included Production Assets

- `index.html` — Main SPA application
- `_redirects` — Clean SPA URL routing rule
- `netlify.toml` — Security headers & caching optimizations
- `css/style.css` — Responsive design tokens, light/dark themes
- `data/questions.js` & `data/questions.json` — All 210 questions with Hinglish solutions
- `js/app.js` — Core application controller
- `js/quiz-engine.js` — Dual Fisher-Yates shuffling & scoring engine
- `js/storage.js` — Auto-save & LocalStorage persistence
- `js/audio.js` — Web Audio synthesizer chimes
