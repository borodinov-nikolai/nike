import { useGetAllProductsQuery } from "../../entities/product"
import { ItemsTable } from "../../widgets/itemsTable"
import qs from 'qs'



const ProductsPage = () => {
    const {data} = useGetAllProductsQuery(qs.stringify({orderBy:[{id: 'asc'}]}))
  return (
    <>{data?.products && <ItemsTable data={data.products} name={'Продукты'} />}</>
  )
}

export default ProductsPage