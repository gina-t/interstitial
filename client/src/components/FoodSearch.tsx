import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as fatsecretService from '../services/fatsecretService';
import { type FoodItem } from '../interfaces/FoodSearchResult';
import {
  isFavourite,
  addToFavourites,
  removeFromFavourites,
} from '../utils/favourites';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

export default function FoodSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [favourites, setFavourites] = useState<Record<string, boolean>>({});

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
      }
    }
  };
  // const checkFavourites = async () => {
  //   try {
  //     const foodIds = searchResults.map(food => food.food_id);
  //     const favStatus = await checkMultipleFavorites(foodIds);
      
  //     if (isMounted) {
  //       setFavourites(favStatus);
  //     }
  //   } catch (error) {
  //     console.error('Error checking favourites status:', error);
  //   }
  // };

  return (
    <div className="bg-transparent">
      {/* Search form */}
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Food Search</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>To display its nutritional value, search for a food item.</p>
        </div>

        <form onSubmit={search} className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <input
              id="search"
              name="search"
              type="text"
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

        {error && <div className="mt-4 text-sm text-red-600">{error}</div>}

        {/* Search results */}
        {searchResults.length > 0 && (
          <div className="mt-6">
            <h4 className="text-base font-semibold text-gray-900">
              Search Results
            </h4>
            <ul className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
              {searchResults.map((food) => (
                <li key={food.food_id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {food.food_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {food.food_description || 'No description available'}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* View details button */}
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-indigo-600"
                        onClick={() =>
                          handleViewDetails(food.food_id, food.food_name)
                        }
                      >
                        View
                      </button>
                      {/* Add to Favourites button */}
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-indigo-600"
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
                          <HeartOutline className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
