'use client'
import { useGetUserQuery } from '@/src/entities/user';
import React from 'react';


const GetUser = () => {

  const user =  useGetUserQuery()


  return (
    <></>
  )
}

export default GetUser