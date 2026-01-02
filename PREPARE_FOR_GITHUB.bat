@echo off
chcp 65001 >nul
echo ========================================
echo   Prepare Animind Website for GitHub
echo ========================================
echo.
echo This will initialize git and prepare your code for GitHub.
echo.
pause

cd /d "%~dp0"

echo.
echo Step 1: Initializing Git...
if not exist .git (
    git init
    echo Git initialized!
) else (
    echo Git already initialized.
)

echo.
echo Step 2: Creating .gitignore...
if not exist .gitignore (
    (
        echo # Dependencies
        echo node_modules/
        echo /.pnp
        echo .pnp.js
        echo.
        echo # Testing
        echo /coverage
        echo.
        echo # Next.js
        echo /.next/
        echo /out/
        echo.
        echo # Production
        echo /build
        echo.
        echo # Misc
        echo .DS_Store
        echo *.pem
        echo.
        echo # Debug
        echo npm-debug.log*
        echo yarn-debug.log*
        echo yarn-error.log*
        echo.
        echo # Local env files
        echo .env*.local
        echo.
        echo # Vercel
        echo .vercel
        echo.
        echo # TypeScript
        echo *.tsbuildinfo
        echo next-env.d.ts
    ) > .gitignore
    echo .gitignore created!
) else (
    echo .gitignore already exists.
)

echo.
echo Step 3: Adding files to git...
git add .
echo Files added!

echo.
echo Step 4: Creating initial commit...
git commit -m "Initial commit: Animind website"
echo Commit created!

echo.
echo ========================================
echo   Next Steps:
echo ========================================
echo.
echo 1. Go to https://github.com and create a new repository
echo    (Name it: animind-website or whatever you want)
echo.
echo 2. Copy the repository URL (it will look like:
echo    https://github.com/YOUR-USERNAME/animind-website.git)
echo.
echo 3. Run these commands (replace with your URL):
echo    git remote add origin YOUR-REPO-URL
echo    git branch -M main
echo    git push -u origin main
echo.
echo 4. Then go to https://vercel.com and deploy!
echo.
echo ========================================
echo.
pause

