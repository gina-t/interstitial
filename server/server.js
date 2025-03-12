import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import foodRoutes from './routes/foodRoutes.js';
import userRoutes from './routes/userRoutes.js';
import fatsecretRoutes from './routes/fatsecretRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import fs from 'fs';

dotenv.config();

connectDB();

// ES modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/food', foodRoutes);
app.use('/api/user', userRoutes);
app.use('/api/fatsecret', fatsecretRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const clientBuildPath = path.resolve(__dirname, '../client/dist');
  console.log(`Serving static assets from: ${clientBuildPath}`);

  app.use(express.static(clientBuildPath));

  // Any route that is not an API route should be handled by React
  app.get('*', (req, res) => {
    console.log(`Serving React app for path: ${req.originalUrl}`);
    res.sendFile(path.resolve(clientBuildPath, 'index.html'));
  });
} else {
  app.get('/', (_req, res) => {
    res.send('API is running...');
  });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Node environment: ${process.env.NODE_ENV}`);
  console.log(`Current directory: ${__dirname}`);
});
