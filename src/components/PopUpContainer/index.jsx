import { useEffect, useState } from "react";
import styles from "./PopUpContainer.module.css";

function PopUpContainer({ children, popUpTarget }) {
  const [show, setShow] = useState(false);

  const togglePopUp = () => {
    setShow(!show);
  };

  const closeByOverlay = (evt) => {
    if (evt.target === evt.currentTarget) setShow(false);
  };

  const closeOnEnter = (evt) => {
    if (evt.key === "Enter" && evt.target === document.activeElement)
      setShow(false);
  };

  useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.keyCode === 27) setShow(false);
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <div onClick={togglePopUp}>{children}</div>
      {show && (
        <div className={styles.popUpContainer} onClick={closeByOverlay}>
          <div className={styles.popUpContent}>
            <span
              className={styles.closeButton}
              onClick={togglePopUp}
              onKeyDown={closeOnEnter}
              tabIndex="0"
            >
              &times;
            </span>
            <div>{popUpTarget}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUpContainer;
