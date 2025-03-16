import { useCallback } from 'react';

/**
 * Custom hook to manage calorie tracking
 * Provides methods to add calories to the tracker and update localStorage
 */
export function useCalorieTracker() {
  /**
   * Add calories to the tracker
   * @param calories - Number of calories to add
   * @returns The new total calories
   */
  const addCalories = useCallback((calories: number) => {
    const savedCalories = localStorage.getItem('calorieTracker') || '0';
    const newCalories = parseInt(savedCalories, 10) + calories;
    localStorage.setItem('calorieTracker', newCalories.toString());

    // Trigger an event so other components know to update
    window.dispatchEvent(new Event('caloriesUpdated'));

    return newCalories;
  }, []);

  /**
   * Reset the calorie tracker to zero
   */
  const resetCalories = useCallback(() => {
    localStorage.setItem('calorieTracker', '0');
    window.dispatchEvent(new Event('caloriesUpdated'));
    return 0;
  }, []);

  /**
   * Get the current calorie count
   * @returns The current calories as a number
   */
  const getCurrentCalories = useCallback(() => {
    const savedCalories = localStorage.getItem('calorieTracker') || '0';
    return parseInt(savedCalories, 10);
  }, []);

  return {
    addCalories,
    resetCalories,
    getCurrentCalories,
  };
}

export default useCalorieTracker;
