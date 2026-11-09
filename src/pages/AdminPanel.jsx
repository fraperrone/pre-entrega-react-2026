import GenericTable from "../components/tables/GenericTable";
import DataLoader from "../data/DataLoader";
import { getProductos, modificarProducto } from "../sevices/productosService";
import ModalConfirmarEliminar from "../components/modals/ModalConfirmarEliminar";
import { useState, useEffect } from "react";
import { eliminarProducto } from "../sevices/productosService";
import ModalMensaje from "../components/modals/ModalMensaje";
import FormularioProducto from "../components/forms/FormularioProducto";

export default function AdminPanelPage() {
  const [showModal, setShowModal] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);
  const [refresh, setRefresh] = useState(false); // Estado para forzar la recarga de datos
  const [showMensajeModal, setShowMensajeModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState({ mensaje: "", title: "" });
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [productoAEditar, setProductoAEditar] = useState(null);

  const handleEliminar = (producto) => {
    // Aquí puedes implementar la lógica para eliminar el producto
    console.log("Eliminar producto:", producto.id);
    setProductoAEliminar(producto);
    setShowModal(true);
  };

  const onHideModal = () => {
    setShowModal(false); // Ocultar el modal de confirmación
  };

  const handleModalConfirmarEliminar = async () => {
    if (productoAEliminar) {
      try {
        await eliminarProducto(productoAEliminar.id);
        console.log("Producto eliminado:", productoAEliminar.id);
        setProductoAEliminar(null);
        setShowModal(false);
        setRefresh((prev) => !prev);
        setMensajeModal({
          mensaje: "Producto eliminado correctamente.",
          title: "Éxito",
        });
        setShowMensajeModal(true); // Mostrar el modal de mensaje
      } catch (error) {
        setMensajeModal({
          mensaje: "Error al eliminar el producto: " + error.message,
          title: "Error",
        });
        setShowMensajeModal(true); // Mostrar el modal de mensaje
      }
    }
  };
  const handleEditar = (producto) => {
    // Aquí puedes implementar la lógica para editar el producto
    console.log("Editar producto:", producto.id);
    console.log("Producto a editar:", producto);
    // Por ejemplo, podrías abrir un modal con un formulario para editar el producto
    setProductoAEditar(producto);
    setShowEditarModal(true);
  };

  const handleGuardarEdicion = async (productoEditado) => {
    console.log(productoEditado);
    try {
      await modificarProducto(productoAEditar.id, productoEditado);
      setMensajeModal({
        mensaje: "Producto modificado correctamente.",
        title: "Éxito",
      });
      setShowEditarModal(false);

      setShowMensajeModal(true);
    } catch (error) {
      setMensajeModal({
        mensaje: "Error al modificar el producto: " + error.message,
        title: "Error",
      });
      setShowEditarModal(false);

      setShowMensajeModal(true);
    } finally {
      setRefresh((prev) => !prev); // Forzar la recarga de datos después de guardar
    }
  };

  useEffect(() => {
    // Aquí puedes implementar la lógica para actualizar la lista de productos después de eliminar uno
    // Por ejemplo, podrías volver a cargar los productos desde la base de datos
  }, [productoAEliminar]);

  return (
    <>
      {/* modal y mensaje de editar */}
      <ModalConfirmarEliminar
        show={showModal}
        onHide={onHideModal}
        onConfirmar={handleModalConfirmarEliminar}
      />
      <FormularioProducto
        show={showEditarModal}
        onHide={() => setShowEditarModal(false)}
        onGuardar={(productoEditado) => {
          setShowEditarModal(false);
          setRefresh((prev) => !prev);
          handleGuardarEdicion(productoEditado); // Forzar la recarga de datos después de guardar
        }}
        datosIniciales={productoAEditar}
      />

      <ModalMensaje
        show={showMensajeModal}
        onHide={() => setShowMensajeModal(false)}
        mensaje={mensajeModal.mensaje}
        title={mensajeModal.title}
      />
      <DataLoader fetchData={getProductos} refresh={refresh}>
        {(data) => (
          <div>
            <h1>Panel de Administración</h1>
            <p>
              Bienvenido al panel de administración. Aquí puedes gestionar los
              productos.
            </p>
            {/* Aquí puedes agregar más componentes o funcionalidades para administrar los productos */}
            <GenericTable
              datos={data}
              columnas={[
                "id",
                "category",
                "name",
                "price",
                "stock",
                "description",
                "imageUrl",
              ]}
              onEliminar={handleEliminar}
              onEditar={handleEditar}
            />
          </div>
        )}
      </DataLoader>
    </>
  );
}
