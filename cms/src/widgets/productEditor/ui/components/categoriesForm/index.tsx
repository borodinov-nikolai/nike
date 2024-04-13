import { Control, Controller, ControllerRenderProps } from 'react-hook-form'
import styles from './CategoriesForm.module.scss'
import { IProductFormValues } from '../../root'
import { Category } from '../../../../../entities/category'
import { FC } from 'react'
import { Checkbox } from 'antd'


interface IProps {
    control?: Control<IProductFormValues, (data: IProductFormValues) => void, IProductFormValues>
    data: Category[]
}


const CategoriesForm: FC<IProps> = ({control, data}) => {


    const onCheckboxChange = (checked: boolean, field:ControllerRenderProps<IProductFormValues, "categories">, id: number )=> {
     const updatedValue = checked? [...field.value, id]:field.value.filter((value: number)=> value !== id);
     field.onChange(updatedValue)
    }

  return (
     <>
     <Controller
     name='categories'
     control={control}
     render={({field})=> <div className={styles.itemsHolder} >
       {data?.map(({id, name})=> <div key={id} >
            <Checkbox checked={field.value.includes(id)} onChange={(e)=> onCheckboxChange(e.target.checked, field, id)} >{name}</Checkbox>
       </div> )}
     </div> }
     />
     </>
  )
}

export default CategoriesForm