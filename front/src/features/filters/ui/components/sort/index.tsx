'use client'
import React from 'react'
import styles from './Sort.module.scss'
import Select from '@/src/shared/ui/select'
import { useDispatch } from 'react-redux'
import { setSort } from '../../../store/filtersSlice'
import { useAppSelector } from '@/src/shared/store/hooks'



const options = [
  {id: 1, label: 'Цена по убыванию', value: 'price:desc'},
  {id: 2, label: 'Цена по возрастанию', value: 'price:asc'},
]


const Sort = () => {
const {sort} = useAppSelector((state)=> state.filters)
const dispatch = useDispatch()


    const handleValue = (value: string) => {
      dispatch(setSort(value))
    }

  return (
    <div className={styles.root} >
      <p className={styles.description}>Сортировка:</p>
       <Select setValue={handleValue} options={options} />
    </div>
  )
}

export default Sort