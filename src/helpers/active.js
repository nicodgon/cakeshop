import styles from "../components/NavBar.module.css";

export const active = ({ isActive }) => {
  return !isActive ? styles.link : styles.linkActive;
};
