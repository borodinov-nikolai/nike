import { useNavigate } from "react-router-dom";
import styles from './CategoriesPage.module.scss'
import { ItemsList } from "../../widgets/itemsList";
import {useGetAllCategoriesQuery } from "../../entities/category";




const CategoriesPage = () => {
  const navigate = useNavigate()
  const {data} = useGetAllCategoriesQuery()
  return (
    <div className={styles.root} >
      {data && <ItemsList data={data}/>}
    </div>
  );
};

export default CategoriesPage;
