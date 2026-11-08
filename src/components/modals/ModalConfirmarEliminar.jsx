
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function ModalConfirmarEliminar({
  show,
  onHide,
  onConfirmar,
  producto
}) {

  const [loading, setLoading] = useState(false);

  const handleConfirmar = async () => {
    try {
      setLoading(true);
      await onConfirmar();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar producto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        ¿Estás seguro de que deseas eliminar
        <strong> {producto?.name}</strong>?

        <p className="text-danger mb-0 mt-2">
          Esta acción no se puede deshacer.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onHide}
          disabled={loading}
        >
          Cancelar
        </Button>

        <Button
          variant="danger"
          onClick={handleConfirmar}
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner
                size="sm"
                animation="border"
                className="me-2"
              />
              Eliminando...
            </>
          ) : (
            "Eliminar"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
