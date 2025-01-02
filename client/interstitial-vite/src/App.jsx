// import React from 'react';
// App.jsx renders common layout components 
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Outlet /> {/* Outlet is a placeholder for rendering child routes */}
      <Footer />
    </>
  );
};

export default App;
