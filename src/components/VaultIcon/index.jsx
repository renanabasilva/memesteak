function VaultIcon({name, img, vault, setVault}) {
  return(
    <button>
      <p>{name}</p>
      <img src={img} alt={name} />
    </button>
  )
}

export default VaultIcon;