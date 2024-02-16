import chef from "../assets/icons/cocinera.svg";
import AboutUsRight from "../components/AboutUsRight";
import { icons } from "../data/icons";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <h1 className={styles.title}>Sobre nosotros</h1>
      <div className={styles.aboutUsLeft}>
        <img src={chef} alt="icono de cocinera" />
      </div>
      <AboutUsRight icons={icons} />
      <div className={styles.aboutUsDown}></div>
    </section>
  );
}
