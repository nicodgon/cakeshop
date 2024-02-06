import styles from "./ProdDetail.module.css"
import PropTypes from "prop-types"
import { Link, useParams } from "react-router-dom";
import goBack from "../assets/icons/volver.svg"
import addToCart from "../assets/icons/sumar-carrito.svg"
import { useCartContext } from "../hooks/useCartContext.js";

export default function ProdDetail({products}){
  const {id} = useParams()
  const filteredProducts=(products.filter(prod=> prod.id === Number(id)))
  const {increase,manageCart} = useCartContext()
  return(
    <>
      <h1 className={styles.title}>Detalle del producto</h1>
      {filteredProducts.map(({id,title,image,price,description})=>{
        return(
            <div key={id} className={styles.prodContainer}>
              <h3>{title}</h3>
              <img src={image} alt={title} />
              <div className={styles.info}>
                <p>{description}</p>
                <span>${price}</span>
              </div>
              <div className={styles.buttonContainer}>
                <Link to="/menu" className={styles.goToMenu}>
                  <img src={goBack} alt="volver" />
                </Link>
                <button className={styles.addToCart} onClick={()=>{increase(); manageCart(id)}}>
                  <img src={addToCart} alt="agregar al carrito" />
                </button>
              </div>
            </div>
        )
      })}
    </>
  )
}

ProdDetail.propTypes={
  products: PropTypes.array,
}