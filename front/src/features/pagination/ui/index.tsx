'use client'
import React from 'react'
import PaginationElement from '../../../shared/ui/pagination'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setCurrentPage } from '../store'


export const Pagination = () => {
  const {totalPages} = useAppSelector((state)=> state.pagination)
  const dispatch = useAppDispatch()
  return (
    <>
    <PaginationElement totalPages={totalPages} onChange={(value)=>dispatch(setCurrentPage(value))} />
    </>
  )
}

export default Pagination