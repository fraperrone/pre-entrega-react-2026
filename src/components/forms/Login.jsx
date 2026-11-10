import { useState, useContext } from 'react'
import { Form, Button, Card, Alert, Spinner } from 'react-bootstrap'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(credentials)
      navigate('/')
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Login - Mi Tienda</title>
        <meta
          name="description"
          content="Inicia sesión en nuestra aplicación para acceder a todas las funcionalidades."
        />
      </Helmet>

      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <Card className="shadow border-0 p-4" style={{ width: '400px' }}>
          <Card.Body>
            <div className="text-center mb-4">
              <h3 className="fw-bold">Bienvenido</h3>
              <p className="text-muted">
                Ingresá tus credenciales para continuar
              </p>
            </div>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  placeholder="nombre@correo.com"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>

                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Ingresá tu contraseña"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className="w-100"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" className="me-2" />
                    Ingresando...
                  </>
                ) : (
                  'Iniciar sesión'
                )}
              </Button>
            </Form>

            <div className="text-center mt-4">
              <small className="text-muted">
                ¿No tenes cuenta? <Link to="/register">Registrate aquí</Link>
              </small>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Login
