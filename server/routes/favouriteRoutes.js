import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getFavourites,
  addFavourite,
  removeFavourite,
  checkFavourite,
} from '../controllers/favouriteController.js';

const router = express.Router();

router.get('/', protect, getFavourites);
router.post('/', protect, addFavourite);
router.delete('/:foodId', protect, removeFavourite);
router.get('/check/:foodId', protect, checkFavourite);

export default router;