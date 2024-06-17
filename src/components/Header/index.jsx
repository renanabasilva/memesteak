import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"
import PlainLogo from "../../assets/memesteak_logo.gif"
import SingleArrowButton from "../SingleArrowButton";

function Header() {
  return(
    <header className={styles.mainContainer}>
      {/* <h1>MEMESTEAK</h1> */}
      <img
            className={styles.plainLogo}
            src={PlainLogo}
            alt="Memesteak skewed logo"
          />
      <img src="" alt="" />
      <NavLink className={styles.backButton} to={"/dashboard"}>
        <SingleArrowButton>
          BACK TO MENU
        </SingleArrowButton>
      </NavLink>
    </header>
  )
}

export default Header;