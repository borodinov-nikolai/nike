import { Control, Controller, ControllerRenderProps } from 'react-hook-form'
import styles from './ImagesForm.module.scss'
import { IProductFormValues } from '../../root'
import { Image as IImage } from '../../../../../entities/image'
import { FC } from 'react'
import { ImagePicker } from '../../../../../features/imagePicker'
import { Image } from 'antd'


interface IProps {
    control?: Control<IProductFormValues, (data: IProductFormValues) => void, IProductFormValues>
    imagesPreview?: IImage[]
    setImagesPreview?: (value: IImage[])=> void
}


const ImagesForm:FC<IProps> = ({control, imagesPreview, setImagesPreview}) => {

    const onImageChange = (value: IImage[], field: ControllerRenderProps<IProductFormValues, "images">)=> {
        field.onChange(value.map(({id})=> id))
        setImagesPreview && setImagesPreview(value)
   }
   
  return (
    <div className={styles.root} >
    <Controller
    name='images'
    control={control}
    render={({field})=> <div>
        <ImagePicker multiple onChange={(value)=> onImageChange(value as IImage[], field)}/>
    </div>}
    
    />
    <div className={styles.imagesHolder} >{imagesPreview?.map(({id, name})=> <Image preview={false} key={id} width={150} height={150} src={process.env.REACT_APP_BACKEND_UPLOADS + '/images/'+ name} />)}</div>
    </div>
  )
}

export default ImagesForm