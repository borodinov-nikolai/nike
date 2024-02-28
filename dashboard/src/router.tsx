import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages'
import AuthPage from './pages/auth'
import SecureRoute from './secureRoute'




const Router = () => {

 


       return (
        <BrowserRouter basename='/admin' >
  
          <Routes>
            <Route path='/' element={SecureRoute(<HomePage/>)} />
            <Route path='/auth' element={<AuthPage/>}/>
          </Routes>
        </BrowserRouter>
  
      )
   
    
   
  

}

export default Router