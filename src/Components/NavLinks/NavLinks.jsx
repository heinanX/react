import { NavLink } from "react-router-dom"

const NavLinks = () => {
 
    return(
        <ul>
            <li><NavLink to={"/"}>Movies</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
 )
}

export default NavLinks