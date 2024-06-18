import styles from "./TokenCard.module.css";
import placeholder from "../../assets/images/hand_gold_200.png";

function TokenCard() {
  return (
    <button className={styles.tokenCardContainer}>
      <img src={placeholder} alt="" />
      <div>
        <ul>
          <li>Ticker</li>
          <li>Chain</li>
          <li>Price</li>
          <li>IDO Date</li>
          <li>Launch Date</li>
          <li>TGE</li>
          <li>Cliff</li>
          <li>Vesting</li>
        </ul>
      </div>
    </button>
  );
}

export default TokenCard;
