// proxy server route that handles API calls to FatSecret
import axios from 'axios';
import asyncHandler from 'express-async-handler';
// Environment variables for credentials
const clientID = process.env.FATSECRET_CLIENT_ID;
const clientSecret = process.env.FATSECRET_CLIENT_SECRET;

// Track token expiration
let accessToken = null;
let tokenExpiration = 0;

/**
 * Fetch a new access token from FatSecret OAuth server
 */
async function fetchFatSecretToken() {
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append('scope', 'basic');

  const options = {
    method: 'POST',
    url: 'https://oauth.fatsecret.com/connect/token',
    auth: {
      username: clientID,
      password: clientSecret,
    },
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data,
  };

  try {
    const response = await axios(options);
    const tokenData = response.data;

    // Set expiration time (current time + expires_in seconds)
    tokenExpiration = Date.now() + tokenData.expires_in * 1000;
    accessToken = tokenData.access_token;

    return tokenData;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
}

/**
 * Get a valid access token, fetching a new one if needed
 */
async function getAccessToken() {
  // If token doesn't exist or is expired (with 5 min buffer)
  if (!accessToken || Date.now() > tokenExpiration - 300000) {
    const tokenResponse = await fetchFatSecretToken();
    return tokenResponse.access_token;
  }
  return accessToken;
}

// @route   GET /api/fatsecret/search
// @desc    Search for foods
// @access  Public
export const searchFoods = asyncHandler(async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  const token = await getAccessToken();

  console.log('Making request with token:', token);
  const response = await axios.get('https://platform.fatsecret.com/rest/server.api', {
    params: {
      method: 'foods.search',
      search_expression: query,
      format: 'json',
      max_results: 10
    },
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  console.log("FatSecret response:", response.data);
  res.json(response.data);
});

// @route   GET /api/fatsecret/food/:id
// @desc    Get food details
// @access  Public
export const getFoodById = asyncHandler(async (req, res) => {
  const foodId = req.params.id;
  const token = await getAccessToken();
  
  const response = await axios.get('https://platform.fatsecret.com/rest/server.api', {
    params: {
      method: 'food.get.v2',  // Note: v2 method
      food_id: foodId,
      format: 'json',
      flag_default_serving: true,
      unit: 'm'
    },
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  res.json(response.data);
});