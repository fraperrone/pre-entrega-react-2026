import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import { db } from "../firebase/clienteFireBase";

const productsRef = collection(db, "products");

// Obtener productos
export const getProductos = async () => {
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Crear producto
export const crearProducto = async (datos) => {
  const resultado = await addDoc(productosRef, datos);

  return resultado.id;
};

// Modificar producto
export const modificarProducto = async (id, datos) => {
  const productoRef = doc(db, "products", id);

  await updateDoc(productoRef, datos);
};

// Eliminar producto
export const eliminarProducto = async (id) => {
  const productoRef = doc(db, "products", id);

  await deleteDoc(productoRef);
};