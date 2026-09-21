import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import ItemlistContainer from '../components/ItemlistContainer'
import Carrito from '../components/Cart'

export default function RouterApp() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ruta productos */}
          <Route index element={<h1>Home</h1>} />
          <Route path="/productos" element={<ItemlistContainer />} />
          {/* ruta producto por id */}
          <Route path="/productos/:id" element={<h1>Producto por ID</h1>} />
          <Route path="/carrito" element={<Carrito />} />
        </Route>
      </Routes>
  )
}
