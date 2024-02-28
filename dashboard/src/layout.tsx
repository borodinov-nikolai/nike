import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './widgets/navbar'



const Layout = () => {
  return (
  
    <main>
     <Navbar/>
      <Outlet/>
      </main>
 
  )
}

export default Layout