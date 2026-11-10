import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import ItemlistContainer from '../components/ItemlistContainer'
import Carrito from '../components/Cart'
import ItemDetails from '../components/ItemDetails'
import Home from '../components/Home'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import ProtectedRoute from '../auth/ProtectedRoute'
import DataLoader from '../data/DataLoader'
import { getProductos } from '../sevices/productosService'
import AdminPanelPage from '../pages/AdminPanel'

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Layout />}>


        <Route index element={<Home />} />

        <Route
          path="/productos"
          element={
            <DataLoader fetchData={getProductos}>
              {(data) => <ItemlistContainer products={data} />}
            </DataLoader>
          }
        />
        <Route path="/productos/:id" element={<ItemDetails></ItemDetails>} />

        <Route path="/carrito" element={<Carrito />} />
        {/* RUTAS PRIVADAS */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminPanelPage />} />
          <Route path="/logout" element={<Login />} />
        </Route>
      </Route>
    </Routes>
  )
}
