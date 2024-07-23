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
    <PopUpContainer popUpTarget={<p className="popup-text">COMING SOON...</p>}>
      <button className={styles.tokenCardContainer} tabIndex="0">
        <div className={styles.tokenCardInformationContainer}>
          <img className={styles.tokenCardImg} src={img} alt={project} />
          <ul>
            <li className={styles.projectTitle}>{project}</li>
            <li>Ticker: {ticker}</li>
            <li>Chain: {chain}</li>
            <li>Price: {price}</li>
            <li>IDO Date: {ido_date}</li>
            <li>TGE: {tge}</li>
            <li>Vesting: {vesting}</li>
          </ul>
        </div>
        <div className={styles.joinButton}>JOIN POOL</div>
      </button>
    </PopUpContainer>
  );
}

export default TokenCard;
