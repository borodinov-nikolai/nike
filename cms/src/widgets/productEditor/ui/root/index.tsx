import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './ProductEditor.module.scss'
import { Image, Input, InputNumber, Radio, Switch } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import SizesForm from '../components/sizesForm'
import { useGetAllSizesQuery } from '../../../../entities/size'
import { useGetAllColorsQuery } from '../../../../entities/color'
import { SubmitButton } from '../../../../features/submitButton'
import ColorsForm from '../components/colorsForm'
import { useAddProductMutation, useDeleteProductMutation, useGetOneProductQuery, useUpdateProductMutation } from '../../../../entities/product'
import { ImagePicker } from '../../../../features/imagePicker'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DeleteButton } from '../../../../features/deleteButton'
import { useGetAllMaterialsQuery } from '../../../../entities/material'
import MaterialsForm from '../components/materialsForm'
import { useGetAllCategoriesQuery } from '../../../../entities/category'
import CategoriesForm from '../components/categoriesForm'
import ImagesForm from '../components/imagesForm'
import { Image as IImage } from '../../../../entities/image'
import CharacteristicsForm from '../components/characteristicsForm'
import { ICharacteristic } from '../../../../entities/characteristic'


export interface IProductFormValues {
  name: string
  price: number
  oldPrice?: number
  gender: string
  preview: number
  description: string
  materials: number[]
  sizes: number[]
  colors: number[]
  categories: number[]
  images: number[]
  characteristics: ICharacteristic[]
  new: boolean
  hit: boolean
  discount: boolean
  
}

 


export const ProductEditor = () => {
  const navigate = useNavigate()
  const { edit: params } = useParams()
  const [preview, setPreview] = useState<IImage>()
  const [imagesPreview, setImagesPreview] = useState<IImage[]>()
  const [addProduct] = useAddProductMutation()
  const [updateProduct] = useUpdateProductMutation()
  const [deleteProduct] = useDeleteProductMutation()
  const { data: product } = useGetOneProductQuery(+params!, { skip: params === 'add' && true })
  const { data: sizes } = useGetAllSizesQuery()
  const { data: colors } = useGetAllColorsQuery()
  const { data: materials } = useGetAllMaterialsQuery()
  const { data: categories } = useGetAllCategoriesQuery()
  const { control, handleSubmit, watch, setValue } = useForm<IProductFormValues, (data: IProductFormValues) => void>({
    defaultValues: {
      name: '',
      price: undefined,
      oldPrice: undefined,
      description: '',
      preview: undefined,
      discount: false,
      new: false,
      hit: false,
      sizes: [],
      colors: [],
      materials: [],
      categories: [],
      images: [],
      characteristics:[]
    }
  })
  

  useEffect(() => {
    if (product) {
      const { name, price, oldPrice, description, gender, sizes, colors, materials, preview, categories, images, characteristics, hit, new:isNew, discount} = product
      setValue('name', name)
      setValue('price', price)
      setValue('oldPrice', oldPrice)
      setValue('description', description)
      setValue('gender', gender)
      setValue('sizes', sizes?.map(({ id }) => id))
      setValue('colors', colors?.map(({ id }) => id))
      setValue('materials', materials?.map(({ id }) => id))
      setValue('preview', preview?.id)
      setValue('categories', categories?.map(({ id }) => id))
      setValue('images', images?.map(({ id }) => id))
      setValue('characteristics', characteristics)
      setValue('new', isNew)
      setValue('hit', hit)
      setValue('discount', discount)
      setPreview(preview)
      setImagesPreview(images)
    }
  }, [product])



  const onSubmit: SubmitHandler<IProductFormValues> = (data) => {
    if (params !== 'add') {
      updateProduct({ id: +params!, data })
    } else {
      addProduct(data)
    }
    navigate('/products')
  }


  const handleDeleteProduct = () => {
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

        <div className={[styles.formItem, styles.preview].join(' ')} >
          <label >Превью:</label>
          <div>
            <Controller
              name='preview'
              control={control}
              render={({ field }) => <div className={styles.previewInput} > <ImagePicker onChange={(value) => { setPreview(value as IImage); field.onChange((value as IImage).id) }} multiple={false} />
                {preview && <Image preview={false} width={150} height={150} src={process.env.REACT_APP_BACKEND_UPLOADS + '/images/' + preview.name} alt='preview image' />}</div>}
            />
          </div>
        </div>

        <div className={[styles.formItem, styles.preview].join(' ')} >
          <label >Изображения:</label>
          <div>
          <ImagesForm  setImagesPreview={setImagesPreview} imagesPreview={imagesPreview} control={control} />
          </div>
        </div>

        <div className={[styles.formItem, styles.gender].join(' ')} >
          <label>Пол:</label>
          <div className={styles.inputField} >
            <Controller
              name='gender'
              control={control}
              render={({ field }) => <Radio.Group value={field.value} onChange={(e) => field.onChange(e.target.value)} >
                <Radio value={'Мужские'}>мужские</Radio>
                <Radio value={'Женские'}>женские</Radio>
              </Radio.Group>}
            />
          </div>
          {categories && <div className={[styles.formItem, styles.categories].join(' ')} >
            <label>Категории:</label>
            <div className={styles.inputField} >
              <CategoriesForm data={categories} control={control} />
            </div>
          </div>}
        </div >


        {sizes && <div className={[styles.formItem, styles.sizes].join(' ')} >
          <label> Размеры: </label>
          <div className={styles.inputField} >
            <SizesForm data={sizes} control={control} />
          </div>
        </div>}

        {colors && <div className={[styles.formItem, styles.colors].join(' ')} >
          <label>Цвета:</label>
          <div className={styles.inputField}>
            <ColorsForm data={colors} control={control} />
          </div>
        </div>}
        {materials && <div className={[styles.formItem, styles.materials].join(' ')} >
          <label>Материалы:</label>
          <div className={styles.inputField} >
            <MaterialsForm data={materials} control={control} />
          </div>
        </div>}
         <div className={[styles.formItem, styles.materials].join(' ')} >
          <label>Параметры:</label>
          <div className={[styles.inputField, styles.inputField_parameters].join(' ')} >
            <div className={styles.formItem_parametr} >
              <label htmlFor="">Хит:</label>
              <Controller
              name='hit'
              control={control}
              render={(({field})=> <Switch {...field} /> )}
              />
            </div>
            <div className={styles.formItem_parametr} >
              <label htmlFor="">Новинка:</label>
              <Controller
              name='new'
              control={control}
              render={(({field})=> <Switch {...field} /> )}
              />
            </div>
            <div className={styles.formItem_parametr} >
              <label htmlFor="">Распродажа</label>
              <Controller
              name='discount'
              control={control}
              render={(({field})=> <Switch {...field} /> )}
              />
            </div>
          </div>
        </div>
        <div className={[styles.formItem, styles.characteristics].join(' ')} >
          <label>Характеристики:</label>
          <div className={styles.inputField} >
            <CharacteristicsForm watch={watch} setValue={setValue} />
          </div>
        </div>


        <SubmitButton />
      </form>
      {product && <DeleteButton onConfirm={handleDeleteProduct} />}
    </div>
  )
}
