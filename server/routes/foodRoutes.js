import express from 'express';
const router = express.Router();
import { getFoodItems, getFoodItemById, createFoodItem, updateFoodItemById, deleteFoodItemById } from '../controllers/foodController.js';

router.get('/', getFoodItems);

router.get('/:id', getFoodItemById);

router.post('/', createFoodItem);

router.put('/:id', updateFoodItemById);

router.delete('/:id', deleteFoodItemById);

export default router;