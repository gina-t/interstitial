import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import foodRoutes from './routes/foodRoutes.js';
import userRoutes from './routes/userRoutes.js';
import fatsecretRoutes from './routes/fatsecretRoutes.js';
import favouriteRoutes from './routes/favouriteRoutes.js';
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
app.use('/api/favourites', favouriteRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Try multiple possible paths
  const possiblePaths = [
    path.resolve(__dirname, '../client/dist'), // Your expected path
    path.resolve(__dirname, '../../client/dist'), // One level up
    path.resolve(process.cwd(), 'client/dist'), // From current working dir
    path.resolve(process.cwd(), 'dist'), // Direct dist folder
    '/opt/render/project/src/client/dist', // Absolute Render path
  ];

  let clientBuildPath = null;

  // Find the first path that has index.html
  for (const testPath of possiblePaths) {
    try {
      console.log(`Testing path: ${testPath}`);
      if (fs.existsSync(path.join(testPath, 'index.html'))) {
        console.log(`✅ Found build at: ${testPath}`);
        clientBuildPath = testPath;
        break;
      }
    } catch (error) {
      console.log(`Error checking path ${testPath}: ${error.message}`);
    }
  }

  // Use the found path or show a helpful error
  if (clientBuildPath) {
    app.use(express.static(clientBuildPath));
    app.get('*', (req, res) => {
      if (!req.path.startsWith('/api')) {
        console.log(`Serving React app for path: ${req.originalUrl}`);
        res.sendFile(path.join(clientBuildPath, 'index.html'));
      }
    });
  } else {
    console.error('❌ ERROR: Could not find client build files');
    // Return a more helpful error to the browser
    app.get('*', (req, res) => {
      if (!req.path.startsWith('/api')) {
        res.status(404).json({
          error: 'Client build not found',
          checkedPaths: possiblePaths,
          serverDir: __dirname,
          workingDir: process.cwd(),
        });
      }
    });
  }
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
