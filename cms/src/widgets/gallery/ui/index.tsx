import { Button, Checkbox, Image} from 'antd'
import { Image as IImage, useDeleteImageMutation} from '../../../entities/image'
import styles from './Gallery.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { DeleteButton } from '../../../features/deleteButton'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useDeleteCategoryMutation } from '../../../entities/category'



export const Gallery = ({data}:{data: IImage[]}) => {
    const [selectedImages, setSelectedImages] = useState<number[]>([])
    const navigate = useNavigate()
    const [deleteImage] = useDeleteImageMutation()

    const handleSelect = (e: CheckboxChangeEvent, id: number) => {
          if(e.target.checked) {
            setSelectedImages((prev)=> [...prev, id])
        } else if (!e.target.checked) {
            setSelectedImages((prev)=> prev.filter((item)=> id !== item))     
        }
    }
    
   const handleDelete = ()=> {
        if(selectedImages.length> 0) {
            selectedImages.map((id)=> {
                deleteImage(id)
            })
        }
        setSelectedImages([])
   }

  return (
    <div className={styles.root} >
        <div className={styles.header} >
            <h1 className={styles.title}>Картинки</h1>
            <Button className={styles.addBtn} type='primary' onClick={()=> navigate(`add`)} >Добавить</Button>  
        </div>
        <div className={styles.gallery} >
            {data.map(({id, name})=> {
                return <div key={id} className={styles.imageCardHolder}>
                    <div className={styles.imageCard} >
                        <Image className={styles.image} src={process.env.REACT_APP_BACKEND_UPLOADS + '/images/' + name} width={150} height={150} alt='preview image' />
                         <Checkbox className={styles.checkbox}  onChange={(e)=> handleSelect(e, id) }  />
                    </div>
                </div>
            })}
        </div>
        { selectedImages.length>0 && <DeleteButton onConfirm={handleDelete} />}
    </div>
  )
}
