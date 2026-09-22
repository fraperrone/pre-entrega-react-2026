
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/productos">Productos</NavLink></li>
                <li><NavLink to="/carrito">Carrito</NavLink></li>
                <li><NavLink to="/producto/:id"></NavLink></li>
                <li><CartWidget></CartWidget></li>
            </ul>
        </nav>
    )
}