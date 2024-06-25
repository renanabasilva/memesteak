import styles from "./Steakpad.module.css";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import TokenCard from "../../components/TokenCard";
import NavigationLink from "../../components/NavigationLink";
import PopUpContainer from "../../components/PopUpContainer";
import ContactForm from "../../components/ContactForm";

const cards = [
  {
    project: "MEMESTEAK",
    ticker: "$STEAK",
    chain: "Chain",
    price: "TBA",
    ido_date: "TBA",
    tge: "TBA",
    vesting: "TBA",
  },
  {
    project: "TBA",
    ticker: "TBA",
    chain: "TBA",
    price: "TBA",
    ido_date: "TBA",
    tge: "TBA",
    vesting: "TBA",
  },
  {
    project: "TBA",
    ticker: "TBA",
    chain: "TBA",
    price: "TBA",
    ido_date: "TBA",
    tge: "TBA",
    vesting: "TBA",
  },
];

function Steakpad() {
  return (
    <main>
      <section className="main-container">
        <div className="center">
          <h1 className="page-title">STEAKPAD</h1>
          <p>
            Unleash the power of staking with our SteakPad: Stake to Win.
            Questions? Connect with our community on Telegram or check the
            CookBook for a full breakdown.
          </p>
          <NavigationLink double linkType="external" link="/steakpad">
            JOIN POOL
          </NavigationLink>
        </div>
        <div
          className={`horizontal-container ${styles.tokenCardContainer}`}
          tabIndex="-1"
        >
          {cards.map((card, index) => (
            <TokenCard
              key={index}
              project={card.project}
              ticker={card.ticker}
              chain={card.chain}
              price={card.price}
              ido_date={card.ido_date}
              tge={card.tge}
              vesting={card.vesting}
            />
          ))}
        </div>
        <footer className="center">
          <p>
            Ready to launch your project? Reach out to our team, share your
            vision, and step onto the SteakPad.
          </p>
          <PopUpContainer popUpTarget={<ContactForm />}>
            <DoubleArrowButton>CONTACT US</DoubleArrowButton>
          </PopUpContainer>
        </footer>
      </section>
    </main>
  );
}

export default Steakpad;
