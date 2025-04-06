import express from 'express';
import { registerUser, loginUser, getUserById, updateUser, getUserData, deleteUser, requestPasswordReset, confirmPasswordReset } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser); // Public route for user registration
router.post('/login', loginUser); // Public route for user login
router.post('/reset-password', requestPasswordReset);
router.post('/reset-password/confirm', confirmPasswordReset);
router.get('/data', protect, getUserData); // Protected route to get user data
router.get('/:id', protect, getUserById); // Protected route to get user by ID
router.put('/:id', protect, updateUser); // Protected route to update user
router.delete('/:id', protect, deleteUser); // Protected route to delete user

export default router;