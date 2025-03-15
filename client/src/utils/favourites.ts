import axios from 'axios';
import { FoodItem } from '../interfaces/FoodSearchResult';
import { FavouriteFoodItem } from '../interfaces/FavouriteFoodItem';
import auth from './auth';

const API_URL = '/api/favourites';

// Get the token for authenticated requests
const getToken = () => {
  const token = auth.getToken();
  if (!token) {
    console.log('No token available from auth service');
  }
  return token;
};

export function isAuthenticated(): boolean {
  return auth.loggedIn();
}

// Add authorization header to requests
const authConfig = () => {
  const token = getToken();
  console.log('Auth token present:', !!token);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

/**
 * Test authentication status
 */
export async function testAuth(): Promise<boolean> {
  try {
    await axios.get(`${API_URL}/test-auth`, authConfig());
    console.log('Authentication successful');
    return true;
  } catch (error: unknown) {
    console.error('Authentication test failed:', error);
    return false;
  }
}

/**
 * Get all favourite food items for the logged-in user
 */
export async function getFavourites(): Promise<FavouriteFoodItem[]> {
  try {
    const response = await axios.get(API_URL, authConfig());
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.error('Authentication failed when fetching favourites');
    } else {
      console.error('Error fetching favourites:', error);
    }
    return [];
  }
}

/**
 * Add a food item to favourites
 */
export async function addToFavourites(food: FoodItem): Promise<boolean> {
  try {
    await axios.post(
      API_URL,
      {
        food_id: food.food_id,
        food_name: food.food_name,
        food_description: food.food_description,
      },
      authConfig()
    );
    return true;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.error('Authentication failed when adding to favourites');
    } else {
      console.error('Error adding to favourites:', error);
    }
    return false;
  }
}

/**
 * Remove a food item from favourites
 */
export async function removeFromFavourites(foodId: string): Promise<boolean> {
  try {
    await axios.delete(`${API_URL}/${foodId}`, authConfig());
    return true;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.error('Authentication failed when removing from favourites');
    } else {
      console.error('Error removing from favourites:', error);
    }
    return false;
  }
}

/**
 * Check if a food item is in favourites
 */
export async function isFavourite(foodId: string): Promise<boolean> {
  try {
    const response = await axios.get(
      `${API_URL}/check/${foodId}`,
      authConfig()
    );
    return response.data.isFavourite;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.error('Authentication failed when checking favourite status');
    } else {
      console.error('Error checking favourite status:', error);
    }
    return false;
  }
}
