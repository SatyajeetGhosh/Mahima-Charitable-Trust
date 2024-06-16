import React from 'react';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { navbarLinks } from './Constants/NavbarLinks';
import './App.scss';

const router = createBrowserRouter(navbarLinks);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
