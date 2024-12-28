// contains the functions that handle the logic for each route
import asyncHandler from 'express-async-handler';

// @route   GET /api/food
// @desc    Get all food items
// @access  Private
export const getFoodItems = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get all food items' });
});

// @route   GET /api/food/:id
// @desc    Get single food item by ID
// @access  Private
export const getFoodItemById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: 'Get food item by id' });
});

// @route   POST /api/food
// @desc    Create new food item
// @access  Private
export const createFoodItem = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, calories } = req.body;
  res.status(200).json(`Create new food item: ${name} with ${calories} calories`);
});

// @route   PUT /api/food/:id
// @desc    Update food item by ID
// @access  Private
export const updateFoodItemById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, calories } = req.body;
  res.status(200).json(`Update food item with ID: ${id} to ${name} with ${calories} calories`);
});

// @route   DELETE /api/food/:id
// @desc    Delete food item by ID
// @access  Private
export const deleteFoodItemById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json(`Delete food item with ID: ${id}`);
});
