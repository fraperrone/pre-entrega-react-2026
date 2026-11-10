import { useState } from 'react'
import Item from './Item'
import BuscadorComponent from './buscador/BuscadorComponent'
import { Helmet } from 'react-helmet-async'

export default function ItemListContainer({ products, loading }) {
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 6

  // Calcular índices
  const indexLastProduct = currentPage * productsPerPage
  const indexFirstProduct = indexLastProduct - productsPerPage

  // Productos de la página actual
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct)

  // Cantidad total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage)

  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = products.filter((producto) =>
    Object.values(producto).some((valor) =>
      String(valor).toLowerCase().includes(busqueda.toLowerCase()),
    ),
  )

  return (
    <>
      <Helmet>
        <title>Productos - Mi Tienda</title>
        <meta
          name="description"
          content="Explora nuestra amplia gama de productos en nuestra tienda en línea."
        />
      </Helmet>

      <div className="container my-4">
        <h2 className="h2">Productos</h2>

        <BuscadorComponent onBuscar={setBusqueda} />

        {loading ? (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <>
            {busqueda !== '' ? (
              <div className="row">
                {productosFiltrados.map((product) => (
                  <Item key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="row">
                {currentProducts.map((product) => (
                  <Item key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Paginación */}
            {busqueda === '' && (
              <nav className="mt-4">
                <ul className="pagination justify-content-center">
                  <li
                    className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Anterior
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  <li
                    className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Siguiente
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </>
        )}
      </div>
    </>
  )
}
