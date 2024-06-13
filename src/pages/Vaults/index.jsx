import { useState } from "react";
import Header from "../../components/Header";
import VaultIcon from "../../components/VaultIcon";

const vaults = [
  {
    name: "PAPER HANDS",
    img: "/",
    description: "PAPER HANDS TEXT DESCRIPTION"
  },
  {
    name: "IRON HANDS",
    img: "/",
    description: "IRON HANDS TEXT DESCRIPTION"
  },
  {
    name: "GOLDEN HANDS",
    img: "/",
    description: "GOLDEN HANDS TEXT DESCRIPTION"
  },
  {
    name: "DIAMOND HANDS",
    img: "/",
    description: "DIAMOND HANDS TEXT DESCRIPTION"
  },
  {
    name: "INFINITY GAUNTLETS",
    img: "/",
    description: "INFINITY GAUNTLETS TEXT DESCRIPTION"
  }
]

function Vaults() {

  const [activeVault, setActiveVault] = useState(vaults[0]);
  return (
    <main>
      <Header />
      <section>
        <h1>VAULTS</h1>
        <div>
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
