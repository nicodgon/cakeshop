import styles from "./AboutUsRight.module.css";
import ContactIcon from "./ContactIcon";
import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";

export default function AboutUsRight({ icons }) {
  return (
    <div className={styles.aboutUsRight}>
      <div className={styles.info}>
        <ContactInfo />
      </div>
      <div className={styles.infoContact}>
        <h2>Contacto</h2>
        <div className={styles.flexIcons}>
          <ContactIcon icons={icons} />
        </div>
      </div>
    </div>
  );
}

AboutUsRight.propTypes = {
  icons: PropTypes.array,
};
