// contains the functions that handle the logic for each route
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/authUtils.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

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

// @route   POST /api/user/reset-password
// @desc    Generate reset token and send email
// @access  Public
export const requestPasswordReset = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  
  if (!user) {
    // Don't reveal that the user doesn't exist (security best practice)
    return res.status(200).json({ 
      message: 'If your email exists in our system, you will receive a password reset link.' 
    });
  }
  
  // Generate token
  const resetToken = crypto.randomBytes(32).toString('hex');
  const tokenExpiry = Date.now() + 3600000; // 1 hour from now
  
  // Save token to user
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = tokenExpiry;
  await user.save();
  
  // Create reset URL (use environment variable for frontend URL)
  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/reset-password/${resetToken}`;
  
  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or use another service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Password Reset Request',
    html: `
      <p>You requested a password reset for your Interstitial account.</p>
      <p>Please click on the following link to reset your password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
      <p>This link will expire in 1 hour.</p>
      <p>If you did not request this, please ignore this email.</p>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Password reset email sent' });
  } catch (emailError) {
    console.error('Error sending email:', emailError);
    res.status(500).json({ message: 'Error sending password reset email' });
  }
});

// @route   POST /api/user/reset-password/confirm
// @desc    Reset password with token
// @access  Public
export const confirmPasswordReset = asyncHandler(async (req, res) => {
  const { token, newPassword } = req.body;
  
  // Find user with this token and validate it's not expired
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() }
  });
  
  if (!user) {
    res.status(400);
    throw new Error('Password reset token is invalid or has expired');
  }
  
  // Hash the new password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  
  // Update user
  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  
  res.status(200).json({ message: 'Password has been reset successfully' });
});
