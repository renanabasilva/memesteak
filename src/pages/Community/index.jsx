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
              iconPath={social.iconPath}
            />
          ))}
        </div>
        <p>
          If you're an ambassador or marketer looking to partner with us,
          contact us below to start the conversation. Explore strategic
          opportunities with us!
        </p>
        <NavigationLink double linkType="external" link="/">
          JOIN THE COMMUNITY
        </NavigationLink>
      </section>
    </main>
  );
}

export default Community;
