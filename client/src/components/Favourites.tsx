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
    let isMounted = true;

    const fetchFavourites = async () => {
      try {
        setIsLoading(true);
        const favItems = await getFavourites();
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

    return () => {
      isMounted = false;
    };
  }, []);

  async function loadFavourites() {
    try {
      setIsLoading(true);
      setError(null);
      const favItems = await getFavourites();
      setFavourites(favItems);
    } catch (error) {
      console.error('Error loading favourites:', error);
      setFavourites([]);
      setError('Failed to load favourites. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleAddCalories(food: FavouriteFoodItem) {
    const calories = extractCalories(food.food_description);

    if (calories > 0) {
      addCalories(calories);
      setAddedFoods((prev) => ({ ...prev, [food.food_id]: true }));

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
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-16 sm:py-28 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h4 className="text-base/7 font-semibold text-indigo-600">
                My Favourite Foods
              </h4>

              <div className="mt-2 max-w-xl text-sm text-gray-500 flex items-center flex-wrap gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-600 mr-1" />
                  <span>Add calories</span>
                </div>
                <div className="flex items-center">
                  <XMarkIcon className="h-4 w-4 text-indigo-600 mr-1" />
                  <span>Remove food</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content area for favorites display */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            {isLoading ? (
              <div className="py-8 text-center">
                <p className="text-gray-500">Loading your favourite foods...</p>
              </div>
            ) : error ? (
              <div className="py-8 text-center">
                <p className="text-red-500">{error}</p>
                <button
                  onClick={() => loadFavourites()}
                  className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white"
                >
                  Try Again
                </button>
              </div>
            ) : favourites.length === 0 ? (
              <div className="py-8 text-center">
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
                            {extractCalories(food.food_description)} calories
                            per 100g
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* CheckIcon Button */}
                      <button
                        type="button"
                        className={`rounded-md bg-white p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 ${
                          addedFoods[food.food_id]
                            ? 'text-green-600'
                            : 'hover:bg-gray-50'
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
      </div>
    </div>
  );
}
