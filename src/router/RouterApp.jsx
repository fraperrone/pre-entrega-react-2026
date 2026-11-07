import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import ItemlistContainer from "../components/ItemlistContainer";
import Carrito from "../components/Cart";
import ItemDetails from "../components/ItemDetails";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ProtectedRoute from "../auth/ProtectedRoute";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* RUTAS PUBLICAS */}

        {/* formularios */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ruta productos */}
        <Route index element={<Home />} />

        <Route path="/productos" element={<ItemlistContainer />} />
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
