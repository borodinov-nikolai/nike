import { useGetAllColorsQuery } from "../../entities/color"
import { ItemsTable } from "../../widgets/itemsTable"




const ColorsPage = () => {
    const {data} = useGetAllColorsQuery()
  return (
    <>
    {data && <ItemsTable data={data} name={'Цвета'} />}
    </>
  )
}

export default ColorsPage