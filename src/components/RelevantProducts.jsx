import RelevantProd from './RelevantProd'
import styles from './RelevantProducts.module.css'
import PropTypes from "prop-types"

export default function RelevantProducts({products}){
  return(
    <section className={styles.productContainer}>
      <h2 className={styles.title}>Delicias de la casa</h2>
      <RelevantProd products={products}/>
    </section>
  )
}

RelevantProducts.propTypes={
  products: PropTypes.array,
}