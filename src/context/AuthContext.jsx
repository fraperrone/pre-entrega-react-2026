
import { createContext, useState } from "react";
import { auth } from "../firebase/clienteFireBase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    // iniciar sesión
    const login = (userData) => {
        setUser(userData);
        
    };

    // cerrar sesión
    const logout = () => {
        setUser(null);
    };

    const register = (userData) => {
        setUser(userData);
    }

    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}