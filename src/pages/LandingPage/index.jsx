import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import NavigationLink from "../../components/NavigationLink";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import SkewedLogo from "../../assets/memesteak_logo_skewed.gif";
import ChefGif from "../../assets/chef.gif";

function LandingPage() {
  const navigate = useNavigate();
  const functionKeyRegex = /^F(1[0-2]?|[2-9])$/;

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!functionKeyRegex.test(event.key)) {
        navigate("/dashboard");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <main>
      <section className={styles.mainContainer}>
        {/* <h1 className={styles.title}>MEMESTEAK</h1> */}
          <img
            className={styles.titleIllustration}
            src={SkewedLogo}
            alt="Memesteak skewed logo"
          />
        <NavigationLink linkType="internal" link="/dashboard">
          <DoubleArrowButton>PRESS ANY KEY TO CONTINUE</DoubleArrowButton>
        </NavigationLink>
        <img
          className={styles.spotIllustration}
          src={ChefGif}
          alt="Chef flipping a steak"
        />
      </section>
    </main>
  );
}

export default LandingPage;
