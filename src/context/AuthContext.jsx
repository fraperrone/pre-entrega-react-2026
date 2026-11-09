import { createContext, useState } from "react";
import { auth } from "../firebase/clienteFireBase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // iniciar sesión
  const login = async (userData) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
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
      await signOut(auth);
      console.log("Usuario deslogueado");
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const register = (userData) => {
    try {
      const res = createUserWithEmailAndPassword(
        auth,
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
