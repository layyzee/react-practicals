import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ReactModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(!false)}>Open Modal</button>
      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h1>Modal title</h1>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
