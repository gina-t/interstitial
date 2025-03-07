import {
  type FoodItem,
  formatServingSize,
  getNutritionInfo,
} from '../interfaces/FoodSearchResult';

interface FoodResponseHeaderProps {
  food: FoodItem;
}

export default function FoodResponseHeader({ food }: FoodResponseHeaderProps) {
  // Format nutrition values to 1 decimal place
  const formatNutritionValue = (
    value: number | string | undefined,
    unit = 'g'
  ) => {
    if (value === undefined || value === null) return 'N/A';

    // If it's already a string and doesn't look like a number, return as is
    if (typeof value === 'string' && isNaN(parseFloat(value))) return value;

    // Convert to number and format with 1 decimal place
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return `${numValue.toFixed(1)}${unit}`;
  };

  // Get nutrition info and serving size
  const { nutrition, servingSize } = getNutritionInfo(food);

  // Extract main nutrition data for display in header
  const nutritionData = [
    {
      id: 1,
      name: 'Calories',
      // Calories typically don't have decimal places
      value: nutrition.calories
        ? Math.round(parseFloat(nutrition.calories.toString()))
        : 'N/A',
    },
    {
      id: 2,
      name: 'Fat',
      value: formatNutritionValue(nutrition.fat),
    },
    {
      id: 3,
      name: 'Carbohydrate',
      value: formatNutritionValue(nutrition.carbohydrate),
    },
    {
      id: 4,
      name: 'Protein',
      value: formatNutritionValue(nutrition.protein),
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
              {food.food_name || 'Food Details'}
            </h2>
            <p className="mt-4 text-lg/8 text-gray-600">
              {formatServingSize(servingSize)}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {nutritionData.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
