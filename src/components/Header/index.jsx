import styles from "./Header.module.css";
import PlainLogo from "../../assets/memesteak_logo.gif";
import NavigationLink from "../NavigationLink";

function Header() {
  return (
    <header className={styles.mainContainer}>
      {/* <h1>MEMESTEAK</h1> */}
      <img
        className={styles.plainLogo}
        src={PlainLogo}
        alt="Memesteak skewed logo"
      />
      <img src="" alt="" />
      <div className={styles.backButton}>
        <NavigationLink linkType="internal" link="/dashboard">
          BACK TO MENU
        </NavigationLink>
      </div>
    </header>
  );
}

export default Header;
