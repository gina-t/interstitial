// contains the functions that handle the logic for each route

import asyncHandler from 'express-async-handler';
import FoodItem from '../models/foodModel.js';

// @route   GET /api/food
// @desc    Get all food items
// @access  Public
export const getFoodItems = asyncHandler(async (req, res) => {
  const foodItems = await FoodItem.find({});
  res.status(200).json({ foodItems });
});

// @route   GET /api/food/:id
// @desc    Get single food item by ID
// @access  Public
export const getFoodItemById = asyncHandler(async (req, res) => {
  const foodItem = await FoodItem.findById(req.params.id);
  if (foodItem) {
    res.status(200).json(foodItem);
  } else {
    res.status(404).json({ message: 'Food item not found' });
  }
});

// @route   POST /api/food
// @desc    Create new food item
// @access  Private
export const createFoodItem = asyncHandler(async (req, res) => {
  const {
    name,
    brand,
    category,
    calories,
    foodId,
    protein,
    carbohydrate,
    fat,
    servingSize,
    servingId,
    fiber,
    sugar,
    sodium,
    cholesterol,
    saturatedFat,
    polyunsaturatedFat,
    monounsaturatedFat,
    transFat,
    potassium,
    addedSugars,
    vitaminD,
    vitaminA,
    vitaminC,
    calcium,
    iron,
    source,
  } = req.body;

  // Only name, category and calories are required
  if (!name || !category || !calories) {
    res.status(400);
    throw new Error('Please provide name, category and calories');
  }

  const foodItem = new FoodItem({
    user: req.user._id,
    name,
    brand,
    category,
    calories,
    foodId,
    protein,
    carbohydrate,
    fat,
    servingSize,
    servingId,
    fiber,
    sugar,
    sodium,
    cholesterol,
    saturatedFat,
    polyunsaturatedFat,
    monounsaturatedFat,
    transFat,
    potassium,
    addedSugars,
    vitaminD,
    vitaminA,
    vitaminC,
    calcium,
    iron,
    source: source || 'FatSecret',
  });

  const createdFoodItem = await foodItem.save();
  res.status(201).json(createdFoodItem);
});

// @route   PUT /api/food/:id
// @desc    Update food item by ID
// @access  Private
export const updateFoodItemById = asyncHandler(async (req, res) => {
  const foodItem = await FoodItem.findById(req.params.id);

  if (!foodItem) {
    res.status(404);
    throw new Error('Food item not found');
  }

  // Check if the user making the request is the owner of the food item
  if (
    !foodItem.user ||
    !req.user ||
    !req.user._id ||
    foodItem.user.toString() !== req.user._id.toString()
  ) {
    res.status(401);
    throw new Error('Not authorized to update this food item');
  }

  // Update all fields that are sent in the request
  Object.keys(req.body).forEach((key) => {
    // Skip the user field to prevent ownership changes
    if (key !== 'user') {
      foodItem[key] = req.body[key];
    }
  });

  const updatedFoodItem = await foodItem.save();
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

  // Check if the user making the request is the owner of the food item
  if (foodItem.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to delete this food item');
  }

  await foodItem.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: 'Food item deleted' });
});

// @route   GET /api/food/user
// @desc    Get all food items for the logged in user
// @access  Private
export const getUserFoodItems = asyncHandler(async (req, res) => {
  const foodItems = await FoodItem.find({ user: req.user._id });
  res.status(200).json({ foodItems });
});
