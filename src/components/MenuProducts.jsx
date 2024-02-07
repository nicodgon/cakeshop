import styles from "./MenuProducts.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MenuProducts({ products }) {
  return (
    <ol className={styles.list}>
      {products.map(({ id, title, image, description }) => {
        return (
          <li key={id}>
            <Link to={`/detail/${id}`} className={styles.prodContainer}>
              <img src={image} alt={title} />
              <div className={styles.info}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

MenuProducts.propTypes = {
  products: PropTypes.array,
};
