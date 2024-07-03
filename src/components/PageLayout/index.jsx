import { Outlet } from "react-router-dom";
import "./PageLayout.css";

function PageLayout({ children }) {
  return (
    <>
      <Outlet />
      {children}
    </>
  );
}

export default PageLayout;
