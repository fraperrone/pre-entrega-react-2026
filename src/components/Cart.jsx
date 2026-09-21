import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      {Array.isArray(cart) && cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((prod) => (
              <li key={prod.id}>
                {prod.nombre} - ${prod.precio}
                <button onClick={() => removeFromCart(prod.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}