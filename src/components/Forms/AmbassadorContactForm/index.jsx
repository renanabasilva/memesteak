import styles from "../ContactForm.module.css";
import SingleArrowButton from "../../SingleArrowButton";

function AmbassadorContactForm() {
  return (
    <div className={styles.mainContainer}>
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
            placeholder="Social Handle"
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            type="text"
            id="proposal"
            name="proposal"
            required
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
