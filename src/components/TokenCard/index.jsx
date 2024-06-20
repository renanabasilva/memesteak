import styles from "./TokenCard.module.css";
import placeholder from "../../assets/images/hand_gold_200.png";
import PopUpContainer from "../PopUpContainer";

function TokenCard({ ticker, chain, price, ido_date, tge, cliff, vesting }) {
  return (
    <PopUpContainer popUpTarget={<p className="page-title">COMMING SOON...</p>}>
      <button className={styles.tokenCardContainer}>
        <img src={placeholder} alt="" />
        <div>
          <ul>
              <li>{ticker}</li>
              <li>{chain}</li>
              <li>{price}</li>
              <li>{ido_date}</li>
              <li>{tge}</li>
              <li>{cliff}</li>
              <li>{vesting}</li>
          </ul>
        </div>
      </button>
    </PopUpContainer>
  );
}

export default TokenCard;
