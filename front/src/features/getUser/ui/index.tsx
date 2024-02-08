'use client'
import { useGetUserQuery } from '@/src/entities/user';
import React from 'react';


const GetUser = () => {

  const user =  useGetUserQuery()
  console.log(user.data)
    

  return (
    <></>
  )
}

export default GetUser