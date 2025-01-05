// main.jsx is responsible for rendering the root component (App.jsx) into the DOM.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nutrition from './pages/Nutrition';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'nutrition',
        element: <Nutrition />,
      },
    ],
  }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
    
        <RouterProvider router={router} />
    
    </StrictMode>
  );
}
