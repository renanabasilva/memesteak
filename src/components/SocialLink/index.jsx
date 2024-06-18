import placeholder from "../../assets/images/hand_diamond_200.png"

function SocialLink({name, link, iconPath}) {
  return(
    <>
      <a href={link}>
        <img src={placeholder} alt={name} />
      </a>
    </>
  );
}

export default SocialLink;
