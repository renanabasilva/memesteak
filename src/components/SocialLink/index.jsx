import placeholder from "../../assets/images/hand_diamond_200.png";

function SocialLink({ name, link, icon }) {
  return (
    <>
      <a href={link} tabIndex="0">
        <img src={icon} alt={name} />
      </a>
    </>
  );
}

export default SocialLink;
