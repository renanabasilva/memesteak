import { NavLink } from "react-router-dom";
import styles from "./NavigationLink.module.css";

function NavigationLink({
  linkType = "internal" | "external",
  children,
  link,
  double,
}) {
  if (linkType === "internal")
    return (
      <NavLink
        to={link}
        className={`${styles.linkStyle} ${
          double ? styles.doubleArrowLink : styles.singleArrowLink
        }`}
      >
        {children}
      </NavLink>
    );

  if (linkType === "external")
    return (
      <a
        className={`${styles.linkStyle} ${
          double ? styles.doubleArrowLink : styles.singleArrowLink
        }`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
}

export default NavigationLink;
