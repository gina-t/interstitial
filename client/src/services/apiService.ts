import axios from 'axios';
import { type FoodData } from '../interfaces/FoodData';
import Auth from '../utils/auth';

// Base URL for API calls - adjust if needed based on your environment
const API_BASE_URL = '/api/food';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add authorization header
api.interceptors.request.use(
  (config) => {
    const token = Auth.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Get all food items
 */
export const getFoodItems = async (): Promise<FoodData[]> => {
  try {
    const response = await api.get('/food');
    return response.data.foodItems;
  } catch (error) {
    console.error('Error fetching all food items:', error);
    throw error;
  }
};

/**
 * Get user's food items
 */
export const getUserFoodItems = async (): Promise<FoodData[]> => {
  try {
    // Note: Since '/user' comes after '/:id' in your routes,
    // we need to be careful about how we structure this request
    const response = await api.get('/food/user');
    return response.data.foodItems;
  } catch (error) {
    console.error('Error fetching user food items:', error);
    throw error;
  }
};

/**
 * Get a single food item by ID
 */
export const getFoodItemById = async (id: string): Promise<FoodData> => {
  try {
    const response = await api.get(`/food/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching food item ${id}:`, error);
    throw error;
  }
};

/**
 * Create a new food item
 */
export const createFoodItem = async (
  foodData: Partial<FoodData>
): Promise<FoodData> => {
  try {
    const response = await api.post('/food', foodData);
    return response.data;
  } catch (error) {
    console.error('Error creating food item:', error);
    throw error;
  }
};

/**
 * Update a food item
 */
export const updateFoodItemById = async (
  id: string,
  foodData: Partial<FoodData>
): Promise<FoodData> => {
  try {
    const response = await api.put(`/food/${id}`, foodData);
    return response.data;
  } catch (error) {
    console.error(`Error updating food item ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a food item
 */
export const deleteFoodItemById = async (
  id: string
): Promise<{ message: string }> => {
  try {
    const response = await api.delete(`/food/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting food item ${id}:`, error);
    throw error;
  }
};

/**
 * Save a food item from FatSecret to the user's database
 */
export const saveFatSecretFood = async (
  foodData: Partial<FoodData>
): Promise<FoodData> => {
  try {
    // Make sure to include the source
    foodData.source = 'FatSecret';

    // Post the food data to our API
    const response = await api.post('/food', foodData);
    return response.data;
  } catch (error) {
    console.error('Error saving FatSecret food:', error);
    throw error;
  }
};
