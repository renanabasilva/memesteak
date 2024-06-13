import { NavLink } from "react-router-dom";

function Header() {
  return(
    <header>
      <h1>MEMESTEAK</h1>
      <NavLink to={"/dashboard"}>
        BACK TO MENU
      </NavLink>
    </header>
  )
}

export default Header;