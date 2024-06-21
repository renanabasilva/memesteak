import styles from "./Steakpad.module.css";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import TokenCard from "../../components/TokenCard";
import NavigationLink from "../../components/NavigationLink";
import PopUpContainer from "../../components/PopUpContainer";
import ContactForm from "../../components/ContactForm";

const cards = [
  {
    ticker: "Ticker1",
    chain: "Chain",
    price: "Price",
    ido_date: "IDO Date",
    tge: "TGE",
    cliff: "Cliff",
    vesting: "Vesting",
  },
  {
    ticker: "Ticker2",
    chain: "Chain",
    price: "Price",
    ido_date: "IDO Date",
    tge: "TGE",
    cliff: "Cliff",
    vesting: "Vesting",
  },
  {
    ticker: "Ticker3",
    chain: "Chain",
    price: "Price",
    ido_date: "IDO Date",
    tge: "TGE",
    cliff: "Cliff",
    vesting: "Vesting",
  },
  // {
  //   ticker: "Ticker4",
  //   chain: "Chain",
  //   price: "Price",
  //   ido_date: "IDO Date",
  //   tge: "TGE",
  //   cliff: "Cliff",
  //   vesting: "Vesting",
  // },
  // {
  //   ticker: "Ticker5",
  //   chain: "Chain",
  //   price: "Price",
  //   ido_date: "IDO Date",
  //   tge: "TGE",
  //   cliff: "Cliff",
  //   vesting: "Vesting",
  // },
];

function Steakpad() {
  return (
    <main>
      <section className="main-container">
        <div className="center">
          <h1 className="page-title">STEAKPAD</h1>
          <p>
            Memesteak description and info. Memesteak description and info.
            Memesteak description and info. Memesteak description and info.
            Memesteak description.
          </p>
          <NavigationLink double linkType="external" link="/steakpad">
            JOIN POOL
          </NavigationLink>
        </div>
        <div className={styles.tokenCardContainer}>
          {cards.map((card, index) => (
            <TokenCard
              key={index}
              ticker={card.ticker}
              chain={card.chain}
              price={card.price}
              ido_date={card.ido_date}
              tge={card.tge}
              cliff={card.cliff}
              vesting={card.vesting}
            />
          ))}
        </div>
        <footer className="center">
          <p>
            If they have a project they'd like to launch on our platform to get
            in touch with a button they can press to fill a basic form out.
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
