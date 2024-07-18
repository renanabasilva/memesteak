import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  const location = useLocation();

  if (location.pathname === "/") {
    return;
  }

  return <footer className={styles.mainContainer}></footer>;
}

export default Footer;
