import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Item({ producto }) {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={producto.imagen} alt={producto.nombre} className='card-img-top' />
        <div className='card-body'>

        </div>
        <h3 className='card-title'>{producto.nombre}</h3>
        <p className='card-text'>{producto.descripcion}</p>
        <p className='card-text fw-bold'>Precio: ${producto.precio}</p>
        <button className='btn btn-primary'
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
        <Link to={`${producto.id}`} state={{ producto }}>
          Ver detalle
        </Link>
      </div>
    </div>
  )
}
