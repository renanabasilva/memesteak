import styles from "./Dashboard.module.css";
import SkewedLogo from "../../assets/memesteak_logo_skewed.gif";
import SingleArrowButton from "../../components/SingleArrowButton";
import NavigationLink from "../../components/NavigationLink";

function Dashboard() {
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
                <NavigationLink
                  key={index}
                  linkType="internal"
                  link={`/${page.name.toLowerCase()}`}
                >
                  <SingleArrowButton>{page.name}</SingleArrowButton>
                </NavigationLink>
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
          ></div>
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
