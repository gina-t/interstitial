import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as fatsecretService from '../services/fatsecretService';
import { type FoodItem } from '../interfaces/FoodSearchResult';

export default function FoodSearch() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const searchTerm = (event.target as HTMLFormElement).search.value;

    if (!searchTerm.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fatsecretService.searchFoods(searchTerm);
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
  }

  function handleViewDetails(foodId: string, foodName: string) {
    navigate(`/food/${foodId}`, { state: { foodName } });
  }

  return (
    <div className="bg-transparent">
        {/* Search form */}
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">
          Food Search
        </h3>
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
            <h4 className="text-sm font-medium text-gray-900">
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
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={() =>
                        handleViewDetails(food.food_id, food.food_name)
                      }
                    >
                      View Details
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* {searchResults.length === 0 && !isLoading && !error && (
          <div className="mt-4 text-sm text-gray-500">
            No results found. Try a different search term.
          </div>
        )} */}
      </div>
    </div>
  );
}
