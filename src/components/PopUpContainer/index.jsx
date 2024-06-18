import { useState } from "react";
import styles from "./PopUpContainer.module.css";

function PopUpContainer({ children, popUpTarget }) {
  const [show, setShow] = useState(false);

  const togglePopUp = () => {
    setShow(!show);
  };

  const closeByOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      setShow(false);
    }
  };

  return (
    <>
      <div onClick={togglePopUp}>{children}</div>
      {show && (
        <div className={styles.popUpContainer} onClick={closeByOverlay}>
          <div className={styles.popUpContent}>
            <span className={styles.closeButton} onClick={togglePopUp}>
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
