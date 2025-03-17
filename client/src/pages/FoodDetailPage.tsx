import { useNavigate, useLocation } from 'react-router-dom';
import { GradientBackground } from '../components/Gradient';
import FoodDetail from '../components/FoodDetail';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const FoodDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchAgain = () => {
    navigate('/foodsearch'); // Navigate to the food search page
  };

  const handleReturn = () => {
    // Try to get the search query from state first
    const searchQuery = location.state?.searchQuery;
    
    // If not in state, try localStorage
    const storedQuery = localStorage.getItem('lastSearchQuery');
    
    // Use whichever query is available
    const query = searchQuery || storedQuery;
    
    if (query) {
      // Navigate to foodsearch with the query parameter in the URL
      navigate(`/foodsearch?q=${encodeURIComponent(query)}`);
    } else {
      // Fallback to simple back navigation
      navigate(-1);
    }
  };
    

  return (
    <div>
      <GradientBackground />
      <FoodDetail />

      <div className="flex justify-center py-4 space-x-4">
        {/* Return to Results button */}
        <button
          onClick={handleReturn}
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-600 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <ArrowLeftIcon className="h-3 w-3 mr-2" />
          Return to Results
        </button>
        
        {/* Search Again button */}
        <button
          onClick={handleSearchAgain}
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:w-auto"
        >
          Search Again
        </button>
      </div>
    </div>
  );
};

export default FoodDetailPage