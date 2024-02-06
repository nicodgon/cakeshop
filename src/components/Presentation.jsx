import styles from './Presentation.module.css'
import pastel from '../assets/images/pastel-presentación.png'
import LeftContainer from './LeftContainer'

export default function Presentation(){
  return(
    <section className={styles.presentation}>
      <LeftContainer/>
      <div className={styles.rightContainer}>
        <img src={pastel} alt="imagen de presentacion" />
      </div>
    </section>
  )
}