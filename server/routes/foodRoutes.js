import express from 'express';
const router = express.Router();
import { getFoodItems, getFoodItemById, createFoodItem, updateFoodItemById, deleteFoodItemById, getUserFoodItems } from '../controllers/foodController.js';
import { protect } from '../middleware/authMiddleware.js';

// Public route to get food items
router.get('/', getFoodItems);

// Protected route for user's food items 
router.get('/user', protect, getUserFoodItems);

// Public route to get a specific food item by ID
router.get('/:id', getFoodItemById);

// Protected routes for creating, updating, and deleting food items
router.post('/', protect, createFoodItem);
router.put('/:id', protect, updateFoodItemById);
router.delete('/:id', protect, deleteFoodItemById);


export default router;