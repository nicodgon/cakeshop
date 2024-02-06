import styles from './LeftContainer.module.css'
import { Link } from 'react-router-dom'

export default function LeftContainer() {
  return (
    <div>
      <h1 className={styles.title}>Cakkkes</h1>
      <p className={styles.text}>
        ¡Bienvenido a Cakkkes! El lugar donde encontrarás una experiencia
        culinaria única y deliciosa.
      </p>
      <Link to="/menu" className={styles.btn}>
        <div>Ver el menú</div>
        <span></span>
      </Link>
    </div>
  );
}
