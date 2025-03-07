import { type FoodItem, type SearchResponse, type FoodResponse } from '../interfaces/FoodSearchResult';
import axios from 'axios';
const API_URL = '/api/fatsecret';

/**
 * Search for foods by query term
 */
export async function searchFoods(query: string): Promise<SearchResponse> {
  try {
    const response = await axios.get(
      `${API_URL}/search?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error('Error searching foods:', error);
    throw error;
  }
}

/**
 * Get food data by ID
 */
export async function getFoodData(foodId: string): Promise<FoodResponse> {
  try {
    const response = await axios.get(`${API_URL}/food/${foodId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error;
  }
}

/**
 * Get food data by barcode
 */
export async function getFoodByBarcode(barcode: string): Promise<FoodResponse> {
  try {
    const response = await axios.get(`${API_URL}/barcode/${barcode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching food by barcode:', error);
    throw error;
  }
}

/**
 * Get most popular foods
 */
export async function getPopularFoods(): Promise<FoodItem[]> {
  try {
    const response = await axios.get(`${API_URL}/popular`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular foods:', error);
    throw error;
  }
}
