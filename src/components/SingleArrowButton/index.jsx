import { useEffect, useRef } from "react";
import style from "./SingleArrowButton.module.css";

function SingleArrowButton({ children, focus }) {
  const navLinkRef = useRef(null);

  useEffect(() => {
    if (focus && navLinkRef.current) {
      navLinkRef.current.focus();
    }
  }, [focus]);

  return (
    <button
      className={style.button}
      tabIndex="0"
      ref={focus ? navLinkRef : null}
    >
      {children}
    </button>
  );
}

export default SingleArrowButton;
