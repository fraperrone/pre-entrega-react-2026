import { createContext, useState } from 'react'
import { auth } from '../firebase/clienteFireBase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // iniciar sesión
  const login = async (userData) => {
    const res = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    )
    setUser(res.user)
  }

  // cerrar sesión
  const logout = async () => {
    await signOut(auth)
    setUser(null)
  }

  const register = async (userData) => {
    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    )
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
