import styles from "./ProductsList.module.scss";
import Button from "../../../../shared/ui/button";
import { Link } from "react-router-dom";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../../entities/category";

export const CategoriesList = () => {
  const { data: categories } = useGetAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const handleDelete = (id: number) => {
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
              <li key={id} className={styles.item}>
                <p>{id}</p>
                <p> {name}</p>
                <p>{value}</p>
                <p>{createdAt}</p>
                <p>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(id)}
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
