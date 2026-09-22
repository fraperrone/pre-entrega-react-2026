import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import ItemlistContainer from '../components/ItemlistContainer'
import Carrito from '../components/Cart'
import ItemDetails from '../components/ItemDetails'
import Home from '../components/Home'

export default function RouterApp() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ruta productos */}
          <Route index element={<Home />} />
          <Route path="/productos" element={<ItemlistContainer />} />
          {/* ruta producto por id */}
          <Route path="/productos/:id" element={<ItemDetails></ItemDetails>} />
          <Route path="/carrito" element={<Carrito />} />
        </Route>
      </Routes>
  )
}
