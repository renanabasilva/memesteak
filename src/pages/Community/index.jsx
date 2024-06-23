import NavigationLink from "../../components/NavigationLink";
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
        <div className="horizontal-container" tabIndex="-1">
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
        <NavigationLink double linkType="external" link="/">
          JOIN THE COMMUNITY
        </NavigationLink>
      </section>
    </main>
  );
}

export default Community;
