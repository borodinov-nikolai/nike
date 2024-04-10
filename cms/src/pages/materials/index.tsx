import { useGetAllMaterialsQuery} from "../../entities/material"
import { ItemsTable } from "../../widgets/itemsTable"




const MaterialsPage = () => {
  const {data} = useGetAllMaterialsQuery()
  return (
    <>
    {data && <ItemsTable data={data} name='Материалы' />}
    </>
  )
}




export default MaterialsPage