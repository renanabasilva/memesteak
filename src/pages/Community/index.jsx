import ContactForm from "../../components/ContactForm";
import DoubleArrowButton from "../../components/DoubleArrowButton";
import NavigationLink from "../../components/NavigationLink";
import PopUpContainer from "../../components/PopUpContainer";
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
      <section className="main-container">
        <h1 className="page-title">COMMUNITY</h1>
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
        <p>
          Also a icon for influencers, we want it so when they click it, it
          makes a form pop up with info for them to fill, again we'll provide
          what we need in the form.
        </p>
        <NavigationLink linkType="external" link="https://www.google.com">
          <DoubleArrowButton>JOIN THE COMMUNITY</DoubleArrowButton>
        </NavigationLink>
        <PopUpContainer>
          <ContactForm />
        </PopUpContainer>
      </section>
    </main>
  );
}

export default Community;
