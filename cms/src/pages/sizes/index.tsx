import { useGetAllSizesQuery, useGetSizeQuery } from "../../entities/size"
import { ItemsTable } from "../../widgets/itemsTable"




const SizesPage = () => {
  const {data} = useGetAllSizesQuery()
  return (
    <>
    {data && <ItemsTable data={data} name='Размеры' />}
    </>
  )
}

export default SizesPage