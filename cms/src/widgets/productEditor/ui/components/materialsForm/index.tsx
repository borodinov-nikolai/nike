import { Control, Controller, ControllerRenderProps } from 'react-hook-form'
import styles from './MaterialsForm.module.scss'
import { FC } from 'react'
import { IProductFormValues } from '../../root'
import { Material } from '../../../../../entities/material'
import { Checkbox } from 'antd'


interface IProps {
control: Control<IProductFormValues, (data: IProductFormValues) => void, IProductFormValues>
data: Material[]
}
const MaterialsForm: FC<IProps> = ({control, data}) => {

    const onCheckboxChange = (checked: boolean, field:  ControllerRenderProps<IProductFormValues, "materials">, id: number)=> {
        const updatedValue = checked? [...field.value, id] : field.value.filter((value: number)=> value !== id);
        field.onChange(updatedValue)
    }

  return (
    <>
    <Controller
    name={'materials'}
    control={control}
    render={({field})=> <div className={styles.itemsHolder} >
          {data?.map(({id, name})=> {
            return <div key={id} >
                <Checkbox checked={field.value.includes(id)} onChange={(e)=> onCheckboxChange(e.target.checked, field, id)} >{name}</Checkbox>
            </div>
          })}
    </div> }
    />
    </>
  )
}

export default MaterialsForm