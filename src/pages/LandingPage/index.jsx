import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./LandingPage.module.css"

function LandingPage() {

  const navigate = useNavigate();
  const functionKeyRegex = /^F(1[0-2]?|[2-9])$/;

  useEffect(() => {
    const handleKeyPress = (event) => {
      if(!functionKeyRegex.test(event.key)){
        navigate('/dashboard');
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <main>
      <section className={style.mainContainer}>
        <h1 className={style.title}>MEMESTEAK</h1>
        <NavLink to="/dashboard" className={style.button}>PRESS ANY KEY TO CONTINUE</NavLink>
        <div className={style.imgContainer}></div>
      </section>
    </main>
  );
}

export default LandingPage;
