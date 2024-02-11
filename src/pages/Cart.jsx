import styles from "./Cart.module.css";
import PropTypes from "prop-types";
import { useCartContext } from "../hooks/useCartContext.js";
import trash from "../assets/icons/basura.svg";
import Swal from "sweetalert2";

export default function Cart() {
  const { cart, total, deleteProduct, clearCart } = useCartContext();

  const finalizePurchase = () => {
    Swal.fire({
      title: "Compra finalizada con exito",
      text: `¡Muchas gracias por confiar en nosotros!`,
      color: "#4f9000",
      icon: "success",
      allowOutsideClick: false,
      showConfirmButton: false,
    });
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  return (
    <>
      <h1 className={styles.title}>Carrito</h1>
      <section>
        {cart.length != 0 ? (
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
        ) : (
          <h3 className={styles.emptyCart}>
            Aún no se han agregado productos al carrito
          </h3>
        )}
      </section>
      {cart.length != 0 && (
        <div className={styles.totalContainer}>
          <span>Total: ${total}</span>
          <button
            onClick={() => {
              finalizePurchase();
              clearCart();
            }}
          >
            Finalizar compra
          </button>
        </div>
      )}
    </>
  );
}

Cart.propTypes = {
  products: PropTypes.array,
};
