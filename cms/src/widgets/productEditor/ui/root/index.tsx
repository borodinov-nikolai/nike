import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './ProductEditor.module.scss'
import { Image, Input, InputNumber, Radio } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import SizesForm from '../components/sizesForm'
import { useGetAllSizesQuery } from '../../../../entities/size'
import { useGetAllColorsQuery } from '../../../../entities/color'
import { SubmitButton } from '../../../../features/submitButton'
import ColorsForm from '../components/colorsForm'
import { useAddProductMutation, useDeleteProductMutation, useGetOneProductQuery } from '../../../../entities/product'
import { ImagePicker } from '../../../../features/imagePicker'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DeleteButton } from '../../../../features/deleteButton'


export interface IProductFormValues {
  name: string
  price: number
  oldPrice?: number
  gender: string
  preview: number
  description: string
  sizes: number[]
  colors: number[]
}


type Image = {
  id: number
  name: string
}

export const ProductEditor = () => {
  const navigate = useNavigate()
  const {edit: params} = useParams()
  const [preview, setPreview] = useState<Image>()
  const [images, setImages] = useState<Image[]>()
  const [addProduct] = useAddProductMutation()
  const [deleteProduct] = useDeleteProductMutation()
  const {data: product} = useGetOneProductQuery(+params!, {skip: params === 'add' && true})
  const { data: sizes } = useGetAllSizesQuery()
  const { data: colors } = useGetAllColorsQuery()
  const { control, handleSubmit, watch, setValue } = useForm<IProductFormValues, (data: IProductFormValues)=> void>({
    defaultValues: {
      name: '',
      price: undefined  ,
      oldPrice: undefined,
      description: '',
      preview: undefined,
      sizes: [],
      colors: []
    }
  })

useEffect(()=> {
  if(product) {
    const {name, price, oldPrice, description, gender, sizes, colors} = product
    setValue('name', name)
    setValue('price', price)
    setValue('oldPrice', oldPrice)
    setValue('description', description)
    setValue('gender', gender)
    setValue('sizes', sizes.map(({id})=>id))
    setValue('colors', colors.map(({id})=> id))
  }
}, [product])

  const onSubmit: SubmitHandler<IProductFormValues> = (data) => {
    addProduct(data)
    navigate('/products')
  }


  const handleDeleteProduct = ()=> {
       product && deleteProduct(+params!)
       navigate('/products')
  }

  return (
    <div className={styles.root} >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="">
        <div className={[styles.formItem, styles.name].join(' ')} >
          <label htmlFor="name">Название:</label>
          <Controller
            name='name'
            control={control}
            render={({ field }) => <Input {...field} id='name' />}
          />
        </div>
        <div className={[styles.formItem, styles.price].join(' ')} >
          <label htmlFor="price">Цена:</label>
          <Controller
            name='price'
            control={control}
            render={({ field }) => <InputNumber className={styles.inputNumber} {...field} id='price' />}
          />
        </div>
        <div className={[styles.formItem, styles.oldPrice].join(' ')} >
          <label htmlFor="oldPrice">Старая цена:</label>
          <Controller
            name='oldPrice'
            control={control}
            render={({ field }) => <InputNumber className={styles.inputNumber}  {...field} id='oldPrice' />}
          />
        </div>
        <div className={[styles.formItem, styles.description].join(' ')} >
          <label htmlFor="description">Описание:</label>
          <Controller
            name='description'
            control={control}
            render={({ field }) => <TextArea rows={10} {...field} id='description' />}
          />
        </div>
        <div className={[styles.formItem, styles.gender].join(' ')} >
          <label>Пол:</label>
          <Controller
            name='gender'
            control={control}
            render={({ field }) => <div className={styles.inputField} > <Radio.Group value={field.value} onChange={(e)=>field.onChange(e.target.value)} >
            <Radio value={'Мужские'}>мужские</Radio>
            <Radio value={'Женские'}>женские</Radio>
            </Radio.Group></div> }
          />
        </div>
        <div className={[styles.formItem, styles.preview].join(' ')} >
          <label >Превью:</label>
          <Controller
            name='preview'
            control={control}
            render={({ field }) => <div className={styles.previewInput} > <ImagePicker onChange={(value)=>{ setPreview(value as Image); field.onChange((value as Image).id)}} multiple={false} />
                   { preview && <Image preview={false} width={150} height={150} src={process.env.REACT_APP_BACKEND_UPLOADS + '/images/' + preview.name} alt='preview image' />}</div> }
          />
         
        </div>
        
        {sizes && <div className={[styles.formItem, styles.sizes].join(' ')} >
          <SizesForm data={sizes} control={control} />
        </div>}

        {colors && <div className={[styles.formItem, styles.colors].join(' ')} >
          <ColorsForm data={colors} control={control} />
        </div>}
      
        <SubmitButton />
      </form>
      { product && <DeleteButton onConfirm={handleDeleteProduct} />}
    </div>
  )
}
