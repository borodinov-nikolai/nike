'use client'
import React from 'react'
import styles from './Material.module.scss'
import Dropdown from '@/src/shared/ui/dropdown'
import Checkbox from '@/src/shared/ui/checkbox'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setMaterials } from '../../../store/filtersSlice'



const materialsList = [
  {
    id:1,
    name: 'Дермантин',
    value: 'dermantine'
  },
  {
    id:2,
    name: 'Кожа',
    value: 'leather'
  },
]


const Material = () => {
  const {materials} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()
  console.log(materials)


  return (
    
        <Dropdown name='Материал' >
            <div className={styles.content} >
              <ul className={styles.list} >
               {materialsList.map(({id, name, value})=> {
                return <li onClick={()=>dispatch(setMaterials(value))} className={styles.listItem} key={id} >
                  <Checkbox checked={materials.includes(value)? true : false} />
                   <p>{name}</p></li>
               })}
              </ul>
            </div>
        </Dropdown>

  )
}

export default Material