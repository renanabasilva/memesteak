import styles from "../ContactForm.module.css";
import SingleArrowButton from "../../SingleArrowButton";

function ContactForm() {
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
            id="telegram"
            name="telegram"
            required
            minLength={3}
            maxLength={50}
            placeholder="Telegram Handle"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="E-mail"
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            type="text"
            id="description"
            name="description"
            required
            rows="4"
            maxLength="2000"
            placeholder="Project Description"
          ></textarea>
        </div>
        <div className={styles.formButtonContainer}>
          <SingleArrowButton>SEND</SingleArrowButton>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
