
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalConfirmarEliminar({
  show,
  onHide,
  onConfirmar,
  producto
}) {

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar producto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        ¿Estás seguro de que deseas eliminar
        <strong> {producto?.nombre}</strong>?
        <p className="text-danger mb-0 mt-2">
          Esta acción no se puede deshacer.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>

        <Button variant="danger" onClick={onConfirmar}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
