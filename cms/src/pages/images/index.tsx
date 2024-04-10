import { useGetAllImagesQuery } from "../../entities/image"
import { ItemsTable } from "../../widgets/itemsTable"




const ImagesPage = () => {
  const {data} = useGetAllImagesQuery()
  return (
    <>{data && <ItemsTable data={data} name='Картинки' />}</>
  )
}

export default ImagesPage