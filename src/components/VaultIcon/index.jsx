import { useEffect, useRef } from "react";
import styles from "./VaultIcon.module.css";

function VaultIcon({ name, img, firstElement }) {
  const navLinkRef = useRef(null);
  
  useEffect(() => {
    if (firstElement && navLinkRef.current) {
      navLinkRef.current.focus();
    }
  }, [firstElement]);

  return (
    <>
      <button
        className={styles.border}
        tabIndex="0"
        ref={firstElement ? navLinkRef : null}
      >
        <img
          className={styles.hand}
          src={require(`../../assets/images/hand_${img}_200.png`)}
          alt={name}
        />
      </button>
    </>
  );
}

export default VaultIcon;
