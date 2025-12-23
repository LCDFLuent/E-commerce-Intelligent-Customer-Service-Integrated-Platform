# E-commerce Intelligent Customer Service Integrated Platform

## 项目简介 (Project Overview)

一个基于人工智能的电商智能客服集成平台，提供智能对话、订单查询、商品推荐等功能。

An AI-powered E-commerce Intelligent Customer Service Integrated Platform that provides intelligent dialogue, order inquiry, product recommendation, and more.

## 主要特性 (Key Features)

- 🤖 **智能对话系统** - AI-powered chatbot for customer inquiries
- 📦 **订单管理** - Order tracking and management
- 🛍️ **商品推荐** - Intelligent product recommendation
- 📊 **数据分析** - Customer behavior analytics
- 🔐 **用户认证** - Secure user authentication and authorization
- 💬 **多渠道集成** - Multi-channel support (Web, Mobile, WeChat, etc.)

## 技术栈 (Tech Stack)

### 后端 (Backend)
- Python 3.9+
- Flask/FastAPI - Web framework
- SQLAlchemy - ORM
- PostgreSQL - Primary database
- Redis - Caching and session storage
- Celery - Asynchronous task queue

### 前端 (Frontend)
- React 18+
- TypeScript
- Ant Design / Material-UI
- Redux - State management
- Axios - HTTP client

### AI/ML
- OpenAI API / Local LLM
- Transformers - NLP models
- Sentence-BERT - Semantic search

### DevOps
- Docker & Docker Compose
- GitHub Actions - CI/CD
- Nginx - Reverse proxy

## 项目结构 (Project Structure)

```
.
├── backend/                # 后端服务
│   ├── app/               # 应用代码
│   ├── config/            # 配置文件
│   ├── tests/             # 测试文件
│   └── requirements.txt   # Python依赖
├── frontend/              # 前端服务
│   ├── src/              # 源代码
│   ├── public/           # 静态资源
│   └── package.json      # Node依赖
├── docker/               # Docker配置
├── docs/                 # 文档
└── scripts/              # 脚本文件
```

## 快速开始 (Quick Start)

### 环境要求 (Prerequisites)
- Python 3.9+
- Node.js 16+
- PostgreSQL 13+
- Redis 6+
- Docker & Docker Compose (optional)

### 安装步骤 (Installation)

1. 克隆仓库 (Clone the repository)
```bash
git clone https://github.com/LCDFLuent/E-commerce-Intelligent-Customer-Service-Integrated-Platform.git
cd E-commerce-Intelligent-Customer-Service-Integrated-Platform
```

2. 后端设置 (Backend Setup)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env  # 配置环境变量
python app/main.py
```

3. 前端设置 (Frontend Setup)
```bash
cd frontend
npm install
npm start
```

4. 使用Docker (Using Docker)
```bash
docker-compose up -d
```

## 配置 (Configuration)

在 `.env` 文件中配置以下环境变量：

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce_cs
REDIS_URL=redis://localhost:6379/0

# API Keys
OPENAI_API_KEY=your_openai_api_key

# Application
SECRET_KEY=your_secret_key
DEBUG=False
```

## API文档 (API Documentation)

启动后端服务后，访问以下地址查看API文档：
- Swagger UI: http://localhost:5000/api/docs
- ReDoc: http://localhost:5000/api/redoc

## 开发指南 (Development Guide)

### 后端开发 (Backend Development)
```bash
cd backend
# 运行测试
pytest tests/
# 代码格式化
black app/
# 类型检查
mypy app/
```

### 前端开发 (Frontend Development)
```bash
cd frontend
# 运行测试
npm test
# 代码检查
npm run lint
# 构建生产版本
npm run build
```

## 贡献指南 (Contributing)

欢迎贡献！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详情。

## 许可证 (License)

MIT License - 详见 [LICENSE](LICENSE) 文件

## 联系方式 (Contact)

- 项目维护者: LCDFLuent
- 问题反馈: [GitHub Issues](https://github.com/LCDFLuent/E-commerce-Intelligent-Customer-Service-Integrated-Platform/issues)