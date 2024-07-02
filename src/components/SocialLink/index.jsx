function SocialLink({ name, link, icon }) {
  return (
    <>
      <a href={link} rel="noreferrer" target="_blank" tabIndex="0">
        <img src={icon} alt={name} />
      </a>
    </>
  );
}

export default SocialLink;
