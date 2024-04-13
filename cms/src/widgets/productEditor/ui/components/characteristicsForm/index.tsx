  import { Button, Input } from 'antd'
  import styles from './CharacteristicsForm.module.scss'
  import {UseFormSetValue, UseFormWatch } from 'react-hook-form'
  import { IProductFormValues } from '../../root'
  import { FC} from 'react'
  import { IoMdClose } from "react-icons/io";

  interface IProps {
    setValue: UseFormSetValue<IProductFormValues>
    watch: UseFormWatch<IProductFormValues>
  }



  const CharacteristicsForm: FC<IProps> = ({ setValue, watch }) => {
    const values = watch('characteristics')





    const handleAddItem = () => {
      const updatedValues = values.length > 0 ? [...values, { id: values[values.length - 1].id + 1, name: '', value: '' }] : [{ id: 1, name: '', value: '' }]
      setValue( 'characteristics' ,updatedValues)
    }

    const handleDelete = (id: number) => {
      setValue( 'characteristics', values.filter((item) => item.id !== id))
    }

    const handleChangeInput = (id: number, eventValue: string, field: string) => {
      setValue( 'characteristics', values.map((item) => item.id === id ? { ...item, ...(field ==='name' ? {name: eventValue} : {value: eventValue})} : item))
    }

    

    return (
      <div className={styles.root}>

        {values?.map(({ id, name, value }) =>
          <div key={id} className={styles.inputField} >
            <div className={styles.inputItem} >
              <label htmlFor="characteristic_name">Название:</label>
              <Input onChange={(e) => handleChangeInput(id, e.target.value, 'name')} value={name} id='characteristic_name' />
            </div>
            <div className={styles.inputItem} >
              <label htmlFor="characteristic_value">Значение:</label>
              <Input onChange={(e) => handleChangeInput(id, e.target.value, 'value')} value={value} id='characteristic_value' />
            </div>
            <Button onClick={() => handleDelete(id)} className={styles.deleteBtn} size='small' shape='circle' icon={<IoMdClose />} type='default' danger ></Button>
          </div>
        )}


        <Button className={styles.addBtn} onClick={handleAddItem} ghost type='primary' >Добавить</Button>





      </div>
    )
  }

  export default CharacteristicsForm