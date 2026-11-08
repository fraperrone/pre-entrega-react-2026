import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {

  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Cargando...</p>;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}