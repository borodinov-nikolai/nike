import { useGetAllImagesQuery } from "../../entities/image"
import { Gallery } from "../../widgets/gallery"






const ImagesPage = () => {
  const {data} = useGetAllImagesQuery()
  return (
    <>{data && <Gallery data={data} />}</>
  )
}

export default ImagesPage