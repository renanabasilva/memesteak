import { NavLink } from "react-router-dom";
import style from "./NavigationLink.module.css";

function NavigationLink({
  linkType = "internal" | "external",
  children,
  link,
}) {
  if (linkType === "internal")
    return (
      <NavLink to={link} className={style.navLink}>
        {children}
      </NavLink>
    );

  if (linkType === "external")
    return (
      <a className={style.navLink} href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
}

export default NavigationLink;
