import { createContext, useState } from "react";
import { auth } from "../firebase/clienteFireBase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // iniciar sesión
  const login = async (userData) => {
    try {
      const res = await auth.signInWithEmailAndPassword(
        userData.email,
        userData.password,
      );
      console.log("Usuario logueado:", res.user);
      setUser(res.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  // cerrar sesión
  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const register = (userData) => {
    try {
      const res = auth.createUserWithEmailAndPassword(
        userData.email,
        userData.password,
      );
      console.log("Usuario registrado:", res.user);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
