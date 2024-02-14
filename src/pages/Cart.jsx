import styles from "./Cart.module.css";
import PropTypes from "prop-types";
import { useCartContext } from "../hooks/useCartContext.js";
import Total from "../components/Total.jsx";
import CartList from "../components/CartList.jsx";

export default function Cart() {
  const { cart, deleteProduct, total, clearCart } = useCartContext();

  return (
    <>
      <h1 className={styles.title}>Carrito</h1>
      <section>
        {cart.length != 0 ? (
          <CartList deleteProduct={deleteProduct} cart={cart} />
        ) : (
          <h3 className={styles.emptyCart}>
            Aún no se han agregado productos al carrito
          </h3>
        )}
      </section>
      {cart.length != 0 && <Total total={total} clearCart={clearCart} />}
    </>
  );
}

Cart.propTypes = {
  products: PropTypes.array,
};
