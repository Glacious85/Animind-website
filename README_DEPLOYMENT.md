# 🚀 Πώς να Deploy-άρεις το Animind Website

## Γρήγορη Εγκατάσταση

### Επιλογή 1: Vercel (Συνιστάται - Δωρεάν)

1. **Δημιούργησε GitHub Repository**
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial commit"
   # Δημιούργησε repository στο GitHub και συνδέσε το
   ```

2. **Deploy στο Vercel**
   - Πήγαινε στο https://vercel.com
   - Sign up με GitHub
   - "Add New Project" → Επίλεξε το repository
   - Κάνε click "Deploy"

3. **Σύνδεση Domain**
   - Settings → Domains → Add domain
   - Πρόσθεσε τα DNS records που θα σου δώσει

**⏱️ Χρόνος:** 5-10 λεπτά

---

### Επιλογή 2: Netlify

1. **Deploy στο Netlify**
   - Πήγαινε στο https://netlify.com
   - "Add new site" → Import from GitHub
   - Build command: `npm run build`
   - Publish: `.next`

2. **Σύνδεση Domain**
   - Site settings → Domain management → Add custom domain

---

## 📋 Προαπαιτούμενα

- ✅ GitHub account
- ✅ Domain name (που έχεις ήδη)
- ✅ Node.js installed (για local testing)

---

## 🔗 Σύνδεση Domain

### Vercel DNS Records:
- **A Record:** `@` → `76.76.21.21` (ή το IP που θα σου δώσει)
- **CNAME:** `www` → `cname.vercel-dns.com` (ή το CNAME που θα σου δώσει)

### Netlify DNS Records:
- Θα σου δώσει τα records όταν προσθέσεις το domain

**⏱️ DNS Propagation:** 1-48 ώρες (συνήθως 1-2 ώρες)

---

## 📖 Περισσότερες Λεπτομέρειες

Δες το `DEPLOYMENT_GUIDE.md` για πλήρεις οδηγίες.

---

## ❓ Βοήθεια

Αν έχεις προβλήματα:
1. Ελέγξε τα DNS records (https://dnschecker.org)
2. Περίμενε λίγο (DNS propagation)
3. Ελέγξε τα logs στο Vercel/Netlify dashboard


