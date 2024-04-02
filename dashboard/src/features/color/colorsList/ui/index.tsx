import styles from './ColorsList.module.scss';
import Button from "../../../../shared/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllColorsQuery } from '../../../../entities/color';
import { useDeleteColorMutation } from '../../../../entities/color';

export const ColorsList = () => {
  const navigate = useNavigate()
  const { data: colors } = useGetAllColorsQuery();
  const [deleteColor] = useDeleteColorMutation();
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.stopPropagation();
    deleteColor(id);
  };

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.listHeader}>
          <p>id</p> <p>значение</p>
          <p>Дата создания</p>
        </div>
        <ul className={styles.list}>
          {colors?.map(({ id, name, value}) => {
            return (
              <li onClick={()=> navigate(`/colors/${id}`)} key={id} className={styles.item}>
                <p>{id}</p>
                <p>{name}</p>
                <p className={styles.color} style={{background: value}} ></p>
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
        <Link to={"/colors/add"}>
          <Button>Добавить</Button>
        </Link>
      </div>
    </div>
  );
};
