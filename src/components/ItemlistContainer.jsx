import Item from './Item'
import { useState, useEffect } from 'react'

export default function ItemListContainer( productsData = []) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('productosData:', productsData.productsData)
    setProducts(productsData.productsData)
    setLoading(false)
  }, [productsData])

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
          {products?.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}


