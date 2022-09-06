import React from "react";
import Modal from 'react-modal';
// import "./Booking.css";

const customStyles = {
  content: {
    top: "0",
    left: "50%",
    right: "0",
    bottom: "auto",
    height: "100%",
  },
  overlay: {
    zIndex: "99999999",
    backgroundColor: "rgba(51, 51, 51, 0.75)",
  },
};
const buttonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px"
};

Modal.setAppElement('#root');

export const Booking = ({modalIsOpen, setIsOpen}) => {

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
            <button onClick={closeModal} style={buttonStyles}>
              close
            </button>
            <iframe width="100%" height="100%" src="booking.html" />
        </Modal>
      </div>
    )
}