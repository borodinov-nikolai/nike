'use client'
import React from 'react'
import styles from './Material.module.scss'
import Dropdown from '@/src/shared/ui/dropdown'
import Checkbox from '@/src/shared/ui/checkbox'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setMaterials } from '../../../store/filtersSlice'
import { useGetAllMaterialsQuery } from '@/src/entities/material'






const Material = () => {
  const {materials} = useAppSelector((state)=> state.filters)
  const {data: materialsList} = useGetAllMaterialsQuery()
  const dispatch = useAppDispatch()



  return (
    
        <Dropdown name='Материал' >
            <div className={styles.content} >
              <ul className={styles.list} >
               {materialsList?.map(({id, name, value})=> {
                return <li onClick={()=>dispatch(setMaterials(name))} className={styles.listItem} key={id} >
                  <Checkbox checked={materials.includes(name)? true : false} />
                   <p>{name}</p></li>
               })}
              </ul>
            </div>
        </Dropdown>

  )
}

export default Material