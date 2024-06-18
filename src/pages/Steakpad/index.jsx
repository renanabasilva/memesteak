import styles from "./Steakpad.module.css";
import ContactPopUpForm from "../../components/ContactPopUpForm";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import TokenCard from "../../components/TokenCard";
import NavigationLink from "../../components/NavigationLink";

function Steakpad() {
  return (
    <main>
      <ContactPopUpForm />
      <section className="main-container">
        <div className="center">
          <h1 className="page-title">STEAKPAD</h1>
          <p>
            Memesteak description and info. Memesteak description and info.
            Memesteak description and info. Memesteak description and info.
            Memesteak description.
          </p>
          <NavigationLink linkType="external" link="/steakpad">
            <DoubleArrowButton>JOIN POOL</DoubleArrowButton>
          </NavigationLink>
        </div>
        <div className={styles.tokenCardContainer}>
          <TokenCard />
          <TokenCard />
          <TokenCard />
        </div>
        <footer className="center">
          <p>
            If they have a project they'd like to launch on our platform to get
            in touch with a button they can press to fill a basic form out.
          </p>
          <NavigationLink linkType="external" link="/steakpad">
            <DoubleArrowButton>CONTACT US</DoubleArrowButton>
          </NavigationLink>
        </footer>
      </section>
    </main>
  );
}

export default Steakpad;
