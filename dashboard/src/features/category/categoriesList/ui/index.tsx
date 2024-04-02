import styles from "./ProductsList.module.scss";
import Button from "../../../../shared/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../../entities/category";

export const CategoriesList = () => {
  const navigate = useNavigate()
  const { data: categories } = useGetAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.stopPropagation();
    deleteCategory(id);
  };

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.listHeader}>
          <p>id</p> <p>название</p> <p>значение</p>
          <p>Дата создания</p>
        </div>
        <ul className={styles.list}>
          {categories?.map(({ id, name, value, createdAt }) => {
            return (
              <li onClick={()=> navigate(`/categories/${id}`)} key={id} className={styles.item}>
                <p>{id}</p>
                <p> {name}</p>
                <p>{value}</p>
                <p>{createdAt}</p>
                <p>
                  <button
                    className={styles.deleteBtn}
                    onClick={(e) => handleDelete(e, id)}
                  >
                    X
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.addBtn}>
        <Link to={"/categories/add"}>
          <Button>Добавить</Button>
        </Link>
      </div>
    </div>
  );
};
