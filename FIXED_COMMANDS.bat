@echo off
chcp 65001 >nul
echo ========================================
echo   Fixed Commands - Ready to Push!
echo ========================================
echo.
echo Everything is ready! Now just run:
echo.
echo git push -u origin main
echo.
echo If it asks for password, use Personal Access Token.
echo.
pause

cd /d "%~dp0"

echo.
echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   SUCCESS! Code uploaded!
    echo ========================================
    echo.
    echo Next: Go to https://vercel.com and deploy!
    echo.
) else (
    echo.
    echo ========================================
    echo   Need Personal Access Token
    echo ========================================
    echo.
    echo 1. GitHub → Settings → Developer settings
    echo 2. Personal access tokens → Tokens (classic)
    echo 3. Generate new token → Select "repo"
    echo 4. Copy the token and use it as password
    echo.
)

pause


