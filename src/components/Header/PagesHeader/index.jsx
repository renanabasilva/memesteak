import styles from "./PagesHeader.module.css";
import PlainLogo from "../../../assets/memesteak_logo.gif";
import NavigationLink from "../../NavigationLink";

function PagesHeader({ pageName }) {
  const pageTitle = pageName.toUpperCase().replace("/", "");
  return (
    <div className={styles.mainContainer}>
      <img src={PlainLogo} alt="Memesteak plain logo" />
      <NavigationLink linkType="internal" link="/dashboard" tabIndex="0">
        BACK TO MENU
      </NavigationLink>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
    </div>
  );
}

export default PagesHeader;
