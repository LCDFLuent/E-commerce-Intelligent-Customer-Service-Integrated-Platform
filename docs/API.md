# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_token>
```

## Endpoints

### Authentication

#### POST /api/auth/register
Register a new user.

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "username": "string"
}
```

#### POST /api/auth/login
Login and receive JWT token.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "access_token": "string",
  "username": "string"
}
```

#### GET /api/auth/profile
Get current user profile (requires authentication).

**Response:**
```json
{
  "username": "string",
  "email": "string"
}
```

### Chatbot

#### POST /api/chatbot/message
Send a message to the chatbot (requires authentication).

**Request Body:**
```json
{
  "message": "string",
  "session_id": "string (optional)"
}
```

**Response:**
```json
{
  "response": "string",
  "session_id": "string",
  "timestamp": "string"
}
```

#### GET /api/chatbot/history/:session_id
Get chat history (requires authentication).

**Response:**
```json
{
  "session_id": "string",
  "messages": []
}
```

### Products

#### GET /api/products
Get list of products.

**Query Parameters:**
- page: integer (default: 1)
- limit: integer (default: 10)
- category: string (optional)

**Response:**
```json
{
  "products": [],
  "page": 1,
  "limit": 10,
  "total": 0
}
```

#### GET /api/products/:product_id
Get product details.

**Response:**
```json
{
  "product_id": "string",
  "name": "string",
  "price": 99.99
}
```

#### GET /api/products/search
Search products.

**Query Parameters:**
- query: string (required)

**Response:**
```json
{
  "query": "string",
  "results": []
}
```

#### GET /api/products/recommend
Get product recommendations (requires authentication).

**Response:**
```json
{
  "recommendations": []
}
```

### Orders

#### GET /api/orders
Get user orders (requires authentication).

**Response:**
```json
{
  "orders": [],
  "count": 0
}
```

#### GET /api/orders/:order_id
Get order details (requires authentication).

**Response:**
```json
{
  "order_id": "string",
  "status": "pending",
  "items": []
}
```

#### POST /api/orders
Create new order (requires authentication).

**Request Body:**
```json
{
  "items": [
    {
      "product_id": "string",
      "quantity": 1
    }
  ]
}
```

**Response:**
```json
{
  "message": "Order created successfully",
  "order_id": "string"
}
```

## Swagger Documentation

For interactive API documentation, visit:
```
http://localhost:5000/api/docs
```
