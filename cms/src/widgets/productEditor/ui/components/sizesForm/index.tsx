import { Control, Controller, ControllerRenderProps, FieldValues } from 'react-hook-form'
import styles from './SizesForm.module.scss'
import { Checkbox } from 'antd'
import { Size } from '../../../../../entities/size'
import { FC } from 'react'
import { IProductFormValues } from '../../root'



interface Props {
  control: Control<IProductFormValues, (data: IProductFormValues) => void, IProductFormValues>,
  data: Size[]
}

const SizesForm: FC<Props> = ({ control, data }) => {





  const onCheckboxChange = (cheked: boolean, field: ControllerRenderProps<IProductFormValues, "sizes">, id: number) => {
    const updatedValue = cheked ? [...field.value, id] : field.value.filter((value: number) => value !== id)
    field.onChange(updatedValue)
  }


  return (
    <>
      <label htmlFor="sizes"> Размеры: </label>
      <Controller
        name='sizes'
        control={control}
        render={({ field }) => <div className={styles.itemsHolder} >
          {data?.map(({ id, value }) => {
            return <div className={styles.items} key={id} >
            
              <Checkbox checked={(field.value as number[]).includes(id)} onChange={(e) => onCheckboxChange(e.target.checked, field, id)} className={styles.checkbox}>
              <div>{value}</div>
              </Checkbox>
            </div>
          })}
        </div>}
      />

    </>
  )
}

export default SizesForm