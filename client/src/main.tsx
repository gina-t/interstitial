
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import FoodSearchPage from './pages/FoodSearchPage.tsx';
import FoodDetailPage from './pages/FoodDetailPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import DiabetesPage from './pages/DiabetesPage.tsx';
import UltraProcessedFoodsPage from "./pages/UltraProcessedFoodsPage.tsx";
import WholeFoodsPage from "./pages/WholeFoodsPage.tsx";
import FavouritesPage from "./pages/FavouritesPage.tsx";
import ResourcesPage from "./pages/ResourcesPage.tsx";
import MarketingStrategiesPage from "./pages/MarketingStrategiesPage.tsx";
import BehaviouralApproachesPage from "./pages/BehaviouralApproachesPage.tsx";
import FoodLabelsPage from "./pages/FoodLabelsPage.tsx";
import ExercisePage from "./pages/ExercisePage.tsx";
import CaloriesPage from "./pages/CaloriesPage.tsx";
import LearnMorePage from "./pages/LearnMorePage.tsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'reset-password/:token',
        element: <ResetPasswordPage />, 
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      
      { 
        path: 'diabetes',
        element: <DiabetesPage />,
      },
      {
        path: 'foodsearch',
        element: <FoodSearchPage />,
      },

      {
        path: 'food/:foodId', 
        element: <FoodDetailPage />
      },
      {
        path: 'ultraprocessed-foods',
        element: <UltraProcessedFoodsPage />,
      },
      {
        path: 'whole-foods',
        element: <WholeFoodsPage />,
      },
      {
        path: 'favourites',
        element: <FavouritesPage />,
      },
      {
        path: 'resources',
        element: <ResourcesPage />,
      },
      {
        path: 'marketing-strategies',
        element: <MarketingStrategiesPage />,
      },
      {
        path: 'behavioural-economics',
        element: <BehaviouralApproachesPage />,
      },
      {
        path: 'food-labels',
        element: <FoodLabelsPage />,
      },
      {
        path: 'exercise',
        element: <ExercisePage />,
      },  
      {
        path: 'calories',
        element: <CaloriesPage />,
      },  
      {
        path: 'learn-more',
        element: <LearnMorePage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
);
}
