import styles from "./Navbar.module.scss";
import { NavLink, useLocation } from "react-router-dom";

const items = [
  { id: 1, url: "/products", name: "Products" },
  { id: 2, url: "/sizes", name: "Sizes" },
  { id: 3, url: "/colors", name: "Colors" },
  { id: 4, url: "/materials", name: "Materials" },
  { id: 5, url: "/categories", name: "Categories" },
  { id: 6, url: "/users", name: "Users" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className={styles.root}>
      {items.map(({ id, url, name }) => {
        return (
          <NavLink
            to={url}
            key={id}
            className={[
              styles.link,
              location.pathname === url && styles.link__active,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
