import trash from "../assets/icons/basura.svg";
import styles from "./CartList.module.css";
import PropTypes from "prop-types";

export default function CartList({ cart, deleteProduct }) {
  return (
    <ol className={styles.list}>
      {cart.map(({ id, title, image, price, quantity }) => {
        return (
          <li key={id} className={styles.prodContainer}>
            <img className={styles.prodimage} src={image} alt={title} />
            <div className={styles.info}>
              <h3>{title}</h3>
              <span>${price}</span>
              <span>cantidad: {quantity}</span>
            </div>
            <img
              className={styles.trashIcon}
              src={trash}
              onClick={() => deleteProduct(id)}
              alt="basura"
            />
          </li>
        );
      })}
    </ol>
  );
}

CartList.propTypes = {
  cart: PropTypes.array,
  deleteProduct: PropTypes.func,
};
