
// src/components/CartWidget.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  // calcular cantidad total (sumando cantidades si usás la opción con cantidad)
  const totalItems = cart.reduce((acc, prod) => acc + (prod.cantidad || 1), 0);

  return (
    <NavLink to="/carrito" className="cart-widget">
      🛒
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </NavLink>
  );
}
