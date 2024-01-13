import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <div id="header-container">
    <NavLink className="nav-btn" to="/"> Home </NavLink>
    <NavLink className="nav-btn" to="/about"> About </NavLink>
    <NavLink className="nav-btn" to="/pokemon"> Pokemon </NavLink>
    <NavLink className="nav-btn" to="/decide"> Decide </NavLink>
    </div>
  )
}
export default NavBar