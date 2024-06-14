import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./LandingPage.module.css";
import NavigationLink from "../../components/NavigationLink";
import DoubleArrowButton from "../../components/DoubleArrowButton";

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
      <section className={style.mainContainer}>
        <h1 className={style.title}>MEMESTEAK</h1>
        <NavigationLink linkType="internal" link="/dashboard">
          <DoubleArrowButton>PRESS ANY KEY TO CONTINUE</DoubleArrowButton>
        </NavigationLink>
        <div className={style.imgContainer}></div>
      </section>
    </main>
  );
}

export default LandingPage;
