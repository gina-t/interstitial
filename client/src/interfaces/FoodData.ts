export interface FoodData {
  _id?: string;
  user?: string;
  foodId?: string;
  name: string;
  brand?: string;
  category: string;
  calories: number;
  protein?: number;
  carbohydrate?: number;
  fat?: number;
  servingSize?: {
    amount?: number;
    unit?: string;
  };
  servingId?: string;
  fiber?: number;
  sugar?: number;
  sodium?: number;
  cholesterol?: number;
  saturatedFat?: number;
  polyunsaturatedFat?: number;
  monounsaturatedFat?: number;
  transFat?: number;
  potassium?: number;
  addedSugars?: number;
  vitaminD?: number;
  vitaminA?: number;
  vitaminC?: number;
  calcium?: number;
  iron?: number;
  source?: string; // Add this line to include the source property
  createdAt?: Date;
  updatedAt?: Date;
}
