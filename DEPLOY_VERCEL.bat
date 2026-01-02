@echo off
chcp 65001 >nul
echo ========================================
echo   Animind Website - Vercel Deployment
echo ========================================
echo.
echo This script will help you deploy to Vercel.
echo.
echo STEP 1: Make sure you have:
echo   - GitHub account
echo   - Code uploaded to GitHub
echo.
echo STEP 2: Install Vercel CLI (if not installed):
echo   npm install -g vercel
echo.
echo STEP 3: Login to Vercel:
echo   vercel login
echo.
echo STEP 4: Deploy:
echo   vercel
echo.
echo STEP 5: For production:
echo   vercel --prod
echo.
echo ========================================
echo.
echo Do you want to install Vercel CLI now? (Y/N)
set /p install="> "
if /i "%install%"=="Y" (
    echo Installing Vercel CLI...
    call npm install -g vercel
    echo.
    echo Vercel CLI installed!
    echo Now run: vercel login
    echo Then run: vercel
) else (
    echo Skipping installation.
    echo.
    echo To deploy manually:
    echo   1. npm install -g vercel
    echo   2. vercel login
    echo   3. vercel
    echo   4. vercel --prod
)
echo.
pause

