import mongoose from 'mongoose';

const { Schema } = mongoose;

const foodItemSchema = Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: false,
  },
  carbohydrate: {
    type: Number,
    required: false,
  },
  fat: {
    type: Number,
    required: false,
  },
  servingSize: {
    amount: { type: Number, required: false },
    unit: { type: String, required: false }, // e.g., grams, ounces, etc.
  },
  fiber: {
    type: Number,
    required: false,
  },
  sugars: {
    type: Number,
    required: false,
  },
  sodium: {
    type: Number,
    required: false,
  },
  cholesterol: {
    type: Number,
    required: false,
  },
  source: {
    type: String,
    default: 'CalorieKing',
  },
}, { 
  timestamps: true, 
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

export default FoodItem;