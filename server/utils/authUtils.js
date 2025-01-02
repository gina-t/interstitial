import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Generate JWT
// Once a user is authenticated, i.e. their password is verified using bcrypt, a JWT is generated and sent to the client.
// The client includes the JWT in the Authorisation header of subsequent requests.
// The server verifies the JWT using the JWT secret and grants access to protected routes.
// JWT is used to to authorise access to protected routes.
// When making a request to a protected route, the client includes the JWT in the Authorisation header.

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};