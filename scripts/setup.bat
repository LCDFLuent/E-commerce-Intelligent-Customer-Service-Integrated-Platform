@echo off
REM E-commerce Intelligent Customer Service Platform Setup Script
REM This script helps you set up the development environment on Windows

echo Setting up E-commerce Intelligent Customer Service Platform...

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python 3 is not installed. Please install Python 3.9 or higher.
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js 16 or higher.
    exit /b 1
)

echo Prerequisites check passed

REM Setup Backend
echo.
echo Setting up backend...
cd backend

if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

echo Activating virtual environment...
call venv\Scripts\activate.bat

echo Installing Python dependencies...
pip install --upgrade pip
pip install -r requirements.txt

if not exist ".env" (
    echo Creating .env file from template...
    copy .env.example .env
    echo Please update .env with your configuration
)

cd ..

REM Setup Frontend
echo.
echo Setting up frontend...
cd frontend

echo Installing Node.js dependencies...
call npm install

cd ..

echo.
echo Setup completed successfully!
echo.
echo Next steps:
echo 1. Update backend\.env with your configuration
echo 2. Start backend: cd backend ^&^& venv\Scripts\activate ^&^& python app\main.py
echo 3. Start frontend (in another terminal): cd frontend ^&^& npm run dev
echo.
echo Or use Docker: docker-compose up -d
echo.
echo For more information, see docs\DEVELOPMENT.md

pause
