import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2 className="h2 text-center mb-4">🛒 Carrito de compras</h2>

      {Array.isArray(cart) && cart.length === 0 ? (
        <div className="alert alert-info text-center">
          El carrito está vacío
        </div>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((prod) => (
              <li
                key={prod.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{prod.nombre}</strong> - ${prod.precio}
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(prod.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Vaciar carrito
            </button>
            <button className="btn btn-success">
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}
