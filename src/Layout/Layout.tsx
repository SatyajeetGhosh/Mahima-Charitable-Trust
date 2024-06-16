import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const Layout = () => {
  return (
    <div className='layout-container'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout