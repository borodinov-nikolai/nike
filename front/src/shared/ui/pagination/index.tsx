'use client'
import React, { useEffect, useState } from 'react'
import styles from './Pagination.module.scss'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'


const Pagination = () => {
    const [pages, setPages] = useState<number[]>([1,2,3,4,5])
    const [activePage, setActivePage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(15)
    const [showDots, setShowDots] = useState<boolean>(true)
  
    const handlePageSelect = (direction: string)=> {
      if(direction === 'left' && activePage > 1) {
        setActivePage((state)=> state - 1)
        if(activePage <= pages[0]){
          setPages((state)=> state.map(item => item - 1))
        }
      } else if(direction === 'right'&& pages[4]< pageCount) {
        setActivePage((state)=> state + 1)
        if(activePage >= pages[4]) {
          setPages((state)=> state.map(item => item + 1))
  
        }
      }
    }
  
    const handleLastPageSelect = ()=> {
      
      let value = pageCount + 1
      const arr = []
      for(let i=1; i<=5; i++) {
        value = value-1
        arr.push(value)
      }
      setPages(arr.reverse())
      setActivePage(pageCount)
    }
  
    useEffect(()=> {
    if(pages[0] >= pageCount - 5){
      setShowDots(false)
    } else {
      setShowDots(true)
    }
    },[pages, pageCount])
  return (
    <div>  
            <div onClick={()=> handlePageSelect('left')} className={styles.btn} ><HiArrowLongLeft className={styles.arrow} /> <p>Назад</p></div>
    <ul className={styles.pagesList} >
      {showDots && <li className={styles.page} >...</li>}
      {pages.map(item => <li onClick={()=>setActivePage(item)} className={[styles.page, item === activePage && styles.page__active].filter(Boolean).join(' ')} key={item} >{item}</li> )}
      {showDots && <li className={styles.page} >...</li>}
      {showDots &&<li onClick={handleLastPageSelect} className={[styles.page, pageCount === activePage && styles.page__active].filter(Boolean).join(' ')} >{pageCount}</li>}
    </ul>
    <div onClick={()=> handlePageSelect('right')} className={styles.btn} >
     <p>Вперед</p> <HiArrowLongRight/>
    </div></div>
  )
}

export default Pagination