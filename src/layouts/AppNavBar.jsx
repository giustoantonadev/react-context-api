import { Link, NavLink } from "react-router-dom"
import navMenu from "../data/navMenu"

export default function AppNavBar() {
    return (

        <nav className="py-3 gap-5 navbar bg-secondary justify-content-center" >
            {navMenu.map(item => <NavLink to={item.path} key={item.id} >{item.text}</NavLink>)}
        </nav>

    )
}