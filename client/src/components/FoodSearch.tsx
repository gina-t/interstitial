import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as fatsecretService from '../services/fatsecretService';
import { type FoodItem } from '../interfaces/FoodSearchResult';
import {
  isFavourite,
  addToFavourites,
  removeFromFavourites,
} from '../utils/favourites';
import { ArrowRightIcon, ChevronRightIcon, HeartIcon as HeartOutline } from '@heroicons/react/24/outline';

import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';


export default function FoodSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [favourites, setFavourites] = useState<Record<string, boolean>>({});
  const [showViewFavouritesButton, setShowViewFavouritesButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // useEffect to handle URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('q');

    if (queryParam) {
      // Set the search input value
      const searchInput = document.getElementById('search') as HTMLInputElement;
      if (searchInput) {
        searchInput.value = queryParam;
        performSearch(queryParam);
      }
    }
  }, [location.search]);

  // handles the actual search operation
  const performSearch = async (query: string) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fatsecretService.searchFoods(query);
      if (response?.foods?.food) {
        // Handle both single result and array of results
        const foods = Array.isArray(response.foods.food)
          ? response.foods.food
          : [response.foods.food];

        setSearchResults(foods);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to search for foods. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect to check favourites status
  useEffect(() => {
    // Skip if no search results
    if (searchResults.length === 0) return;

    let isMounted = true;

    // Async function to check favorites status
    const checkFavourites = async () => {
      try {
        const favStatus: Record<string, boolean> = {};

        for (const food of searchResults) {
          if (!isMounted) return;
          const isFav = await isFavourite(food.food_id);
          favStatus[food.food_id] = isFav;
        }

        // Update state if component is still mounted
        if (isMounted) {
          setFavourites(favStatus);
        }
      } catch (error) {
        console.error('Error checking favourites status:', error);
      }
    };

    checkFavourites();
    return () => {
      isMounted = false;
    };
  }, [searchResults]);

  // event handler that handles the form submission event
  async function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const searchTerm = (event.target as HTMLFormElement).search.value;

    if (!searchTerm.trim()) {
      return;
    }

    // Update URL to include search query
    navigate(`/foodsearch?q=${encodeURIComponent(searchTerm)}`, {
      replace: true,
    });

    // Store in localStorage for persistence
    localStorage.setItem('lastSearchQuery', searchTerm);

    // Use the common search function
    performSearch(searchTerm);
  }

  function handleViewDetails(foodId: string, foodName: string) {
    // Get current search from URL
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('q') || '';

    // Navigate with search query in state
    navigate(`/food/${foodId}`, {
      state: {
        foodName,
        searchQuery,
      },
    });
  }

  async function handleToggleFavourite(food: FoodItem) {
    if (favourites[food.food_id]) {
      // Remove from favorites
      const success = await removeFromFavourites(food.food_id);
      if (success) {
        setFavourites((prev) => ({
          ...prev,
          [food.food_id]: false,
        }));
      }
    } else {
      // Add to favorites
      const success = await addToFavourites(food);
      if (success) {
        setFavourites((prev) => ({
          ...prev,
          [food.food_id]: true,
        }));
        setShowViewFavouritesButton(true);
      }
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-16 sm:py-28 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">

              {/* Food search */}
              <h4 className="text-lg/7 font-semibold text-indigo-600">
                Food Search
              </h4>

              <div className="mt-3 max-w-xl text-base/7 text-gray-900">
                <p className="mb-1">Find nutritional information and track your daily intake:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Search for any food to view detailed nutrition facts</li>
                  <li>Save favourites with the 
                    <HeartOutline className="h-4 w-4 text-gray-400 inline mx-1" /> 
                    heart icon
                  </li>
                  <li>Track your daily calories in the My Favourites page</li>
                </ul>
              </div>
            
              {/* Search form */}
              <form onSubmit={search} className="mt-5 sm:flex sm:items-center">
                <div className="w-full sm:max-w-xs">
                  <input
                    id="search"
                    name="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="hummus"
                    aria-label="Food search"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
                  disabled={isLoading}
                >
                  {isLoading ? 'Searching...' : 'Search'}
                </button>
              </form>

              {error && (
                <div className="mt-4 text-sm text-red-600">{error}</div>
              )}
            </div>
          </div>
        </div>

        {/* Search results */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            {searchResults.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg/7 font-semibold text-indigo-600">
                  Search Results
                </h4>

                <ul className="mt-6 divide-y divide-gray-100 border-t border-gray-200">
                  {searchResults.map((food) => (
                    <li
                      key={food.food_id}
                      className="py-4 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-base font-medium text-gray-900">
                          {food.food_name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {food.food_description || 'No description available'}
                        </p>
                        
                      </div>

                      <div className="flex items-center space-x-2">
                        
                        {/* View button */}
                        <button
                          type="button"
                          className="rounded-md bg-white p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => handleViewDetails(food.food_id, food.food_name)}
                          aria-label={`View details for ${food.food_name}`}
                        >
                          <ChevronRightIcon className="h-4 w-4 text-indigo-600" />
                        </button>

                        {/* Add to Favourites button */}
                        <button
                          type="button"
                          className="rounded-md bg-white p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => handleToggleFavourite(food)}
                          aria-label={
                            favourites[food.food_id]
                              ? 'Remove from favorites'
                              : 'Add to favorites'
                          }
                        >
                          {favourites[food.food_id] ? (
                            <HeartSolid className="h-4 w-4 text-indigo-600" />
                          ) : (
                            <HeartOutline className="h-4 w-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Navigate to favourites button */}
                {showViewFavouritesButton && (
                 <div className="mt-6 flex justify-start">
                  <button 
                    onClick={() => navigate('/favourites')}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-600 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    // className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View My Favourites
                    <ArrowRightIcon className="h-3 w-3 ml-2" />
                  </button>
                </div>
              )}
              </div>
            )}
          </div>
        </div> 
      </div> 
    </div>
  );
}
