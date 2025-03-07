// Base nutrition interface that both Serving and ParsedDescription will share
export interface NutritionInfo {
  calories?: string | number;
  fat?: string | number;
  carbohydrate?: string | number;
  protein?: string | number;
}

// Detailed serving from the API response
export interface Serving extends NutritionInfo {
  // Basic info
  serving_description?: string;
  serving_id?: string;
  serving_url?: string;

  // Measurement info
  measurement_description?: string;
  metric_serving_amount?: string;
  metric_serving_unit?: string;
  number_of_units?: string;

  // Additional nutrients
  calcium?: string | number;
  cholesterol?: string | number;
  fiber?: string | number;
  iron?: string | number;
  monounsaturated_fat?: string | number;
  polyunsaturated_fat?: string | number;
  potassium?: string | number;
  saturated_fat?: string | number;
  sodium?: string | number;
  sugar?: string | number;
  trans_fat?: string | number;
  vitamin_a?: string | number;
  vitamin_c?: string | number;
  vitamin_d?: string | number;
}

// ParsedDescription from food_description string in search results
export interface ParsedDescription extends NutritionInfo {
  servingSize: string; // e.g. "100g" or "1/4 cup"
}

// Base food interface for API responses
export interface FoodItem {
  brand_name?: string;
  food_description?: string;
  food_id: string;
  food_name: string;
  food_type?: string;
  food_url?: string;
  servings?: {
    serving: Serving | Serving[];
  };
}

// For search API responses
export interface SearchResponse {
  foods: {
    food: FoodItem | FoodItem[];
    max_results?: number;
    page_number?: number;
    total_results?: number;
  };
}

// For single food API responses
export interface FoodResponse {
  food: FoodItem;
}

/**
 * Parses a food description string into structured nutrition data
 * Example input: "Per 100g - Calories: 599kcal | Fat: 52.50g | Carbs: 15.26g | Protein: 28.03g"
 */
export function parseFoodDescription(description: string): ParsedDescription {
  // Default values
  const result: ParsedDescription = {
    servingSize: 'serving',
  };

  if (!description) {
    return result;
  }

  // Extract serving size
  const servingSizeMatch = description.match(/Per\s(.*?)\s-/);
  if (servingSizeMatch && servingSizeMatch[1]) {
    result.servingSize = servingSizeMatch[1];
  }

  // Extract calories
  const caloriesMatch = description.match(/Calories:\s*(\d+(\.\d+)?)kcal/i);
  if (caloriesMatch && caloriesMatch[1]) {
    result.calories = caloriesMatch[1];
  }

  // Extract fat
  const fatMatch = description.match(/Fat:\s*(\d+(\.\d+)?)g/i);
  if (fatMatch && fatMatch[1]) {
    result.fat = fatMatch[1];
  }

  // Extract carbs
  const carbsMatch = description.match(/Carbs:\s*(\d+(\.\d+)?)g/i);
  if (carbsMatch && carbsMatch[1]) {
    result.carbohydrate = carbsMatch[1];
  }

  // Extract protein
  const proteinMatch = description.match(/Protein:\s*(\d+(\.\d+)?)g/i);
  if (proteinMatch && proteinMatch[1]) {
    result.protein = proteinMatch[1];
  }

  return result;
}

/**
 * Formats a serving description to convert ounces to grams
 */
export function formatServingSize(description: string | undefined): string {
  if (!description) return 'Per serving';

  // Convert oz to grams if present
  if (description.toLowerCase().includes('oz')) {
    const ozMatch = description.match(/(\d+(\.\d+)?)\s*oz/i);
    if (ozMatch && ozMatch[1]) {
      const ozValue = parseFloat(ozMatch[1]);
      const gramsValue = Math.round(ozValue * 28.35);
      return description.replace(/(\d+(\.\d+)?)\s*oz/i, `${gramsValue}g`);
    }
  }

  return description;
}

/**
 * Helper function to get the first serving or the serving object
 * from a food object, handling both array and single object cases
 */
export function getFirstServing(food: FoodItem): Serving | null {
  if (!food.servings?.serving) return null;

  if (Array.isArray(food.servings.serving)) {
    return food.servings.serving[0];
  }

  return food.servings.serving;
}

/**
 * Helper function to get all servings as an array
 * from a food object, handling both array and single object cases
 */
export function getAllServings(food: FoodItem): Serving[] {
  if (!food.servings?.serving) return [];

  return Array.isArray(food.servings.serving)
    ? food.servings.serving
    : [food.servings.serving];
}

/**
 * Gets nutrition info either from servings or by parsing food_description
 */
export function getNutritionInfo(food: FoodItem): {
  nutrition: NutritionInfo;
  servingSize: string;
} {
  // Try to get from servings first
  const serving = getFirstServing(food);
  if (serving) {
    return {
      nutrition: serving,
      servingSize: serving.serving_description || 'Per serving',
    };
  }

  // Otherwise parse from description if available
  if (food.food_description) {
    const parsed = parseFoodDescription(food.food_description);
    return {
      nutrition: parsed,
      servingSize: parsed.servingSize,
    };
  }

  // Fallback
  return {
    nutrition: {},
    servingSize: 'Per serving',
  };
}
