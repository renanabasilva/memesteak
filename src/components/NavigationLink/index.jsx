import { NavLink } from "react-router-dom";
import styles from "./NavigationLink.module.css";
import { useEffect, useRef } from "react";

function NavigationLink({
  linkType = "internal" | "external",
  children,
  link,
  double,
  focus,
}) {
  const navLinkRef = useRef(null);

  useEffect(() => {
    if (focus && navLinkRef.current) {
      navLinkRef.current.focus();
    }
  }, [focus]);

  if (linkType === "internal")
    return (
      <NavLink
        to={link}
        className={`${styles.linkStyle} ${
          double ? styles.doubleArrowLink : styles.singleArrowLink
        }`}
        tabIndex="0"
        ref={focus ? navLinkRef : null}
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
        tabIndex="0"
        ref={focus ? navLinkRef : null}
      >
        {children}
      </a>
    );
}

export default NavigationLink;
