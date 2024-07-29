import styles from "./Community.module.css";
import SocialLink from "../../components/SocialLink";
import telegramIcon from "../../assets/images/socials_telegram_200.png";
import xIcon from "../../assets/images/socials_x_200.png";
import mailIcon from "../../assets/images/socials_mail_200.png";
import PopUpContainer from "../../components/PopUpContainer";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import PartnerContactForm from "../../components/Forms/PartnerContactForm";

const socialNetworks = [
  {
    name: "Telegram",
    link: "#",
    icon: telegramIcon,
  },
  {
    name: "Twitter",
    link: "#",
    icon: xIcon,
  },
  {
    name: "Email",
    link: "#",
    icon: mailIcon,
  },
];

function Community() {
  return (
    <main className="main-container">
      <section className={`content-section ${styles.communityContainer}`}>
        <div className={`${styles.socialContainer} text-box`}>
          <p>
            Connect with like-minded crypto enthusiasts and explore our project
            deeper. Here, you’ll find links to our social media and contact
            information.
          </p>
          <div
            className={`horizontal-container ${styles.socialIconsContainer}`}
            tabIndex="-1"
          >
            {socialNetworks.map((social, index) => (
              <SocialLink
                key={index}
                name={social.name}
                link={social.link}
                icon={social.icon}
              />
            ))}
          </div>
        </div>

        <div className={`${styles.partnerContainer} text-box`}>
          <p>
            If you're an ambassador or marketer looking to partner with us,
            contact us below to start the conversation. Explore strategic
            opportunities with us!
          </p>
          <PopUpContainer popUpTarget={<PartnerContactForm />}>
            <DoubleArrowButton>JOIN THE COMMUNITY</DoubleArrowButton>
          </PopUpContainer>
        </div>
      </section>
    </main>
  );
}

export default Community;
