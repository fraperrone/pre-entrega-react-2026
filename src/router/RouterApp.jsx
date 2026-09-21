import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Footer from '../components/Footer'

export default function RouterApp() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ruta productos */}
          <Route index element={<h1>Home</h1>} />
          <Route path="/productos" element={<h1>Productos</h1>} />
          {/* ruta producto por id */}
          <Route path="/productos/:id" element={<h1>Producto por ID</h1>} />
          <Route path="/carrito" element={<h1>Carrito</h1>} />
        </Route>
      </Routes>
  )
}
