import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Item({ producto }) {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="item">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <button
        onClick={() =>
          addToCart({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
          })
        }
      >
        Agregar producto al carrito
      </button>
      <Link to={`${producto.id}`} state={{producto}}>Ver detalle</Link>
    </div>
  )
}
