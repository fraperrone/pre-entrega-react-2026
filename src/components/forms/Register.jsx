import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../../firebase/clienteFireBase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Helmet } from 'react-helmet-async'

export default function Register() {
  // const { registrar } = useContext(AuthContext);
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    if (form.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    try {
      setLoading(true)

      console.log('Formulario de registro:', form)
      await createUserWithEmailAndPassword(auth, form.email, form.password)

      navigate('/')
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('El correo electrónico ya está registrado')
          break

        case 'auth/invalid-email':
          setError('El correo electrónico no es válido')
          break

        case 'auth/weak-password':
          setError('La contraseña es demasiado débil')
          break

        default:
          setError('Ocurrió un error al registrarse')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title> Register - Mi Tienda </title>
        <meta
          name="description"
          content="Formulario de registro para nuevos usuarios en nuestra aplicación."
        />
      </Helmet>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="text-center mb-4">Crear cuenta</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirmar contraseña</label>

                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? 'Registrando...' : 'Registrarme'}
                  </button>
                </form>

                <div className="text-center mt-3">
                  ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
