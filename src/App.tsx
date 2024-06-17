import React from 'react';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import { navbarLinks } from './Constants/NavbarLinks';
import './App.scss';

const router = createBrowserRouter(navbarLinks);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
