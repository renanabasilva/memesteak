import styles from "./PagesHeader.module.css";
import PlainLogo from "../../../assets/memesteak_logo.gif";
import NavigationLink from "../../NavigationLink";

function PagesHeader({ pageName }) {
  const pageTitle = pageName.toUpperCase().replace("/", "");
  return (
    <div className={styles.mainContainer}>
      <img src={PlainLogo} alt="Memesteak plain logo" />
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      <NavigationLink linkType="internal" link="/dashboard" tabIndex="0" focus>
        BACK TO MENU
      </NavigationLink>
    </div>
  );
}

export default PagesHeader;
