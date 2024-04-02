import styles from './SizesList.module.scss';
import Button from "../../../../shared/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteSizeMutation, useGetAllSizesQuery } from "../../../../entities/size";

export const SizesList = () => {
  const navigate = useNavigate()
  const { data: sizes } = useGetAllSizesQuery();
  const [deleteSize] = useDeleteSizeMutation();
  const handleDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.stopPropagation();
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
              <li onClick={()=>navigate(`/sizes/${id}`)} key={id} className={styles.item}>
                <p>{id}</p>
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
        <Link to={"/sizes/add"}>
          <Button>Добавить</Button>
        </Link>
      </div>
    </div>
  );
};
