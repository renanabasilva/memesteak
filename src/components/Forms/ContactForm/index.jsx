import { useState } from "react";
import styles from "../Forms.module.css";
import SingleArrowButton from "../../SingleArrowButton";

function ContactForm() {
  const [successPopUp, setSuccessPopUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://memesteak.io/formSubmit.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, form_type: "projectContact" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFormData({
            name: "",
            telegram: "",
            email: "",
            description: "",
          });
          setSuccessPopUp(true);
        } else {
          alert("There was a problem sending the email: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "There was a problem sending the email. Check the console for more details."
        );
      });
  };

  return (
    <div className={styles.mainContainer}>
      {successPopUp ? (
        <p className="submit-success">Email successfully sent!</p>
      ) : (
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit}
          autoComplete="on"
        >
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.telegram}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
      )}
    </div>
  );
}

export default ContactForm;
