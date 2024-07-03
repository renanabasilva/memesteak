import styles from "./ContactForm.module.css";
import SingleArrowButton from "../../components/SingleArrowButton";

function ContactForm() {
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
            id="telegram"
            name="telegram"
            required
            minLength={3}
            maxLength={50}
            size={10}
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
            cols="30"
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
