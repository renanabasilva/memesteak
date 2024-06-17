import { useState } from "react";
import styles from "./Vaults.module.css"
import Header from "../../components/Header";
import VaultIcon from "../../components/VaultIcon";

const vaults = [
  {
    name: "PAPER HANDS",
    img: require("../../assets/hand_iron_300.png"),
    description: "PAPER HANDS TEXT DESCRIPTION"
  },
  {
    name: "IRON HANDS",
    img: require("../../assets/hand_iron_300.png"),
    description: "IRON HANDS TEXT DESCRIPTION"
  },
  {
    name: "GOLDEN HANDS",
    img: require("../../assets/hand_iron_300.png"),
    description: "GOLDEN HANDS TEXT DESCRIPTION"
  },
  {
    name: "DIAMOND HANDS",
    img: require("../../assets/hand_iron_300.png"),
    description: "DIAMOND HANDS TEXT DESCRIPTION"
  },
  {
    name: "INFINITY GAUNTLETS",
    img: require("../../assets/hand_iron_300.png"),
    description: "INFINITY GAUNTLETS TEXT DESCRIPTION"
  }
]

function Vaults() {

  const [activeVault, setActiveVault] = useState(vaults[0]);
  return (
    <main>
      <Header />
      <section className={styles.mainContainer}>
        <h1 className={styles.menuTitle}>VAULTS</h1>
        <div className={styles.vaultsContainer}>
          {vaults.map((vault, index) =>(
            <div key={index} onClick={() => setActiveVault(vault)}>
              <VaultIcon
                name={vault.name}
                img={vault.img}
              />
            </div>
          ))}
        </div>
        <div>
          <img src={activeVault.img} alt={activeVault.name} />
          <div>
            <p>{activeVault.description}</p>
            <button>SELECT THIS VAULT</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Vaults;
