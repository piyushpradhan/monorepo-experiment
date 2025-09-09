# Experiment Backend

A simple REST API built with Express.js and TypeScript.

## Features

- Express.js server with TypeScript
- CORS enabled
- Security headers with Helmet
- Request logging with Morgan
- In-memory data store (for demo purposes)
- Health check endpoint
- CRUD operations for users

## API Endpoints

### Health Check

- `GET /api/health` - Returns server health status

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Docker

### Build Image

```bash
docker build -t experiment-backend .
```

### Run Container

```bash
docker run -p 3000:3000 experiment-backend
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## API Examples

### Create User

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

### Get All Users

```bash
curl http://localhost:3000/api/users
```

### Get User by ID

```bash
curl http://localhost:3000/api/users/1
```

### Update User

```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "John Updated", "email": "john.updated@example.com"}'
```

### Delete User

```bash
curl -X DELETE http://localhost:3000/api/users/1
```
