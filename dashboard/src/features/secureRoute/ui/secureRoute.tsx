import React, { ReactNode } from 'react'
import { useGetUserQuery } from '../../user'
import { Navigate } from 'react-router-dom'

const SecureRoute = (component: ReactNode) => {
    const {data: user, isLoading} = useGetUserQuery()

   if(!isLoading && user){
       return component
   } 
   
   if(!isLoading && !user) {
    return <Navigate to='/auth' replace={true}/>
   }

   
   return null
}

export default SecureRoute