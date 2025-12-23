#!/bin/bash

# E-commerce Intelligent Customer Service Platform Setup Script
# This script helps you set up the development environment

set -e

echo "🚀 Setting up E-commerce Intelligent Customer Service Platform..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.9 or higher."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16 or higher."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Setup Backend
echo ""
echo "📦 Setting up backend..."
cd backend

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

if [ ! -f ".env" ]; then
    echo "Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please update .env with your configuration"
fi

cd ..

# Setup Frontend
echo ""
echo "📦 Setting up frontend..."
cd frontend

echo "Installing Node.js dependencies..."
npm install

cd ..

echo ""
echo "✅ Setup completed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Update backend/.env with your configuration"
echo "2. Start backend: cd backend && source venv/bin/activate && python app/main.py"
echo "3. Start frontend (in another terminal): cd frontend && npm run dev"
echo ""
echo "Or use Docker: docker-compose up -d"
echo ""
echo "📖 For more information, see docs/DEVELOPMENT.md"
