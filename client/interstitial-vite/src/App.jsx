// import React from 'react';
// App.jsx renders common layout components
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GradientBackground from './components/Gradient';

function App() {
  return (
    <>
      <GradientBackground />
      <NavBar />
      <Outlet /> {/* Outlet is a placeholder for rendering child routes */}
      <Footer />
    </>
  );
}

export default App;
