import { useState } from "react";
import styles from "../Forms.module.css";
import SingleArrowButton from "../../SingleArrowButton";

function PartnerContactForm() {
  const [successPopUp, setSuccessPopUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    agency: "",
    social: "",
    proposal: "",
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
      body: JSON.stringify({ ...formData, form_type: "partnershipContact" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFormData({
            name: "",
            agency: "",
            social: "",
            proposal: "",
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
              id="agency"
              name="agency"
              value={formData.agency}
              onChange={handleChange}
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
              value={formData.social}
              onChange={handleChange}
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
              value={formData.proposal}
              onChange={handleChange}
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
      )}
    </div>
  );
}

export default PartnerContactForm;
