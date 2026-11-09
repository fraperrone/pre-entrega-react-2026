
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const formularioInicial = {
  name: "",
  price: "",
  stock: "",
  category: "",
  description: "",
  imageUrl: ""
};

export default function FormularioProducto({
  show,
  onHide,
  onGuardar,
  datosIniciales = null
}) {

  const [formulario, setFormulario] = useState(formularioInicial);

  useEffect(() => {
    if (show) {
      setFormulario({
        name: datosIniciales?.name ?? "",
        price: datosIniciales?.price ?? "",
        stock: datosIniciales?.stock ?? "",
        category: datosIniciales?.category ?? "",
        description: datosIniciales?.description ?? "",
        imageUrl: datosIniciales?.imageUrl ?? ""
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

    onGuardar({
      ...formulario,
      price: Number(formulario.price),
      stock: Number(formulario.stock)
    });
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
              name="name"
              value={formulario.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formulario.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={formulario.stock}
              onChange={handleChange}
              min="0"
              step="1"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="category"
              value={formulario.category}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar categoría</option>
              <option value="Accesorios">Accesorios</option>
              <option value="Ropa">Ropa</option>
              <option value="Hogar">Hogar</option>
              <option value="Electrónica">Electrónica</option>
              <option value="Calzado">Calzado</option>
              <option value="Deportes">Deportes</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formulario.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>URL de imagen</Form.Label>
            <Form.Control
              type="url"
              name="imageUrl"
              value={formulario.imageUrl}
              onChange={handleChange}
              placeholder="https://..."
              
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
