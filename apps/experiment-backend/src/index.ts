import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory data store (replace with database in production)
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: new Date() },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date() }
];

let nextId = 3;

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Experiment Backend API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      health: '/api/health'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Users CRUD endpoints
app.get('/api/users', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

app.get('/api/users/:id', (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    res.status(404).json({
      success: false,
      message: 'User not found'
    });
    return;
  }
  
  res.json({
    success: true,
    data: user
  });
});

app.post('/api/users', (req: Request, res: Response): void => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
    return;
  }
  
  // Check if email already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    res.status(409).json({
      success: false,
      message: 'Email already exists'
    });
    return;
  }
  
  const newUser: User = {
    id: nextId++,
    name,
    email,
    createdAt: new Date()
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    data: newUser,
    message: 'User created successfully'
  });
});

app.put('/api/users/:id', (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    res.status(404).json({
      success: false,
      message: 'User not found'
    });
    return;
  }
  
  if (!name || !email) {
    res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
    return;
  }
  
  // Check if email already exists for another user
  const existingUser = users.find(u => u.email === email && u.id !== id);
  if (existingUser) {
    res.status(409).json({
      success: false,
      message: 'Email already exists'
    });
    return;
  }
  
  users[userIndex] = {
    ...users[userIndex],
    name,
    email
  };
  
  res.json({
    success: true,
    data: users[userIndex],
    message: 'User updated successfully'
  });
});

app.delete('/api/users/:id', (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    res.status(404).json({
      success: false,
      message: 'User not found'
    });
    return;
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  
  res.json({
    success: true,
    data: deletedUser,
    message: 'User deleted successfully'
  });
});

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📖 API Documentation available at http://localhost:${PORT}`);
});

export default app;
