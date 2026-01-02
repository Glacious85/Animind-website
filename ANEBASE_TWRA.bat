@echo off
chcp 65001 >nul
echo ========================================
echo   Ανέβασμα Code στο GitHub
echo ========================================
echo.
echo Repository: https://github.com/Glacious85/Animind-website.git
echo.
pause

cd /d "%~dp0"

echo.
echo Βήμα 1: Ελέγχω αν υπάρχει git...
if not exist .git (
    echo Αρχικοποίηση git...
    git init
    echo Git αρχικοποιήθηκε!
) else (
    echo Git ήδη αρχικοποιημένο.
)

echo.
echo Βήμα 2: Προσθήκη files...
git add .
echo Files προστέθηκαν!

echo.
echo Βήμα 3: Δημιουργία commit...
git commit -m "Initial commit: Animind website"
echo Commit δημιουργήθηκε!

echo.
echo Βήμα 4: Σύνδεση με GitHub repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Glacious85/Animind-website.git
echo Repository συνδέθηκε!

echo.
echo Βήμα 5: Ορισμός branch σε main...
git branch -M main
echo Branch ορίστηκε σε main!

echo.
echo ========================================
echo   Έτοιμο για push!
echo ========================================
echo.
echo Τώρα θα προσπαθήσω να ανεβάσω το code...
echo.
echo ΣΗΜΕΙΩΣΗ: Αν σου ζητήσει password, χρησιμοποίησε
echo Personal Access Token (όχι το GitHub password σου).
echo.
pause

echo.
echo Ανέβασμα στο GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   ΕΠΙΤΥΧΙΑ! Το code ανέβηκε!
    echo ========================================
    echo.
    echo Επόμενο βήμα: Πήγαινε στο https://vercel.com
    echo και κάνε deploy!
    echo.
) else (
    echo.
    echo ========================================
    echo   Υπήρξε πρόβλημα
    echo ========================================
    echo.
    echo Πιθανά προβλήματα:
    echo   1. Χρειάζεσαι Personal Access Token
    echo   2. Το repository δεν υπάρχει ή δεν έχεις πρόσβαση
    echo   3. Λάθος credentials
    echo.
    echo Για Personal Access Token:
    echo   GitHub → Settings → Developer settings
    echo   → Personal access tokens → Generate new token
    echo   → Επίλεξε "repo" → Generate
    echo.
)

pause

