import SocialLink from "../../components/SocialLink";
import telegramIcon from "../../assets/images/socials_telegram_300.png";
import xIcon from "../../assets/images/socials_x_300.png";
import mailIcon from "../../assets/images/socials_mail_300.png";
import PopUpContainer from "../../components/PopUpContainer";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import AmbassadorContactForm from "../../components/AmbassadorContactForm";

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
    <main>
      <section className="main-container">
        <h1 className="page-title">COMMUNITY</h1>
        <p>
          Connect with like-minded crypto enthusiasts and explore our project
          deeper. Here, you’ll find links to our social media and contact
          information. Join our discussions on Telegram, follow us on Twitter,
          or reach out directly to the team.
        </p>
        <div className="horizontal-container" tabIndex="-1">
          {socialNetworks.map((social, index) => (
            <SocialLink
              key={index}
              name={social.name}
              link={social.link}
              icon={social.icon}
            />
          ))}
        </div>
        <p>
          If you're an ambassador or marketer looking to partner with us,
          contact us below to start the conversation. Explore strategic
          opportunities with us!
        </p>
        <PopUpContainer popUpTarget={<AmbassadorContactForm />}>
            <DoubleArrowButton>JOIN THE COMMUNITY</DoubleArrowButton>
          </PopUpContainer>
      </section>
    </main>
  );
}

export default Community;
