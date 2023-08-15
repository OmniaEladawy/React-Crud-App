import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ConfirmModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want delete this record ?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            props.deleteRecord(props.itemId);
          }}
          className="btn btn-danger"
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
