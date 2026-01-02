# 📝 Commands για GitHub (Αφού Ανέβασες το Repository)

## Βήμα 1: Άνοιξε Terminal στο folder `website`

Πήγαινε στο folder `website` και άνοιξε PowerShell ή Command Prompt εκεί.

---

## Βήμα 2: Αν δεν έχεις κάνει git init ακόμα:

```bash
git init
git add .
git commit -m "Initial commit"
```

---

## Βήμα 3: Σύνδεσε το Local Repository με το GitHub

**Αντικατέστησε `YOUR-USERNAME` και `REPO-NAME` με τα δικά σου:**

```bash
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
```

**Παράδειγμα:**
```bash
git remote add origin https://github.com/john/animind-website.git
```

---

## Βήμα 4: Ονόμασε το branch "main"

```bash
git branch -M main
```

---

## Βήμα 5: Ανέβασε το Code

```bash
git push -u origin main
```

Θα σου ζητήσει username και password. Χρησιμοποίησε:
- **Username:** Το GitHub username σου
- **Password:** Personal Access Token (όχι το password σου - δες παρακάτω)

---

## 🔑 Personal Access Token (Αν χρειάζεται)

Αν σου ζητήσει password και δεν δουλεύει:

1. Πήγαινε στο GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Κάνε click **"Generate new token"**
3. Δώσε όνομα (π.χ. "Animind Website")
4. Επίλεξε scope: **repo** (check the box)
5. Κάνε click **"Generate token"**
6. **ΑΝΤΙΓΡΑΨΕ ΤΟ TOKEN** (θα το δεις μόνο μια φορά!)
7. Χρησιμοποίησε αυτό το token ως password

---

## ✅ Έλεγχος

Μετά το `git push`, πήγαινε στο GitHub repository σου και θα πρέπει να βλέπεις όλα τα files!

---

## 🚀 Επόμενο Βήμα: Deploy στο Vercel

1. Πήγαινε στο **https://vercel.com**
2. Sign up / Login
3. **"Add New Project"**
4. Επίλεξε το repository
5. **"Deploy"**

---

## 📋 Quick Copy-Paste (Όλα μαζί)

```bash
cd website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

**Αντικατέστησε:**
- `YOUR-USERNAME` → Το GitHub username σου
- `REPO-NAME` → Το όνομα του repository

---

## ❓ Αν έχεις ήδη κάνει git init

Αν έχεις ήδη κάνει `git init` και `git add`, τότε τρέξε μόνο:

```bash
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

