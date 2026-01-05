# 🚀 Οδηγίες Deployment & Domain Connection

## Επιλογή 1: Vercel (Προτεινόμενη - Πιο Εύκολη)

Το Vercel είναι η πιο εύκολη επιλογή για Next.js sites και προσφέρει δωρεάν hosting.

### Βήμα 1: Προετοιμασία
1. Βεβαιώσου ότι έχεις GitHub account (αν δεν έχεις, δημιούργησε ένα: https://github.com)
2. Βεβαιώσου ότι το project σου είναι έτοιμο

### Βήμα 2: Ανέβασε το Code στο GitHub
1. Άνοιξε terminal στο folder `website`
2. Τρέξε:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Δημιούργησε ένα νέο repository στο GitHub
4. Συνδέσε το:
   ```bash
   git remote add origin https://github.com/ΤΟ-USERNAME-ΣΟΥ/animind-website.git
   git push -u origin main
   ```

### Βήμα 3: Deploy στο Vercel
1. Πήγαινε στο https://vercel.com
2. Κάνε sign up/login (μπορείς να συνδεθείς με GitHub)
3. Κάνε click "Add New Project"
4. Επίλεξε το repository που μόλις ανέβασες
5. Το Vercel θα εντοπίσει αυτόματα ότι είναι Next.js
6. Κάνε click "Deploy"
7. Περίμενε 1-2 λεπτά για το build

### Βήμα 4: Σύνδεση Domain
1. Στο Vercel dashboard, πήγαινε στο project σου
2. Κάνε click στο tab "Settings"
3. Κάνε click στο "Domains" στο menu
4. Πρόσθεσε το domain σου (π.χ. `animind.com` ή `www.animind.com`)
5. Το Vercel θα σου δώσει DNS records που πρέπει να προσθέσεις

### Βήμα 5: Ρύθμιση DNS στο Domain Provider
Πήγαινε στον πάροχο του domain σου (όπου το αγόρασες) και πρόσθεσε:

**Για root domain (animind.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (ή το IP που θα σου δώσει το Vercel)

**Για www (www.animind.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com` (ή το CNAME που θα σου δώσει το Vercel)

**Σημείωση:** Το Vercel θα σου δώσει τα ακριβή records που χρειάζεσαι.

### Βήμα 6: Περίμενε Propagation
- Μπορεί να πάρει 5 λεπτά έως 48 ώρες (συνήθως 1-2 ώρες)
- Μπορείς να ελέγξεις την πρόοδο στο Vercel dashboard

---

## Επιλογή 2: Netlify

### Βήμα 1: Ανέβασε το Code στο GitHub
(Ίδια διαδικασία με το Vercel)

### Βήμα 2: Deploy στο Netlify
1. Πήγαινε στο https://netlify.com
2. Κάνε sign up/login
3. Κάνε click "Add new site" → "Import an existing project"
4. Επίλεξε GitHub και το repository σου
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Κάνε click "Deploy site"

### Βήμα 3: Σύνδεση Domain
1. Στο Netlify dashboard → "Site settings" → "Domain management"
2. Κάνε click "Add custom domain"
3. Πρόσθεσε το domain σου
4. Πρόσθεσε τα DNS records που θα σου δώσει το Netlify

---

## Επιλογή 3: Traditional Hosting (cPanel, VPS, κλπ)

Αν έχεις ήδη hosting με cPanel ή VPS:

### Build το Project
```bash
cd website
npm run build
```

### Export για Static (Εναλλακτική)
Αν θέλεις static site, άλλαξε το `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

Τότε:
```bash
npm run build
```

Ανέβασε το folder `out` (ή `.next` αν δεν έκανες export) στον server σου.

---

## 🔍 Ελέγχος ότι Λειτουργεί

1. Μετά το deployment, δοκίμασε το URL που σου έδωσε το Vercel/Netlify
2. Ελέγξε ότι όλες οι σελίδες ανοίγουν
3. Ελέγξε ότι το domain λειτουργεί (μπορεί να πάρει λίγο)

---

## ❓ Συχνές Ερωτήσεις

**Q: Πόσο κοστίζει;**
A: Το Vercel και Netlify έχουν δωρεάν tier που είναι αρκετό για τα περισσότερα sites.

**Q: Πόσο χρόνο παίρνει;**
A: Deployment: 2-5 λεπτά. Domain propagation: 1-48 ώρες (συνήθως 1-2 ώρες).

**Q: Μπορώ να αλλάξω domain αργότερα;**
A: Ναι, μπορείς να προσθέσεις/αφαιρέσεις domains οποτεδήποτε.

**Q: Τι γίνεται αν έχω ήδη site στο domain;**
A: Θα πρέπει να αλλάξεις τα DNS records. Το παλιό site θα σταματήσει να λειτουργεί.

---

## 📞 Χρειάζεσαι Βοήθεια;

Αν έχεις προβλήματα:
1. Ελέγξε τα DNS records (μπορείς να χρησιμοποιήσεις https://dnschecker.org)
2. Περίμενε λίγο (DNS propagation παίρνει χρόνο)
3. Ελέγξε τα error logs στο Vercel/Netlify dashboard


