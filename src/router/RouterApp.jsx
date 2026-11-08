import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import ItemlistContainer from "../components/ItemlistContainer";
import Carrito from "../components/Cart";
import ItemDetails from "../components/ItemDetails";
import Home from "../components/Home";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import ProtectedRoute from "../auth/ProtectedRoute";
import DataLoader from "../data/DataLoader";
import { getProductos } from "../sevices/productosService";
import AdminPanelPage from "../pages/AdminPanel";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* RUTAS PUBLICAS */}

        {/* formularios */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanelPage />} />

        {/* ruta productos */}
        <Route index element={<Home />} />

        <Route
          path="/productos"
          element={
            <DataLoader fetchData={getProductos}>
              {(data) => <ItemlistContainer products={data} />}
            </DataLoader>
          }
        />
        {/* ruta producto por id */}
        <Route path="/productos/:id" element={<ItemDetails></ItemDetails>} />

        {/* RUTAS PRIVADAS */}
        <Route element={<ProtectedRoute />}>
          <Route path="/carrito" element={<Carrito />} />
        </Route>
      </Route>
    </Routes>
  );
}
