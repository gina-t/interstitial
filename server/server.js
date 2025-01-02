import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;
import foodRoutes from './routes/foodRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';

dotenv.config();
// configure doenv in server.js file only. The dotenv.config() call should be made only once at the entry point of your application, which is typically the server.js file, to load the environment variables from the .env file.

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/food', foodRoutes);
app.use('/api/user', userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});