import { useState } from 'react';
import {
  type FoodItem,
  getAllServings,
} from '../interfaces/FoodSearchResult';

interface FoodResponseTableProps {
  food: FoodItem;
}

export default function FoodResponseTable({ food }: FoodResponseTableProps) {
  // Add state to track the selected serving size
  const [selectedServingIndex, setSelectedServingIndex] = useState(0);

  // Get all servings as an array
  const servingsArray = getAllServings(food);

  // Get the selected serving or an empty object if none available
  const serving = servingsArray[selectedServingIndex] || {};

  // Format nutrition values with appropriate units
  const formatValue = (value: string | number | undefined, unit: string = 'g') => {
    if (value === undefined || value === null) return '-';
    return `${value}${unit}`;
  };

  const nutrients = [
    { name: 'Total Fat', value: formatValue(serving.fat), dailyValue: '7%' },
    {
      name: 'Saturated Fat',
      value: formatValue(serving.saturated_fat),
      dailyValue: '3%',
    },
    {
      name: 'Trans Fat',
      value: formatValue(serving.trans_fat),
      dailyValue: '-',
    },
    {
      name: 'Polyunsaturated Fat',
      value: formatValue(serving.polyunsaturated_fat),
      dailyValue: '-',
    },
    {
      name: 'Monounsaturated Fat',
      value: formatValue(serving.monounsaturated_fat),
      dailyValue: '-',
    },
    {
      name: 'Cholesterol',
      value: formatValue(serving.cholesterol, 'mg'),
      dailyValue: '0%',
    },
    {
      name: 'Sodium',
      value: formatValue(serving.sodium, 'mg'),
      dailyValue: '1%',
    },
    {
      name: 'Total Carbohydrate',
      value: formatValue(serving.carbohydrate),
      dailyValue: '25%',
    },
    {
      name: 'Dietary Fiber',
      value: formatValue(serving.fiber),
      dailyValue: '21%',
    },
    { name: 'Sugars', value: formatValue(serving.sugar), dailyValue: '-' },
    { name: 'Protein', value: formatValue(serving.protein), dailyValue: '-' },
    {
      name: 'Vitamin D',
      value: formatValue(serving.vitamin_d),
      dailyValue: '-',
    },
    {
      name: 'Calcium',
      value: formatValue(serving.calcium, 'mg'),
      dailyValue: '5%',
    },
    { name: 'Iron', value: formatValue(serving.iron, 'mg'), dailyValue: '51%' },
    {
      name: 'Potassium',
      value: formatValue(serving.potassium, 'mg'),
      dailyValue: '16%',
    },
  ];

  return (
    <div className="bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-lg font-semibold mb-6">Nutrition Facts</h3>

        {/* Add serving size selector if multiple servings are available */}
        {servingsArray.length > 1 && (
          <div className="mb-4">
            <label
              htmlFor="serving-select"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select serving size:
            </label>
            <select
              id="serving-select"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={selectedServingIndex}
              onChange={(e) =>
                setSelectedServingIndex(parseInt(e.target.value))
              }
            >
              {servingsArray.map((s, index) => (
                <option key={s.serving_id || index} value={index}>
                  {s.serving_description}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <p className="text-sm font-medium">
              Serving Size: {serving.serving_description || 'Per serving'}
              {serving.metric_serving_amount && serving.metric_serving_unit && (
                <span className="text-gray-500 ml-1">
                  ({serving.metric_serving_amount} {serving.metric_serving_unit}
                  )
                </span>
              )}
            </p>
            <p className="text-xl font-bold mt-1">
              Calories: {serving.calories || '-'}
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="px-4 py-2 flex justify-end text-sm">
              <span className="font-medium">% Daily Values*</span>
            </div>

            {nutrients.map((nutrient, index) => (
              <div key={index} className="px-4 py-3 flex justify-between">
                <span className="font-medium">{nutrient.name}</span>
                <div className="flex space-x-6">
                  <span>{nutrient.value}</span>
                  <span className="w-12 text-right">{nutrient.dailyValue}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-3 text-xs text-gray-500">
            * The % Daily Value (DV) tells you how much a nutrient in a serving
            of food contributes to a daily diet. 2,000 calories a day is used
            for general nutrition advice.
          </div>
        </div>
      </div>
    </div>
  );
}
