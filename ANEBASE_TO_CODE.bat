@echo off
chcp 65001 >nul
echo ========================================
echo   Upload Code to GitHub
echo ========================================
echo.
echo This script will help you upload your code to GitHub.
echo.
echo IMPORTANT: Make sure you have:
echo   1. Created a repository on GitHub
echo   2. Copied the repository URL
echo.
echo ========================================
echo.
pause

cd /d "%~dp0"

echo.
echo Step 1: Checking if git is initialized...
if not exist .git (
    echo Initializing git...
    git init
    echo Git initialized!
) else (
    echo Git already initialized.
)

echo.
echo Step 2: Adding files...
git add .
echo Files added!

echo.
echo Step 3: Creating commit...
git commit -m "Initial commit: Animind website"
echo Commit created!

echo.
echo ========================================
echo   Now you need to connect to GitHub
echo ========================================
echo.
echo Please provide your GitHub repository URL.
echo Example: https://github.com/username/repo-name.git
echo.
set /p repo_url="Repository URL: "

if "%repo_url%"=="" (
    echo No URL provided. Exiting.
    pause
    exit /b
)

echo.
echo Step 4: Adding remote origin...
git remote remove origin 2>nul
git remote add origin %repo_url%
echo Remote added!

echo.
echo Step 5: Setting branch to main...
git branch -M main
echo Branch set to main!

echo.
echo ========================================
echo   Ready to push!
echo ========================================
echo.
echo Now I will try to push to GitHub.
echo You will be asked for your GitHub credentials.
echo.
echo NOTE: If it asks for password, use a Personal Access Token
echo (not your GitHub password). See GITHUB_COMMANDS.md for details.
echo.
pause

echo.
echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   SUCCESS! Code uploaded to GitHub!
    echo ========================================
    echo.
    echo Next step: Go to https://vercel.com and deploy!
    echo.
) else (
    echo.
    echo ========================================
    echo   There was an error.
    echo ========================================
    echo.
    echo Common issues:
    echo   1. Wrong repository URL
    echo   2. Need to use Personal Access Token (not password)
    echo   3. Repository doesn't exist on GitHub
    echo.
    echo See GITHUB_COMMANDS.md for help.
    echo.
)

pause

