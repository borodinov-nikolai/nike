import styles from './ImageEditor.module.scss'
import { SubmitButton } from '../../../features/submitButton'
import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { DeleteButton } from '../../../features/deleteButton'
import { useUploadImageMutation } from '../../../entities/image'





export const ImageEditor = () => {
   const [files, setFiles] = useState<FileList | null>()
    const navigate = useNavigate()
    const {edit: params} = useParams()
   const [uploadImage] = useUploadImageMutation()
  





  const onSubmit = (event: FormEvent<HTMLFormElement>)=> {
          event?.preventDefault()
          
          if(files) {
             const arr = Array.from(files)
             arr.forEach((file)=> {
               const formData = new FormData()
               formData.append('file', file as Blob)
               uploadImage(formData)
            })
            navigate('/images')
          }
          

  }

const handleDelete = ()=> {

}

  return (
    <div className={styles.root} >
       <form className={styles.form} onSubmit={(e)=> onSubmit(e)}>
        <div className={styles.formItem} >
            <label htmlFor="value">Значение:</label>
            <input type="file" multiple onChange={(e)=> setFiles(e.target.files)}/>
        </div>
        <SubmitButton />
       </form>
       <DeleteButton onConfirm={handleDelete} />
    </div>
  )
}
