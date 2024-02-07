import styles from "./NavList.module.css";
import { NavLink } from "react-router-dom";
import { pageLinks } from "../data/pageLinks";
import PropTypes from "prop-types";

export default function NavList({ active, list }) {
  return (
    <ol className={list}>
      {pageLinks.map(({ page, to }) => {
        return (
          <li key={page} className={styles.linkContainer}>
            <NavLink className={active} to={to}>
              {page}
            </NavLink>
          </li>
        );
      })}
    </ol>
  );
}

NavList.propTypes = {
  active: PropTypes.func,
  list: PropTypes.node,
};
