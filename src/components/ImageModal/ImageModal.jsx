import css from "../ImageModal/ImageModal.module.css";
import React from "react";
import ReactModal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, imgSrc, altText }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={imgSrc} alt={altText} className={css.modalImage} />
    </ReactModal>
  );
};

export default ImageModal;
