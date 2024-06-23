import { useState } from "react";
import styles from "./Vaults.module.css";
import VaultIcon from "../../components/VaultIcon";
import SingleArrowButton from "../../components/SingleArrowButton";

const vaults = [
  {
    name: "PAPER HANDS",
    img: "paper",
    description: "PAPER HANDS TEXT DESCRIPTION",
  },
  {
    name: "IRON HANDS",
    img: "iron",
    description: "IRON HANDS TEXT DESCRIPTION",
  },
  {
    name: "GOLDEN HANDS",
    img: "gold",
    description: "GOLDEN HANDS TEXT DESCRIPTION",
  },
  {
    name: "DIAMOND HANDS",
    img: "diamond",
    description: "DIAMOND HANDS TEXT DESCRIPTION",
  },
  {
    name: "INFINITY GAUNTLETS",
    img: "infinity",
    description: "INFINITY GAUNTLETS TEXT DESCRIPTION",
  },
];

function Vaults() {
  const [activeVault, setActiveVault] = useState(vaults[0]);
  return (
    <section className="main-container">
      <h1 className="page-title">VAULTS</h1>
      <div
        className={`horizontal-container ${styles.vaultsContainer}`}
        tabIndex="-1"
      >
        {vaults.map((vault, index) => (
          <div key={index} onClick={() => setActiveVault(vault)}>
            <VaultIcon name={vault.name} img={vault.img} />
          </div>
        ))}
      </div>
      <div className={styles.vaultsDescriptionContainer}>
        <img
          className={styles.border}
          src={require(`../../assets/images/hand_${activeVault.img}_300.png`)}
          alt={activeVault.name}
        />
        <div className={styles.vaultsDescriptionSideContainer}>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            dolores molestias inventore praesentium, ex quod, magni placeat iste
            veritatis nisi consequuntur non expedita eum, fuga beatae unde
            facilis iusto nobis! {activeVault.description}
          </p>
          <div className={styles.vaultButton}>
            <SingleArrowButton>SELECT THIS VAULT</SingleArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vaults;
