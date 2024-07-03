import styles from "./AmbassadorContactForm.module.css";
import SingleArrowButton from "../../components/SingleArrowButton";

function AmbassadorContactForm() {
  return (
    <div className={styles.mainContainer}>
      <img src={require("../../assets/images/hand_diamond_300.png")} alt="" />
      <form
        className={styles.formContainer}
        action=""
        method="get"
        autoComplete="on"
      >
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={3}
            maxLength={50}
            size={10}
            pattern="([a-zA-Z]+( [a-zA-Z]+)*)"
            placeholder="Name"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="agency"
            name="agency"
            required
            minLength={3}
            maxLength={50}
            size={10}
            placeholder="Agency"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="social"
            name="social"
            required
            minLength={3}
            maxLength={50}
            size={10}
            placeholder="Social Handle"
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            type="text"
            id="proposal"
            name="proposal"
            required
            cols="30"
            rows="4"
            maxLength="2000"
            placeholder="Proposal"
          ></textarea>
        </div>
        <div className={styles.formButtonContainer}>
          <SingleArrowButton>SEND</SingleArrowButton>
        </div>
      </form>
    </div>
  );
}

export default AmbassadorContactForm;
