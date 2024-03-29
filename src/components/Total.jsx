import { useFinalizePurchase } from "../hooks/useFinalizePurchase.js";
import styles from "./Total.module.css";
import PropTypes from "prop-types";

export default function Total({ total, clearCart }) {
  const {finalizePurchase} = useFinalizePurchase();
  return (
    <div className={styles.totalContainer}>
      <span>Total: ${total}</span>
      <button
        onClick={() => {
          finalizePurchase()
          clearCart();
        }}
      >
        Finalizar compra
      </button>
    </div>
  );
}

Total.propTypes = {
  total: PropTypes.node,
  clearCart: PropTypes.func,
};
