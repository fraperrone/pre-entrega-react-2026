
import Item from './Item'
import { useState, useEffect } from 'react'


export default function ItemlistContainer() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error cargando productos:', error))
  }, [])

  return (
    <div className="item-list-container">
      <h2>Productos</h2>
      <div className="item-list">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

