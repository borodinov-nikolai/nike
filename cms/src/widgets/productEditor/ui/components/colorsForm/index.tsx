import { Control, Controller, ControllerRenderProps} from 'react-hook-form'
import styles from './ColorsForm.module.scss'
import { FC } from 'react';
import { IProductFormValues } from '../../root';
import { Color } from '../../../../../entities/color';
import { Checkbox } from 'antd';


interface Props {
    control?: Control<IProductFormValues, (data: IProductFormValues) => void, IProductFormValues>
    data: Color[]
}

const ColorsForm:FC<Props> = ({control, data}) => {


    const onCheckboxChange = (checked: boolean, field: ControllerRenderProps<IProductFormValues, "colors">, id: number)=> {
     const newValue = checked ? [...field.value, id] : field.value.filter((value:number)=> value !== id)
     field.onChange(newValue)
    }
  return (
    <>
    <Controller
    name='colors'
    control={control}
    render={({field})=> <div className={styles.itemsHolder} >
        {data?.map(({id, name, value})=> {
            return <div className={styles.item} key={id} >
                 <Checkbox checked={field.value.includes(id)} onChange={(e)=>onCheckboxChange(e.target.checked, field, id)}>
                 <div style={{background: value}} className={styles.label}></div>
                 </Checkbox>
            </div>
        })}
    </div> }
    />
    </>
  )
}

export default ColorsForm