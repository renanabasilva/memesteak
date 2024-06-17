import styles from "./VaultIcon.module.css";

function VaultIcon({ name, img, vault, setVault }) {
  return (
    <>
      <button className={styles.border}>
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
