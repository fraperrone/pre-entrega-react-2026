import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Item({ product }) {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {product.image && <img src={product.imageUrl} alt={product.name} className="card-img-top" />}
        
        <div className="card-body"></div>
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">Precio: ${product.price}</p>
        <button
          className="btn btn-primary"
          onClick={() =>
            addToCart({
              id: product.id,
              nombre: product.name,
              precio: product.price,
            })
          }
        >
          Agregar producto al carrito
        </button>
        <Link to={`${product.id}`} state={{ product }}>
          Ver detalle
        </Link>
      </div>
    </div>
  )
}
