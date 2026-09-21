
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
                <li><CartWidget></CartWidget></li>
            </ul>
        </nav>
    )
}