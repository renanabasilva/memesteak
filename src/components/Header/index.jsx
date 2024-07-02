import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import PagesHeader from "./PagesHeader";
import DashboardHeader from "./DashboardHeader";
// import PlainLogo from "../../assets/memesteak_logo.gif";
// import NavigationLink from "../NavigationLink";

function Header() {
  const location = useLocation();

  const renderHeaderContent = () => {
    if (location.pathname === "/dashboard" || location.pathname === "/") {
      return <DashboardHeader />;
    }

    return <PagesHeader pageName={location.pathname} />;
  };

  return (
    <header className={styles.mainContainer}>
      {renderHeaderContent()}
    </header>
  );
}

export default Header;
