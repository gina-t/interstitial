import asyncHandler from 'express-async-handler';
import Favourite from '../models/favouriteModel.js';

// @route   GET /api/favourites
// @desc    Get user favourites
// @access  Private
export const getFavourites = asyncHandler(async (req, res) => {
  const favourites = await Favourite.find({ user: req.user._id });
  res.status(200).json(favourites);
});

// @route   POST /api/favourites
// @desc    Add a food to favourites
// @access  Private
export const addFavourite = asyncHandler(async (req, res) => {
  const { food_id, food_name, food_description } = req.body;

  if (!food_id || !food_name) {
    res.status(400);
    throw new Error('Please provide food_id and food_name');
  }

  // Check if already in favourites
  const existing = await Favourite.findOne({
    user: req.user._id,
    food_id,
  });

  if (existing) {
    res.status(400);
    throw new Error('Food already in favourites');
  }

  // Create favourite
  const favourite = await Favourite.create({
    user: req.user._id,
    food_id,
    food_name,
    food_description,
  });

  res.status(201).json(favourite);
});

// @route   DELETE /api/favourites/:foodId
// @desc    Remove a food from favourites
// @access  Private
export const removeFavourite = asyncHandler(async (req, res) => {
  const favourite = await Favourite.findOneAndDelete({
    user: req.user._id,
    food_id: req.params.foodId,
  });

  if (!favourite) {
    res.status(404);
    throw new Error('Favourite not found');
  }

  res.status(200).json({ message: 'Favourite removed' });
});

// @route   GET /api/favourites/check/:foodId
// @desc    Check if a food is in favourites
// @access  Private
export const checkFavourite = asyncHandler(async (req, res) => {
  const favourite = await Favourite.findOne({
    user: req.user._id,
    food_id: req.params.foodId,
  });

  res.status(200).json({ isFavourite: !!favourite });
});