import { useState, useEffect } from 'react';
import useCalorieTracker from '../hooks/useCalorieTracker';

interface CalorieTrackerProps {
  maxCalories?: number;
}

export default function CalorieTracker({
  maxCalories = 2500,
}: CalorieTrackerProps) {
  const [currentCalories, setCurrentCalories] = useState<number>(0);
  const { resetCalories } = useCalorieTracker();

  // Load saved calories from localStorage
  useEffect(() => {
    const savedCalories = localStorage.getItem('calorieTracker');
    if (savedCalories) {
      setCurrentCalories(parseInt(savedCalories, 10));
    }
  }, []);

  // Listen for calorie update events from other components
  useEffect(() => {
    const handleCaloriesUpdated = () => {
      const savedCalories = localStorage.getItem('calorieTracker');
      if (savedCalories) {
        setCurrentCalories(parseInt(savedCalories, 10));
      }
    };

    window.addEventListener('caloriesUpdated', handleCaloriesUpdated);

    return () => {
      window.removeEventListener('caloriesUpdated', handleCaloriesUpdated);
    };
  }, []);

  // Calculate percentage for progress bar
  const percentage = Math.min((currentCalories / maxCalories) * 100, 100);

  // Handle reset button click
  const handleResetCalories = () => {
    resetCalories();
    setCurrentCalories(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-medium text-gray-900">Calorie Tracker</h4>
        <div className="flex items-center">
          <span className="text-base font-bold text-indigo-600">
            {currentCalories}
          </span>
          <span className="text-gray-500 ml-1">/ {maxCalories} Cal</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-full bg-gray-200">
        <div
          style={{ width: `${percentage}%` }}
          className={`h-2 rounded-full ${
            percentage > 95 ? 'bg-red-500' : 'bg-indigo-600'
          }`}
        />
      </div>

      <div className="mt-3 relative">
        {/* Create tick marks at exact positions */}
        <div className="h-5 relative">
          {[0, 25, 50, 75, 100].map((position) => (
            <div 
              key={position} 
              className="absolute top-0 w-0.5 h-1.5 bg-gray-300" 
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            />
          ))}
    
          {/* Labels under tick marks */}
          {[0, 25, 50, 75, 100].map((position) => (
            <div 
              key={position}
              className="absolute top-1.5 text-xs font-medium text-gray-600"
              style={{ 
                left: `${position}%`, 
                transform: 'translateX(-50%)',
                width: '40px',
                textAlign: 'center'
              }}
            >
              {Math.round((position / 100) * maxCalories)}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleResetCalories}
        className="mt-4 w-full items-center py-2 px-4 border border-transparent rounded-md shadow-xs text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
      >
        Reset Tracker
      </button>
    </div>
  );
}

// Export the interface so you can access it elsewhere
export type { CalorieTrackerProps };
