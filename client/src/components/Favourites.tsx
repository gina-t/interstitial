import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFavourites, removeFromFavourites } from '../utils/favourites';
import { type FavouriteFoodItem } from '../interfaces/FavouriteFoodItem';
import useCalorieTracker from '../hooks/useCalorieTracker';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

// Extract calories from food description string
function extractCalories(description: string | undefined): number {
  if (!description) return 0;

  // Look for the pattern "Calories: XXkcal" in the description
  const match = description.match(/Calories:\s*(\d+(?:\.\d+)?)\s*kcal/i);

  if (match && match[1]) {
    return parseFloat(match[1]);
  }

  return 0;
}

export default function Favourites() {
  const [favourites, setFavourites] = useState<FavouriteFoodItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [addedFoods, setAddedFoods] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const { addCalories } = useCalorieTracker();

  useEffect(() => {
    // Create a flag to prevent state updates after unmount
    let isMounted = true;

    // Inner async function
    const fetchFavourites = async () => {
      try {
        setIsLoading(true);
        const favItems = await getFavourites();
        // Only update state if component is still mounted
        if (isMounted) {
          setFavourites(favItems);
        }
      } catch (error) {
        console.error('Error loading favourites:', error);
        if (isMounted) {
          setFavourites([]);
          setError('Failed to load favourites. Please try again.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchFavourites();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []);

  async function loadFavourites() {
    try {
      setIsLoading(true);
      setError(null);
      const favItems = await getFavourites(); // await the Promise
      setFavourites(favItems); // Now favItems is the resolved value, not a Promise
    } catch (error) {
      console.error('Error loading favourites:', error);
      setFavourites([]); // Set empty array on error
      setError('Failed to load favourites. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  // async function checkMultipleFavorites(foodIds: string[]): Promise<Record<string, boolean>> {
  //   const result: Record<string, boolean> = {};
  //   const allFavorites = await getAllFavorites();
    
  //   foodIds.forEach(id => {
  //     result[id] = allFavorites.some(fav => fav.food_id === id);
  //   });
    
  //   return result;
  // }

  function handleAddCalories(food: FavouriteFoodItem) {
    // Extract calories from food description
    const calories = extractCalories(food.food_description);

    // Add to calorie tracker
    if (calories > 0) {
      addCalories(calories);

      // Update the added status for visual feedback
      setAddedFoods((prev) => ({ ...prev, [food.food_id]: true }));

      // Reset after a delay
      setTimeout(() => {
        setAddedFoods((prev) => ({ ...prev, [food.food_id]: false }));
      }, 2000);
    }
  }

  async function handleRemoveFavourite(foodId: string) {
    try {
      await removeFromFavourites(foodId);
      await loadFavourites();
    } catch (error) {
      console.error('Error removing favourite:', error);
      setError('Failed to remove item from favourites. Please try again.');
    }
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-lg font-medium text-gray-900">
          My Favourite Foods
        </h1>

        <div className="flex items-center text-xs text-gray-500">
          <CheckIcon className="h-3 w-3 text-green-600 mr-1" />
          <span> Add calories</span>
          <XMarkIcon className="h-3 w-3 ml-2 mr-1 text-indigo-600" />
          <span> Remove food</span>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading your favourite foods...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
            <button
              onClick={() => loadFavourites()}
              className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white"
            >
              Try Again
            </button>
          </div>
        ) : favourites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No favourite foods saved</p>
            <button
              onClick={() => navigate('/foodsearch')}
              className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white"
            >
              Search Foods
            </button>
          </div>
        ) : (
          <ul className="mt-6 divide-y divide-gray-100">
            {favourites.map((food) => (
              <li
                key={food.food_id}
                className="py-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {food.food_name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {food.food_description || 'No description available'}
                  </p>
                  <div className="flex items-center">
                    <p className="text-xs text-gray-400 mr-2">
                      Added {new Date(food.createdAt).toLocaleDateString()}
                    </p>
                    {extractCalories(food.food_description) > 0 && (
                      <span className="text-xs font-medium text-green-600">
                        {extractCalories(food.food_description)} calories per
                        100g
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* CheckIcon Button */}
                  <button
                    type="button"
                    className={`rounded-md bg-white p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 ${
                      addedFoods[food.food_id] ? 'text-green-600' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleAddCalories(food)}
                    disabled={addedFoods[food.food_id]}
                    title="Add to Calorie Tracker"
                  >
                    {addedFoods[food.food_id] ? (
                      'Added'
                    ) : (
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    )}
                  </button>

                  {/* XMarkIcon Button */}
                  <button
                    type="button"
                    className="rounded-md bg-white p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => handleRemoveFavourite(food.food_id)}
                    aria-label="Remove from favorites"
                  >
                    <XMarkIcon className="h-4 w-4 text-indigo-600" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
