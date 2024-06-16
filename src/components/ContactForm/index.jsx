function ContactForm() {
  return (
    <form action="" method="get" autoComplete="on">
      <div>
        <img src="" alt="" />
        <div>
          <input type="text" name="name" required minLength={3} maxLength={50} size={10} pattern="([aA-zZ]+)"placeholder="Name" />
          <input type="email" name="email" required autocomplete="email" placeholder="E-mail" />
          <input type="text" name="name" required minLength={3} maxLength={50} size={10} pattern="([aA-zZ]+)"placeholder="Name" />
          <input type="email" name="email" required autocomplete="email" placeholder="E-mail" />
          <input type="submit" value="Send" class="button" />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
