import mongoose from 'mongoose';

const { Schema } = mongoose;

const favouriteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    food_id: {
      type: String,
      required: true,
    },
    food_name: {
      type: String,
      required: true,
    },
    food_description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index to prevent duplicate favorites for a user
favouriteSchema.index({ user: 1, food_id: 1 }, { unique: true });

const Favourite = mongoose.model('Favourite', favouriteSchema);

export default Favourite;