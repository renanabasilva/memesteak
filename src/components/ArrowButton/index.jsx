import { NavLink } from "react-router-dom";

function ArrowButton({name}) {
  return(
    <li>
      <NavLink to={`/${name}`}>
        {name}
      </NavLink>
    </li>
  )
}

export default ArrowButton;