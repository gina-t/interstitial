import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
const port = process.env.PORT || 5000;
import foodRoutes from './routes/foodRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';


const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/food', foodRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});