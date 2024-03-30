import styles from './MaterialsList.module.scss';
import Button from "../../../../shared/ui/button";
import { Link } from "react-router-dom";
import { useDeleteSizeMutation, useGetAllSizesQuery } from "../../../../entities/size";

export const MaterialsList = () => {
  const { data: sizes } = useGetAllSizesQuery();
  const [deleteSize] = useDeleteSizeMutation();
  const handleDelete = (id: number) => {
    deleteSize(id);
  };

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.listHeader}>
          <p>id</p> <p>значение</p>
          <p>Дата создания</p>
        </div>
        <ul className={styles.list}>
          {sizes?.map(({ id, value, createdAt }) => {
            return (
              <li key={id} className={styles.item}>
                <p>{id}</p>
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
        <Link to={"/sizes/add"}>
          <Button>Добавить</Button>
        </Link>
      </div>
    </div>
  );
};
