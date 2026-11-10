import GenericTable from "../components/tables/GenericTable";
import DataLoader from "../data/DataLoader";
import {
  getProductos,
  modificarProducto,
  crearProducto,
  eliminarProducto,
} from "../sevices/productosService";
import ModalConfirmarEliminar from "../components/modals/ModalConfirmarEliminar";
import { useState, useEffect } from "react";
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
  const [showAgregarModal, setShowAgregarModal] = useState(false);

  const handleEliminar = (producto) => {
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
    
    setProductoAEditar(producto);
    setShowEditarModal(true);
  };

  const handleGuardarEdicion = async (productoEditado) => {
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
  const handleAgregarProducto = async (productoAgregado) => {
    
    try {
      await crearProducto(productoAgregado);
      setMensajeModal({
        mensaje: "Producto agregado correctamente.",
        title: "Éxito",
      });
      setShowMensajeModal(true);
    } catch (error) {
      setMensajeModal({
        mensaje: "Error al agregar el producto: " + error.message,
        title: "Error",
      });
      setShowMensajeModal(true);
    } finally {
      setRefresh((prev) => !prev); // Forzar la recarga de datos después de agregar
    }
  };
  useEffect(() => {
    
  }, [productoAEliminar]);

  return (
    <>
      {/* modal y mensaje de editar */}
      <ModalConfirmarEliminar
        show={showModal}
        onHide={onHideModal}
        onConfirmar={handleModalConfirmarEliminar}
      />
      {/* formulario de editar */}
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
      {/* formulario de agregar */}
      <FormularioProducto
        show={showAgregarModal}
        onHide={() => setShowAgregarModal(false)}
        onGuardar={(productoAgregado) => {
          handleAgregarProducto(productoAgregado);
          setShowAgregarModal(false);
          setRefresh((prev) => !prev);
        }}
      />
      {/* modal de mensaje */}

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
            <button
              className="btn btn-primary mb-3"
              onClick={() => setShowAgregarModal(true)}
            >
              <i className="bi bi-plus"></i> Agregar producto
            </button>
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
