import styles from './RelevantProd.module.css'
import { Link } from 'react-router-dom'
import { filteredProducts } from '../helpers/filterProducts.js'
import PropTypes from "prop-types"

export default function RelevantProd ({products}){
  const prods = filteredProducts(products)
  return (
    <div className={styles.prodContainer}>
      {prods.map(({id,title,image})=>{
        return(
          <div className={styles.itemContainer} key={id}>
            <h3>{title}</h3>
            <Link to={`/detail/${id}`}>
              <img src={image} alt={title}/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

RelevantProd.propTypes={
  products: PropTypes.array,
}