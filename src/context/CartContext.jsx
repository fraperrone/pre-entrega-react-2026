
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    // agregar producto
    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    // eliminar producto
    const removeFromCart = (id)=> {
        setCart((prev) => prev.filter((prod) => prod.id !== id))
    }

    // vaciar carrito

    const clearChart = () => setCart([])

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearChart}}>
            {children}
        </CartContext.Provider>
    )
}