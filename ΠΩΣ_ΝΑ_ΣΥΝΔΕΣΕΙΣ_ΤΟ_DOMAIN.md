# 🌐 Πώς να Συνδέσεις το Domain σου

## 🎯 Γρήγορη Οδηγία (5 Βήματα)

### Βήμα 1: Ανέβασε το Code στο GitHub
1. Τρέξε το `PREPARE_FOR_GITHUB.bat` (double-click)
2. Δημιούργησε repository στο GitHub (https://github.com/new)
3. Ανέβασε το code (θα σου πει το script πώς)

### Βήμα 2: Deploy στο Vercel
1. Πήγαινε στο **https://vercel.com**
2. Κάνε **Sign up** (μπορείς με GitHub)
3. Κάνε click **"Add New Project"**
4. Επίλεξε το repository που μόλις ανέβασες
5. Κάνε click **"Deploy"**
6. Περίμενε 1-2 λεπτά ✅

### Βήμα 3: Πρόσθεσε το Domain στο Vercel
1. Στο Vercel dashboard → **Settings** → **Domains**
2. Κάνε click **"Add"**
3. Γράψε το domain σου (π.χ. `animind.com`)
4. Το Vercel θα σου δώσει **DNS records**

### Βήμα 4: Ρύθμισε τα DNS Records
Πήγαινε στον πάροχο του domain σου (όπου το αγόρασες) και πρόσθεσε:

**Για root domain (animind.com):**
- **Type:** `A`
- **Name:** `@` (ή αφήσε το κενό)
- **Value:** Το IP που σου έδωσε το Vercel (π.χ. `76.76.21.21`)

**Για www (www.animind.com):**
- **Type:** `CNAME`
- **Name:** `www`
- **Value:** Το CNAME που σου έδωσε το Vercel (π.χ. `cname.vercel-dns.com`)

### Βήμα 5: Περίμενε
- Μπορεί να πάρει **1-48 ώρες** (συνήθως **1-2 ώρες**)
- Μπορείς να ελέγξεις στο Vercel dashboard αν είναι έτοιμο

---

## 📋 Ποιοι είναι οι πιο συνηθισμένοι Domain Providers;

- **Namecheap** → Account → Domain List → Manage → Advanced DNS
- **GoDaddy** → My Products → DNS → Manage DNS
- **Google Domains** → DNS → Custom records
- **Cloudflare** → DNS → Records

---

## ✅ Πώς να Ελέγξεις αν Λειτουργεί

1. Περίμενε 1-2 ώρες μετά την προσθήκη των DNS records
2. Άνοιξε browser και πήγαινε στο domain σου
3. Αν δεν λειτουργεί, ελέγξε:
   - https://dnschecker.org (γράψε το domain σου)
   - Τα DNS records στο Vercel dashboard

---

## ❓ Συχνές Ερωτήσεις

**Q: Πόσο κοστίζει;**
A: Το Vercel είναι **δωρεάν** για personal projects!

**Q: Πόσο χρόνο παίρνει;**
A: Deployment: **2-5 λεπτά**. DNS: **1-48 ώρες** (συνήθως 1-2).

**Q: Μπορώ να έχω και www και χωρίς www;**
A: Ναι! Το Vercel το κάνει αυτόματα αν προσθέσεις και τα δύο.

**Q: Τι γίνεται αν έχω ήδη site στο domain;**
A: Θα πρέπει να αλλάξεις τα DNS records. Το παλιό site θα σταματήσει.

---

## 🆘 Βοήθεια

Αν έχεις προβλήματα:
1. Ελέγξε τα DNS records (https://dnschecker.org)
2. Περίμενε λίγο (DNS propagation)
3. Ελέγξε τα error logs στο Vercel dashboard
4. Δες το `DEPLOYMENT_GUIDE.md` για περισσότερες λεπτομέρειες

---

## 🎉 Έτοιμο!

Μόλις λειτουργήσει, το site σου θα είναι live στο domain σου! 🚀


