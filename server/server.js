import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;
import foodRoutes from './routes/foodRoutes.js';
import userRoutes from './routes/userRoutes.js';
import fatsecretRoutes from './routes/fatsecretRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/food', foodRoutes);
app.use('/api/user', userRoutes);
app.use('/api/fatsecret', fatsecretRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});