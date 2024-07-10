import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import NavigationLink from "../../components/NavigationLink";
import SkewedLogo from "../../assets/memesteak_logo_skewed.gif";
import ChefGif from "../../assets/chef.gif";
import brickFloor from "../../assets/bg_home_footer_walls.png";

function LandingPage() {
  // const navigate = useNavigate();
  // const functionKeyRegex = /^F(1[0-2]?|[2-9])$/;

  // useEffect(() => {
  //   const handleKeyPress = (event) => {
  //     if (!functionKeyRegex.test(event.key)) {
  //       navigate("/dashboard");
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyPress);
  //   };
  // });

  return (
    <main>
      <section className={styles.mainContainer}>
        <div className={styles.brickCeiling}>
          <div className={styles.statusBar}></div>
        </div>
        <img
          className={styles.titleIllustration}
          src={SkewedLogo}
          alt="Memesteak skewed logo"
        />
        <NavigationLink double linkType="internal" link="/dashboard">
          PRESS ANY KEY TO CONTINUE
        </NavigationLink>
        <img
          className={styles.spotIllustration}
          src={ChefGif}
          alt="Chef flipping a steak"
        />
        <div className={styles.brickFloor}></div>
      </section>
    </main>
  );
}

export default LandingPage;
