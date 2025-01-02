// contains the functions that handle the logic for each route
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/authUtils.js';

// @route   POST /api/user/
// @desc    Register a new user
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (!user) {
    res.status(400);
    throw new Error('Invalid user data');
  }

  res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: generateToken(user._id), // Generate token if user registers or logsin
  });
});

// @route   POST /api/user/login
// @desc    Authenticate a user
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id), // Generate token if user registers or logsin
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @route   PUT /api/user/:id
// @desc    Update user 
// @access  Private
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  user.username = req.body.username || user.username;
  user.email = req.body.email || user.email;
  user.password = req.body.password || user.password;
  const updatedUser = await user.save();
  res.status(200).json(updatedUser);
});

// @route   GET /api/user/data
// @desc    Get user data 
// @access  Private
// Use this to protect a route with middleware
export const getUserData = asyncHandler(async (req, res) => {
  try {
    console.log('User ID from req.user:', req.user._id); // Debugging statement
    const user = await User.findById(req.user._id).select('-password');
    console.log('Fetched User:', user); // Debugging statement

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error); // Detailed debugging statement
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/user/:id
// @desc    Get user by ID
// @access  Private
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @route   DELETE /api/user/:id
// @desc    Delete user by ID
// @access  Private
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: 'User removed' });
});

