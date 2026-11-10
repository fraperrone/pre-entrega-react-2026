import { NavLink, useNavigate } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import ModalMensaje from './modals/ModalMensaje'

export default function Nav() {
  const { user, logout } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({
    title: '',
    message: '',
  })

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      setModalInfo( {title:'Exito', message:"Sesion cerrada con exito"})
      setShowModal(true)
    } catch (err) {
      setModalInfo({ title: 'error', message: err.message })
      setShowModal(true)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Mi Tienda
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carrito">
                Carrito
              </NavLink>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
            {user && (
              <li className="nav-item" onClick={handleLogout}>
                <NavLink className="nav-link" to="/">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* modal */}
      <ModalMensaje
        show={showModal}
        onHide={() => setShowModal(false)}
        mensaje={modalInfo.message}
        title={modalInfo.title}
      />
    </nav>
  )
}
