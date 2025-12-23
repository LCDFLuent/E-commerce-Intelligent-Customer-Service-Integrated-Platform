# Deployment Guide

## Docker Deployment

The easiest way to deploy the application is using Docker Compose:

```bash
docker-compose up -d
```

This will start:
- PostgreSQL database (port 5432)
- Redis cache (port 6379)
- Backend API (port 5000)
- Frontend web app (port 3000)

## Manual Deployment

### Backend Deployment

1. **Install dependencies:**
```bash
cd backend
pip install -r requirements.txt
```

2. **Set environment variables:**
```bash
export DATABASE_URL=postgresql://user:pass@host:5432/dbname
export SECRET_KEY=your-production-secret-key
export DEBUG=False
```

3. **Initialize database:**
```bash
python app/main.py
```

4. **Run with production server:**
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app.main:create_app()
```

### Frontend Deployment

1. **Build production bundle:**
```bash
cd frontend
npm install
npm run build
```

2. **Serve with Nginx:**
Create `/etc/nginx/sites-available/ecommerce-cs`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /path/to/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

3. **Enable site:**
```bash
sudo ln -s /etc/nginx/sites-available/ecommerce-cs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Cloud Deployment

### AWS Deployment

1. **Use Elastic Beanstalk for backend:**
```bash
eb init -p python-3.9 ecommerce-cs-backend
eb create ecommerce-cs-backend-env
eb deploy
```

2. **Use S3 + CloudFront for frontend:**
```bash
aws s3 sync frontend/dist s3://your-bucket-name
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

3. **Use RDS for PostgreSQL:**
- Create RDS PostgreSQL instance
- Update DATABASE_URL in backend environment

### Heroku Deployment

1. **Backend:**
```bash
cd backend
heroku create ecommerce-cs-backend
heroku addons:create heroku-postgresql:hobby-dev
heroku addons:create heroku-redis:hobby-dev
git push heroku main
```

2. **Frontend:**
```bash
cd frontend
heroku create ecommerce-cs-frontend
heroku buildpacks:set heroku/nodejs
git push heroku main
```

## Environment Variables

### Production Backend Variables
```bash
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
SECRET_KEY=strong-random-secret-key
JWT_SECRET_KEY=strong-random-jwt-key
DEBUG=False
OPENAI_API_KEY=your-openai-key
```

### Production Frontend Variables
```bash
VITE_API_URL=https://api.your-domain.com
```

## Security Checklist

- [ ] Change all default passwords
- [ ] Use strong SECRET_KEY and JWT_SECRET_KEY
- [ ] Enable HTTPS/SSL certificates
- [ ] Set DEBUG=False in production
- [ ] Configure CORS properly
- [ ] Set up firewall rules
- [ ] Enable rate limiting
- [ ] Regular security updates
- [ ] Backup database regularly
- [ ] Monitor application logs

## Monitoring

### Application Monitoring
- Use Sentry for error tracking
- Use New Relic or DataDog for performance monitoring
- Set up CloudWatch alarms (AWS)

### Database Monitoring
- Monitor connection pool usage
- Set up slow query logging
- Regular backup verification

## Scaling

### Horizontal Scaling
- Use load balancer (Nginx, ALB, etc.)
- Deploy multiple backend instances
- Use Redis for shared session storage

### Database Scaling
- Set up read replicas
- Use connection pooling
- Implement caching strategy

## Backup & Recovery

### Database Backup
```bash
pg_dump -U user dbname > backup.sql
```

### Automated Backups
- Configure automated daily backups
- Store backups in S3 or similar
- Test recovery procedures regularly
