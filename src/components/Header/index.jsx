import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import PagesHeader from "./PagesHeader";
// import PlainLogo from "../../assets/memesteak_logo.gif";
// import NavigationLink from "../NavigationLink";

function Header() {
  const location = useLocation();

  const renderHeaderContent = () => {
    // if (location.pathname === '/'){

    // }

    // if (location.pathname === '/dashboard'){
    //   return <DashboardHeader />
    // }

    return <PagesHeader pageName={location.pathname} />;
  };

  return (
    <header className={styles.mainContainer}>
      {renderHeaderContent()}
    </header>
  );
}

export default Header;
