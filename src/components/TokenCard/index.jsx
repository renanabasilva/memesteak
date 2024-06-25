import styles from "./TokenCard.module.css";
import placeholder from "../../assets/images/hand_gold_200.png";
import PopUpContainer from "../PopUpContainer";

function TokenCard({ project, ticker, chain, price, ido_date, tge, vesting }) {
  return (
    <PopUpContainer popUpTarget={<p className="page-title">COMMING SOON...</p>}>
      <button className={styles.tokenCardContainer} tabIndex="0">
        <img src={placeholder} alt="" />
          <ul>
            <li>Project: {project}</li>
            <li>Ticker: {ticker}</li>
            <li>Chain: {chain}</li>
            <li>Price: {price}</li>
            <li>IDO Date: {ido_date}</li>
            <li>TGE: {tge}</li>
            <li>Vesting: {vesting}</li>
          </ul>
      </button>
    </PopUpContainer>
  );
}

export default TokenCard;
