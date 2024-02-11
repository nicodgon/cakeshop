import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useChecked } from "../hooks/useChecked";
import styles from "./ContactIcon.module.css"

export default function ContactIcon({ icons }) {
  const {img,change} = useChecked()
  return (
    <>
      {icons.map(({ title, img, link }) => {
        return (
          <a key={title} href={link} target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={img} alt={title} />
          </a>
        );
      })}
      <CopyToClipboard text="nicolasdgz20@gmail.com">
        <button onClick={change} className={styles.btn}><img src={img} alt="copiar" /></button>
      </CopyToClipboard>
    </>
  );
}

ContactIcon.propTypes = {
  icons: PropTypes.array,
};
