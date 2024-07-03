import { useState } from "react";
import styles from "./Dashboard.module.css";
import NavigationLink from "../../components/NavigationLink";
import SkewedLogo from "../../assets/memesteak_logo_skewed.gif";

const pages = [
  {
    name: "VAULTS",
  },
  {
    name: "STEAKPAD",
  },
  {
    name: "COOKBOOK",
  },
  {
    name: "COMMUNITY",
  },
];

function Dashboard() {
  const [activeOption, setActiveOption] = useState(pages[0]);

  const handleMouseEnter = (evt) => {
    const activeElement = evt.currentTarget.querySelector("a");
    if (activeElement) {
      activeElement.focus();
      const activateOption = pages.find((obj) =>
        Object.values(obj).includes(activeElement.innerHTML)
      );
      setActiveOption(activateOption);
    }
  };

  const handleMouseLeave = (evt) => {
    const activeElementContent = document.activeElement.innerHTML;
    const activeOption = pages.find((obj) =>
      Object.values(obj).includes(activeElementContent)
    );
    if (activeOption) {
      setActiveOption(activeOption);
      evt.currentTarget.querySelector("a").focus();
    }
    if (document.activeElement.tagName.toLowerCase() !== "a")
      evt.currentTarget.querySelector("a").focus();
  };

  return (
    <main className={styles.mainContainer}>
      <section className={styles.contentSection}>
        {/* <h1>MEMESTEAK</h1> */}
        <img
          className={styles.titleIllustration}
          src={SkewedLogo}
          alt="Memesteak skewed logo"
        />
        <div className={styles.menuContainer}>
          <div>
            <h3 className={styles.menuTitle}>SELECT GAME</h3>
            <ul className={styles.menuOptions}>
              {pages.map((page, index) => (
                <div
                  key={index}
                  onFocus={() => setActiveOption(page)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavigationLink
                    linkType="internal"
                    link={`/${page.name.toLowerCase()}`}
                    focus={index === 0}
                  >
                    {page.name}
                  </NavigationLink>
                </div>
              ))}
            </ul>
          </div>
          <img src="" alt="" />
          <div>
            <img
              src={require(`../../assets/gifs/icon_${activeOption.name.toLowerCase()}_300.gif`)}
              alt={activeOption.name}
            />
          </div>
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            soluta vitae, enim, delectus alias ducimus corporis sequi natus
            libero numquam recusandae amet dolores modi temporibus aspernatur
            odit praesentium distinctio est!
          </p>
        </div>
      </section>
    </main>
  );
}

export { pages };
export default Dashboard;
