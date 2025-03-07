import mongoose from 'mongoose';

const { Schema } = mongoose;

const foodItemSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // Core identifiers
    foodId: {
      type: String, // FatSecret food_id
      required: false,
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
    // Core nutrients (always present)
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
    // Serving information
    servingSize: {
      amount: { type: Number, required: false },
      unit: { type: String, required: false }, // e.g., grams, ounces, etc.
    },
    servingId: {
      type: String, // FatSecret serving_id
      required: false,
    },
    // Additional nutrients (might not always be present)
    fiber: {
      type: Number,
      required: false,
    },
    sugar: {
      // Changed from sugars to match FatSecret naming
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
    // Additional nutrients available in FatSecret
    saturatedFat: {
      type: Number,
      required: false,
    },
    polyunsaturatedFat: {
      type: Number,
      required: false,
    },
    monounsaturatedFat: {
      type: Number,
      required: false,
    },
    transFat: {
      type: Number,
      required: false,
    },
    potassium: {
      type: Number,
      required: false,
    },
    addedSugars: {
      type: Number,
      required: false,
    },
    vitaminD: {
      type: Number,
      required: false,
    },
    vitaminA: {
      type: Number,
      required: false,
    },
    vitaminC: {
      type: Number,
      required: false,
    },
    calcium: {
      type: Number,
      required: false,
    },
    iron: {
      type: Number,
      required: false,
    },
    source: {
      type: String,
      default: 'FatSecret', // Changed to reflect the new data source
    },
  },
  {
    timestamps: true,
  }
);

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

export default FoodItem;
