'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './Pagination.module.scss'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setCurrentPage } from '@/src/features/pagination/store'


interface Props {
   totalPages?: number
   onChange?: (e: number)=> void
}

const Pagination: FC<Props> = ({totalPages = 1, onChange}) => {
  const dispatch = useAppDispatch()
  const {currentPage} = useAppSelector((state)=> state.pagination)
  const [firstPages, setFirstPages] = useState<boolean>(true)
  const [lastPages, setLastPages] = useState<boolean>(false)
  const [visiblePages, setVisiblePages] = useState<number[]>([])



  const handleStepChange = (direction: 'prev'|'next'|'prev-5'|'next-5')=>{
    if(direction === 'prev' && currentPage > 1) {
      dispatch(setCurrentPage(currentPage -1 ))
    } else if(direction === 'next' && currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage +1))
    }

    if(direction === 'prev-5' && currentPage > 5) {
      dispatch(setCurrentPage(currentPage - 5))
    } else if(direction === 'prev-5') {
      dispatch(setCurrentPage(1))
    }

    if(direction === 'next-5' && currentPage < totalPages-4) {
      dispatch(setCurrentPage(currentPage + 5))
    } else if(direction === 'next-5') {
      dispatch(setCurrentPage(totalPages))
    }
}
  
  useEffect(()=> {
     onChange && onChange(currentPage)
  }, [currentPage]) 


useEffect(()=> {
  const arr = Array.from({length: totalPages}, (_, i)=> i+1)

  if(totalPages < 7) {
    setVisiblePages(arr.slice(1, -1))
    setFirstPages(true)
    setLastPages(true)
  } else {
    setVisiblePages(arr.slice(1, 5))
    if(currentPage > 4) {
      setFirstPages(false)
     setVisiblePages(arr.slice(currentPage-3, currentPage + 2))
    } else {
      setFirstPages(true)
    }
  
    if(currentPage > totalPages -4) {
      setLastPages(true) 
      setVisiblePages(arr.slice(totalPages-5, totalPages-1))
    } else {
      setLastPages(false)
    }
  }



}, [currentPage, totalPages])

 if(totalPages > 1) {
  return (
    <div className={styles.root} >  
             <div onClick={()=>handleStepChange('prev')} className={styles.step} ><HiArrowLongLeft className={styles.arrow} /> <p>Назад</p></div>
     <ul className={styles.pagesList} >
       <li onClick={()=> dispatch(setCurrentPage(1)) } className={[styles.page, currentPage === 1 && styles.page__active].filter(Boolean).join(' ')}>{1}</li>
        {!firstPages && <li onClick={()=> handleStepChange('prev-5')} className={[styles.page, styles.longStep].join(' ')} ><p>...</p><MdKeyboardDoubleArrowLeft/></li>}
       {visiblePages.map((item)=> {
         return <li onClick={()=> setCurrentPage(item)} className={[styles.page, currentPage === item && styles.page__active].filter(Boolean).join(' ')} key={item} >{item}</li>
       })}
     {!lastPages && <li onClick={()=> handleStepChange('next-5')}  className={[styles.page, styles.longStep].join(' ')} ><p>...</p><MdKeyboardDoubleArrowRight /></li>}
       <li onClick={()=> dispatch(setCurrentPage(totalPages))} className={[styles.page, currentPage === totalPages && styles.page__active].filter(Boolean).join(' ')} >{totalPages}</li>
     </ul>
     <div onClick={()=> handleStepChange('next')} className={styles.step} >
      <p>Вперед</p> <HiArrowLongRight/>
     </div></div>
   )
 }
  
}

export default Pagination