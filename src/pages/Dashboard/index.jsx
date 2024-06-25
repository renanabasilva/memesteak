import styles from "./Dashboard.module.css";
import SkewedLogo from "../../assets/memesteak_logo_skewed.gif";
import NavigationLink from "../../components/NavigationLink";
import { useState } from "react";

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

  const handleMouseLeave = () => {
    const activeElementContent = document.activeElement.innerHTML;
    const activeOption = pages.find((obj) =>
      Object.values(obj).includes(activeElementContent)
    );

    if (activeOption) {
      setActiveOption(activeOption);
    }
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
                  onMouseEnter={() => setActiveOption(page)}
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
          <div
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid #0fF",
            }}
          >
            {activeOption.name}
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

export default Dashboard;
