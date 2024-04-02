import styles from './MaterialsList.module.scss';
import Button from "../../../../shared/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteMaterialMutation, useGetAllMaterialsQuery } from '../../../../entities/material';

export const MaterialsList = () => {
  const navigate = useNavigate();
  const { data: materials } = useGetAllMaterialsQuery();
  const [deleteMaterial] = useDeleteMaterialMutation();
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.stopPropagation();
    deleteMaterial(id);
  };

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.listHeader}>
          <p>id</p> <p>значение</p>
          <p>Дата создания</p>
        </div>
        <ul className={styles.list}>
          {materials?.map(({ id, name, value}) => {
            return (
              <li onClick={()=> navigate(`/materials/${id}`)} key={id} className={styles.item}>
                <p>{id}</p>
                <p>{name}</p>
                <p>{value}</p>
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
        <Link to={"/materials/add"}>
          <Button>Добавить</Button>
        </Link>
      </div>
    </div>
  );
};
