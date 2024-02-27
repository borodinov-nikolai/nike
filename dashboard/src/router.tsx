import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages'
import AuthPage from './pages/auth'
import { useGetUserQuery } from './features/user'


const Router = () => {
  const {data: user, isLoading, isSuccess} = useGetUserQuery();
  console.log('глобальный',user)


  return (
    <>
    <BrowserRouter basename='/admin' >
    <Routes> 
      <Route path='/' Component={HomePage} />
      <Route path='/auth' Component={AuthPage} />
    </Routes>
  </BrowserRouter>
  </> 
  )
}

export default Router