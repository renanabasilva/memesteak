function SocialLink({name, link, iconPath}) {
  return(
    <>
      <a href={link}>
        <img src={iconPath} alt={name} />
      </a>
    </>
  );
}

export default SocialLink;
