
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function FormularioProducto({
  show,
  onHide,
  onGuardar,
  datosIniciales = null
}) {

  const [formulario, setFormulario] = useState({
    nombre: "",
    precio: ""
  });

  useEffect(() => {
    if (show) {
      setFormulario({
        nombre: datosIniciales?.nombre ?? "",
        precio: datosIniciales?.precio ?? ""
      });
    }
  }, [show, datosIniciales]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(formulario);
  };

  const esEdicion = Boolean(datosIniciales);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Form onSubmit={handleSubmit}>

        <Modal.Header closeButton>
          <Modal.Title>
            {esEdicion ? "Modificar producto" : "Agregar producto"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              value={formulario.precio}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>

          <Button variant="primary" type="submit">
            {esEdicion ? "Guardar cambios" : "Crear producto"}
          </Button>
        </Modal.Footer>

      </Form>
    </Modal>
  );
}
