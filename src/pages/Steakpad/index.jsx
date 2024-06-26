import styles from "./Steakpad.module.css";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import TokenCard from "../../components/TokenCard";
import PopUpContainer from "../../components/PopUpContainer";
import ContactForm from "../../components/ContactForm";
import memesteakJump from "../../assets/gifs/memesteak_logo_jump.gif";

const cards = [
  {
    project: "MEMESTEAK",
    ticker: "$STEAK",
    chain: "Chain",
    price: "TBA",
    ido_date: "TBA",
    tge: "TBA",
    vesting: "TBA",
    img: memesteakJump,
  },
  {
    project: "TBA",
    ticker: "TBA",
    chain: "TBA",
    price: "TBA",
    ido_date: "TBA",
    tge: "TBA",
    vesting: "TBA",
    img: memesteakJump,
  },
  {
    project: "TBA",
    ticker: "TBA",
    chain: "TBA",
    price: "TBA",
    ido_date: "TBA",
    tge: "TBA",
    vesting: "TBA",
    img: memesteakJump,
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
              img={card.img}
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
