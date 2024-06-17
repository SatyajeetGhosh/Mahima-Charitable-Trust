import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout