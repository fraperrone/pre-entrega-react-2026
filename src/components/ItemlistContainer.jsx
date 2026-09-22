import Item from './Item'
import { useState, useEffect } from 'react'

export default function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data)
          setLoading(false)
        }, 1000) // espera 1 segundo antes de actualizar
      })
      .catch((error) => {
        console.error('Error cargando productos:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container my-4">
      <h2 className="h2">Productos</h2>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {productos.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  )
}


