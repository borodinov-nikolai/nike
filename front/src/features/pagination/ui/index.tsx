'use client'
import React from 'react'
import PaginationElement from '../../../shared/ui/pagination'


export const Pagination = ({totalPages}: {totalPages: number}) => {
  return (
    <>
    <PaginationElement totalPages={totalPages} onChange={(value)=>console.log(value)} />
    </>
  )
}

export default Pagination