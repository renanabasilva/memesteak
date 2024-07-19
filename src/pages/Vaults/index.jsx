import { useState, useEffect } from "react";
import { isMobile, isTablet } from "react-device-detect";
import styles from "./Vaults.module.css";
import VaultIcon from "../../components/VaultIcon";
import SingleArrowButton from "../../components/SingleArrowButton";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import PopUpContainer from "../../components/PopUpContainer";

const vaults = [
  {
    name: "PaperHands",
    img: "paper",
    period: "7 Days APR - TBA",
    description:
      "Only got a week's worth of courage? Join the PaperHands club. A mere seven days of commitment because we know that’s about as long as you can pretend to be brave before folding. If your crypto strategy involves panic selling at bedtime stories, here's your dream plan. Fold easily and early with The PaperHands!",
  },
  {
    name: "IronHands",
    img: "iron",
    period: "14 Days APR - TBA",
    description:
      "Ah, the IronHands challenge: A two-week fantasy camp where you can play make-believe investor. Two weeks might not seem like much, but for you, it's probably an eternity. Let's roll out the red carpet for the bravery that barely spans a Netflix free trial. Pretend to be a trader today with The Ironhands!",
  },
  {
    name: "GoldHands",
    img: "gold",
    period: "28 Days APR - TBA",
    description:
      "Welcome to The GoldHands, the perfect plan for those who aspire to greatness but settle for just fine. Built for those who want to feel like a long-term investor without being long-term investor. Not quite a saga, but more than a brief encounter. Feel like a champ for almost a month with The GoldHands!",
  },
  {
    name: "DiamondHands",
    img: "diamond",
    period: "3 Months APR - TBA",
    description:
      "Enter a time trial with The DiamondHands, where you will spend a quarter of a year discovering new levels of market anxiety. Over these few months, you’ll have the chance to see beyond immediate fluctuations and understand trends that only the patient can spot. Prepare to see your patience pay off with The DiamondHands!",
  },
  {
    name: "Infinity-Gauntlets",
    img: "infinity",
    period: "6 Months APR - TBA",
    description:
      "Engage in the supreme challenge with the Infinity Gauntlets, crafted for those who pick winners but exit too soon. Venture into the echelons of crypto titans, where six months of resilience could pivot your financial future. Full conviction required. Forge your destiny with The Infinity-Gauntlets.",
  },
];

function Vaults() {
  const [activeVault, setActiveVault] = useState(vaults[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isTouchDevice = isMobile || isTablet;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (evt) => {
    const activeElement = evt.currentTarget.querySelector("button");
    if (activeElement) {
      activeElement.focus();
      const activateOption = vaults.find((obj) =>
        Object.values(obj).includes(activeElement.innerHTML)
      );
      setActiveVault(activateOption);
    }
  };

  const handleMouseLeave = () => {
    const imgElement = document.activeElement.querySelector("img");
    if (imgElement) {
      const activeElementReference = imgElement.getAttribute("alt");

      const activeOption = vaults.find((obj) =>
        Object.values(obj).includes(activeElementReference)
      );

      if (activeOption) {
        setActiveVault(activeOption);
      }
    }
  };

  return (
    <main className="main-container">
      <section className={`content-section ${styles.vaultsContainer}`}>
        {windowWidth < 768 ? (
          <ul className={styles.menuOptions}>
            {vaults.map((vault, index) => (
              <div
                key={index}
                onFocus={() => setActiveVault(vault)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <SingleArrowButton focus={index === 0}>
                  {vault.name}
                </SingleArrowButton>
              </div>
            ))}
          </ul>
        ) : (
          <div
            className={`horizontal-container ${styles.handsContainer}`}
            tabIndex="-1"
          >
            {vaults.map((vault, index) => (
              <div
                key={index}
                onClick={() => setActiveVault(vault)}
                onFocus={() => setActiveVault(vault)}
                onMouseEnter={() => setActiveVault(vault)}
                onMouseLeave={handleMouseLeave}
              >
                <VaultIcon
                  name={vault.name}
                  img={vault.img}
                  firstElement={index === 0}
                />
              </div>
            ))}
          </div>
        )}
        <div>
          <div className={styles.vaultsDescriptionContainer}>
            <img
              className={styles.border}
              src={require(`../../assets/gifs/hand_${activeVault.img}_transform.gif`)}
              alt={activeVault.name}
            />
            <div className={styles.vaultsDescriptionSideContainer}>
              <h5>{activeVault.name}</h5>
              <h6>Steak Period: {activeVault.period}</h6>
              <p>{activeVault.description}</p>
            </div>
          </div>
          <div className={styles.vaultButton}>
            <PopUpContainer
              popUpTarget={<p className="popup-text">COMING SOON...</p>}
            >
              {isTouchDevice ? (
                <DoubleArrowButton>ENTER STEAK</DoubleArrowButton>
              ) : (
                <SingleArrowButton>ENTER STEAK</SingleArrowButton>
              )}
            </PopUpContainer>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Vaults;
