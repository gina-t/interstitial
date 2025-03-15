import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFavourites, removeFromFavourites } from '../utils/favourites';
import { type FavouriteFoodItem } from '../interfaces/FavouriteFoodItem';
import { GradientBackground } from '../components/Gradient';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState<FavouriteFoodItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  // Change from synchronous to async function
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

  function handleViewDetails(foodId: string, foodName: string) {
    navigate(`/food/${foodId}`, { state: { foodName } });
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
      <GradientBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          My favourite foods
        </h1>

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
            <p className="text-gray-500">No favourite foods saved.</p>
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
                  <p className="text-xs text-gray-400">
                    Added {new Date(food.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() =>
                      handleViewDetails(food.food_id, food.food_name)
                    }
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-white p-1.5 text-xs font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => handleRemoveFavourite(food.food_id)}
                    aria-label="Remove from favorites"
                  >
                    <TrashIcon className="h-4 w-4" />
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
