import ContactPopUpForm from "../../components/ContactPopUpForm";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import Header from "../../components/Header";
import SocialLink from "../../components/SocialLink";

const socialNetworks = [
  {
    name: "Telegram",
    link: "#",
    iconPath: "#",
  },
  {
    name: "Twitter",
    link: "#",
    iconPath: "#",
  },
  {
    name: "Email",
    link: "#",
    iconPath: "#",
  },
];

function Community() {
  return (
    <main>
      <Header />
      <ContactPopUpForm />
      <section>
        <h1>COMMUNITY</h1>
        <div>
          {socialNetworks.map((social, index) => (
            <SocialLink
              key={index}
              name={social.name}
              link={social.link}
              iconPath={social.iconPath}
            />
          ))}
        </div>
        <p>Also a icon for influencers, we want it so when they click it, it makes a  form pop up with info for them to fill, again we'll provide what we  need in the form.</p>
        <DoubleArrowButton>
          JOIN THE COMMUNITY
        </DoubleArrowButton>
      </section>
    </main>
  );
}

export default Community;
