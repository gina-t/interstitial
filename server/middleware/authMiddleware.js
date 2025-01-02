// To make a route protected, you need to create a middleware function that verifies the JWT token inclcuded in the request header. If the token is valid, the middleware allows the request to proceed. If the token is invalid, the middleware returns an error response.
// Middleware is a function that runs during the request-response cycle. It has access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.
// The protect middleware function verifies the presence of a JWT token in the Authorisation header.
// If the token is present and valid, the middleware decodes the token to get the user id and fetches the user from the database, allowing the request to proceed.
// If the token is invalid, the middleware returns an error response.
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Token:', token); // Debugging statement

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded ID:', decoded.id); // Debugging statement

      req.user = await User.findById(decoded.id).select('-password');
      console.log('User:', req.user); // Debugging statement

      if (!req.user) {
        res.status(401);
        throw new Error('User not found');
      }

      next();
    } catch (error) {
      console.error('Error:', error); // Debugging statement
      res.status(401); // 401 means unauthorized
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});