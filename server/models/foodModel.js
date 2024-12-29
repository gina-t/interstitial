import mongoose from 'mongoose';

const { Schema } = mongoose;

const foodItemSchema = Schema({
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
    required: true,
  },
  carbohydrate: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
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