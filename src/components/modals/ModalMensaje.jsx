import { Modal } from "react-bootstrap";

export default function ModalMensaje({ show, onHide, mensaje, title }) {
  return (
    <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{mensaje}</p>
        </Modal.Body>
    </Modal>
  );
}
