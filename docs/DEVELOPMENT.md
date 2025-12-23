# Development Guide

## Setting Up Development Environment

### Backend Development

1. Create virtual environment:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run the development server:
```bash
python app/main.py
```

The backend will be available at http://localhost:5000

### Frontend Development

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Run the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:3000

## Project Structure

### Backend Structure
```
backend/
├── app/
│   ├── api/          # API endpoints (blueprints)
│   ├── models/       # Database models
│   ├── services/     # Business logic services
│   ├── utils/        # Utility functions
│   └── main.py       # Application entry point
├── config/           # Configuration files
├── tests/            # Test files
└── requirements.txt  # Python dependencies
```

### Frontend Structure
```
frontend/
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── services/     # API services
│   ├── store/        # Redux store
│   └── utils/        # Utility functions
├── public/           # Static assets
└── package.json      # Node dependencies
```

## Testing

### Backend Tests
```bash
cd backend
pytest tests/
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Code Style

### Backend
- Follow PEP 8 style guide
- Use Black for code formatting:
```bash
black app/
```
- Use mypy for type checking:
```bash
mypy app/
```

### Frontend
- Follow TypeScript best practices
- Use ESLint for linting:
```bash
npm run lint
```

## Database Migrations

When you modify models, create and apply migrations:

```bash
cd backend
flask db init  # First time only
flask db migrate -m "Description of changes"
flask db upgrade
```

## Adding New Features

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes following the code style guidelines

3. Test your changes thoroughly

4. Commit and push:
```bash
git add .
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
```

5. Create a pull request

## Debugging

### Backend Debugging
- Use Python debugger (pdb):
```python
import pdb; pdb.set_trace()
```

- Check logs in the console output

### Frontend Debugging
- Use browser DevTools
- Check console logs
- Use React DevTools extension

## Common Issues

### Backend Issues
- **Database connection failed**: Check DATABASE_URL in .env
- **Import errors**: Ensure virtual environment is activated
- **Port already in use**: Change PORT in .env or kill the process using the port

### Frontend Issues
- **Module not found**: Run `npm install`
- **Port already in use**: Change port in vite.config.ts
- **API connection failed**: Ensure backend is running

## Performance Optimization

### Backend
- Use Redis for caching frequently accessed data
- Optimize database queries with indexes
- Use Celery for long-running tasks

### Frontend
- Use React.memo for expensive components
- Implement lazy loading for routes
- Optimize bundle size with code splitting
