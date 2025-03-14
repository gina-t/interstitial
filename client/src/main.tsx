
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
      
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
);
}
