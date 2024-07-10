import { useLocation } from "react-router-dom";
import { pages } from "../../pages/Dashboard";
import styles from "./Header.module.css";
import PagesHeader from "./PagesHeader";
import DashboardHeader from "./DashboardHeader";

function Header() {
  const location = useLocation();

  const renderHeaderContent = () => {
    if (location.pathname === "/dashboard") {
      return <DashboardHeader />;
    }
    if (
      pages.some((page) => `/${page.name.toLowerCase()}` === location.pathname)
    ) {
      return <PagesHeader pageName={location.pathname} />;
    }
  };

  if (location.pathname === "/") {
    return;
  }
  return (
    <header className={styles.mainContainer}>{renderHeaderContent()}</header>
  );
}

export default Header;
