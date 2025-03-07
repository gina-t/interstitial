import { useNavigate } from 'react-router-dom';
import { GradientBackground } from '../components/Gradient';
import FoodDetail from '../components/FoodDetail';

const FoodDetailPage = () => {
  const navigate = useNavigate();

  const handleSearchAgain = () => {
    navigate('/foodsearch'); // Navigate to the food search page
  };

  return (
    <div>
      <GradientBackground />
      <FoodDetail />

      <div className="flex justify-center py-4">
          <button
            onClick={handleSearchAgain}
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:w-auto"
          >
            Search Again
          </button>
        </div>
    </div>
  )
}

export default FoodDetailPage