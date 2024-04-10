import { ItemsTable } from "../../widgets/itemsTable";
import {useGetAllCategoriesQuery } from "../../entities/category";




const CategoriesPage = () => {
  const {data} = useGetAllCategoriesQuery()
  return (
    < >
      {data && <ItemsTable name='Категории' data={data}/>}
    </>
  );
};

export default CategoriesPage;
