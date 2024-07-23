import styles from "./Steakpad.module.css";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import TokenCard from "../../components/TokenCard";
import PopUpContainer from "../../components/PopUpContainer";
import ContactForm from "../../components/Forms/ContactForm";
import memesteakJump from "../../assets/gifs/memesteak_logo_jump.gif";
import memesteakLock from "../../assets/images/lock_300.png";

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
    img: memesteakLock,
  },
  {
    project: "TBA",
    ticker: "TBA",
    chain: "TBA",
    price: "TBA",
    ido_date: "TBA",
    tge: "TBA",
    vesting: "TBA",
    img: memesteakLock,
  },
];

function Steakpad() {
  return (
    <main className="main-container">
      <section className={`content-section ${styles.steakpadContainer}`}>
        <p>
          Unleash the power of staking with our SteakPad: Stake to Win.
          Questions? Connect with our community on Telegram or check the
          CookBook for a full breakdown.
        </p>
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
        <div className={styles.contactContainer}>
          <p>
            Ready to launch your project? Reach out to our team, share your
            vision, and step onto the SteakPad.
          </p>
          <PopUpContainer popUpTarget={<ContactForm />}>
            <DoubleArrowButton>CONTACT US</DoubleArrowButton>
          </PopUpContainer>
        </div>
      </section>
    </main>
  );
}

export default Steakpad;
