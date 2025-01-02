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
  if ( foodItem ) {
    res.status(200).json(foodItem);
  } else {
    res.status(404).json({ message: 'Food item not found' });
  }
  
});

// @route   POST /api/food
// @desc    Create new food item
// @access  Private
export const createFoodItem = asyncHandler(async (req, res) => {
  const { name, brand, category, calories } = req.body;

  if (!name || !brand || !category || !calories) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  const foodItem = new FoodItem({
    name,
    brand,
    category,
    calories,
    user: req.user._id, // Ensure user field is set
  });

  const createdFoodItem = await foodItem.save();
  res.status(201).json(createdFoodItem);
});

// @route   PUT /api/food/:id
// @desc    Update food item by ID
// @access  Private
export const updateFoodItemById = asyncHandler(async (req, res) => {
  const { name, brand, category, calories } = req.body;

  const foodItem = await FoodItem.findById(req.params.id);

  if (foodItem) {
    // Check if the user making the request is the owner of the food item
    if (!foodItem.user || !req.user || !req.user._id || foodItem.user.toString() !== req.user._id.toString()){
      res.status(401);
      throw new Error('Not authorized to update this food item');
    }

    foodItem.name = name || foodItem.name;
    foodItem.brand = brand || foodItem.brand;
    foodItem.category = category || foodItem.category;
    foodItem.calories = calories || foodItem.calories;

    const updatedFoodItem = await foodItem.save();
    res.status(200).json(updatedFoodItem);
  } else {
    res.status(404).json({ message: 'Food item not found' });
  }
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
