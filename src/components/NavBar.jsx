import styles from "./NavBar.module.css";
import cart from "../assets/icons/carrito.svg";
import { NavLink } from "react-router-dom";
import menuIcon from "../assets/icons/menú.svg";
import NavList from "./NavList";
import { active } from "../helpers/active.js";
import { useExpand } from "../hooks/useExpand.js";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext.js";

export default function NavBar() {
  const {counter}=useCartContext()
  const {list, expand} = useExpand()
  return (
    <header>
      <nav className={styles.navContainer}>
        <NavLink className={styles.logo} to="/">
          CAKKKES
        </NavLink>
        <button onClick={expand} className={styles.btnMenu}>
          <img src={menuIcon} alt="menú" className={styles.menuIcon} />
        </button>
        <NavList active={active} list={list}/>
        <Link className={styles.iconContainer} to="/cart">
          <img
            className={styles.cartIcon}
            src={cart}
            alt="carrito"
          />
          <div className={styles.counterContainer}>
            <span>{counter}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}
