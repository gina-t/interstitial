// manage OAuth token handling by proxy routes in server
import express from 'express';
import {
  searchFoods,
  getFoodById,
} from '../controllers/fatsecretController.js';

const router = express.Router();

// @route   GET /api/fatsecret/search
// @desc    Search for foods
// @access  Public
router.get('/search', searchFoods);

// @route   GET /api/fatsecret/food/:id
// @desc    Get food details
// @access  Public
router.get('/food/:id', getFoodById);

// Other routes...

export default router;
