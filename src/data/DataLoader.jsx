import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { Helmet } from 'react-helmet-async'

export default function DataLoader({ fetchData, children, refresh }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true)
        setError(null)

        const resultado = await fetchData()

        setData(resultado)
      } catch (err) {
        setError(err.message || 'Error al obtener los datos')
      } finally {
        setLoading(false)
      }
    }

    cargarDatos()
  }, [fetchData, refresh])

  if (loading) {
    return (
      <div className="d-flex justify-content-center p-4">
        <Helmet>
          <title>Cargando - Mi Tienda</title>
          <meta name="description" content="Cargando datos de la aplicación." />
        </Helmet>
        <Spinner animation="border" />
      </div>
    )
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>Error - Mi Tienda</title>
          <meta
            name="description"
            content="Ocurrió un error al cargar los datos de la aplicación."
          />
        </Helmet>
        <Alert variant="danger">{error}</Alert>);
      </>
    )
  }

  return children(data)
}
