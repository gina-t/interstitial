// contains the functions that handle the logic for each route
import asyncHandler from 'express-async-handler';
import FoodItem from '../models/foodModel.js';

// @route   GET /api/food
// @desc    Get all food items
// @access  Private
export const getFoodItems = asyncHandler(async (req, res) => {
  const foodItems = await FoodItem.find({});
  res.status(200).json({ foodItems });
});

// @route   GET /api/food/:id
// @desc    Get single food item by ID
// @access  Private
export const getFoodItemById = asyncHandler(async (req, res) => {
  const foodItem = await FoodItem.findById(req.params.id);
  res.status(200).json(foodItem);
});

// @route   POST /api/food
// @desc    Create new food item
// @access  Private
export const createFoodItem = asyncHandler(async (req, res) => {
  const foodItem = await FoodItem.create(req.body);
  res.status(200).json(foodItem);
});

// @route   PUT /api/food/:id
// @desc    Update food item by ID
// @access  Private
export const updateFoodItemById = asyncHandler(async (req, res) => {
  const { name, category, calories, protein, carbohydrate, fat } = req.body;
  const foodItem = await FoodItem.findById(req.params.id);
  if (!foodItem) {
    res.status(404);
    throw new Error('Food item not found');
  }
  const updatedFoodItem = await FoodItem.findByIdAndUpdate(req.params.id, {
    name,
    category,
    calories,
    protein,
    carbohydrate,
    fat,
  }, 
  { new: true}
);
  res.status(200).json(updatedFoodItem);
});

// @route   DELETE /api/food/:id
// @desc    Delete food item by ID
// @access  Private
export const deleteFoodItemById = asyncHandler(async (req, res) => {
  const foodItem = await FoodItem.findById(req.params.id);

  if (!foodItem) {
    res.status(404);
    throw new Error('Food item not found');
  }

  await FoodItem.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: 'Food item removed' });
});
