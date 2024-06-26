import styles from "./TokenCard.module.css";
import PopUpContainer from "../PopUpContainer";

function TokenCard({
  project,
  ticker,
  chain,
  price,
  ido_date,
  tge,
  vesting,
  img,
}) {
  return (
    <PopUpContainer popUpTarget={<p className="page-title">COMMING SOON...</p>}>
      <button className={styles.tokenCardContainer} tabIndex="0">
        <img className={styles.tokenCardImg} src={img} alt="" />
        <ul>
          <li>Project: {project}</li>
          <li>Ticker: {ticker}</li>
          <li>Chain: {chain}</li>
          <li>Price: {price}</li>
          <li>IDO Date: {ido_date}</li>
          <li>TGE: {tge}</li>
          <li>Vesting: {vesting}</li>
          <div className={styles.joinButton}>JOIN POOL</div>
        </ul>
      </button>
    </PopUpContainer>
  );
}

export default TokenCard;
