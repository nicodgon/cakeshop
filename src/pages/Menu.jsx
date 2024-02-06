import MenuProducts from "../components/MenuProducts"
import styles from "./Menu.module.css"
import PropTypes from "prop-types"

export default function Menu({products}){
  return(
    <section>
      <h1 className={styles.title}>Menú completo</h1>
      <MenuProducts products={products}/>
    </section>
  )
}

Menu.propTypes={
  products: PropTypes.array,
}