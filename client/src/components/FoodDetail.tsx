// src/components/FoodDetail.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fatsecretService from '../services/fatsecretService';
import FoodResponseHeader from './FoodResponseHeader';
import FoodResponseTable from './FoodResponseTable';
import { type FoodResponse } from '../interfaces/FoodSearchResult';

export default function FoodDetail() {
  const { foodId } = useParams();
  const [foodData, setFoodData] = useState<FoodResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFoodDetails() {
      try {
        if (!foodId) return;

        setLoading(true);
        const data = await fatsecretService.getFoodData(foodId);
        setFoodData(data);
      } catch (err) {
        console.error('Error fetching food details:', err);
        setError('Failed to load food details');
      } finally {
        setLoading(false);
      }
    }

    fetchFoodDetails();
  }, [foodId]);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
  if (!foodData)
    return <div className="text-center p-8">No food data found</div>;

  return (
    <div>
      <FoodResponseHeader food={foodData.food} />
      <FoodResponseTable food={foodData.food} />
    </div>
  );
}
