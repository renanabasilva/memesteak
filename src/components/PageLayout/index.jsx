import { Outlet } from "react-router-dom";
import "./PageLayout.css";
import Header from "../Header";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {children}
      </main>
    </>
  );
}

export default PageLayout;
