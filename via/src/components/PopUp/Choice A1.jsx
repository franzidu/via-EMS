import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title id="contained-modal-title-vcenter">
        Der Autofahrer schaut dich verwirrt an. Hättest du nicht doch
        vorbeifahren können?
      </Modal.Title>

      <Modal.Body>
        <p>
          Wäre es nicht besser gewesen, mit dem Autofahrer vorher zu
          kommunizieren? So hättest du eventuell einfach weiterfahrern können.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Ja, stimmt.</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Popup;
