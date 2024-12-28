import { useEffect } from "react";
import css from "../ImageModal/ImageModal.module.css";

const ImageModal = ({ urlImg, onRequestClose, onCloseModal }) => {
  useEffect(() => {
    console.log("Event Listener Added");
    function handleKeyDown(e) {
      console.log("KeyDown Event Triggered:", e.key);
      if (e.key === "Escape") {
        onCloseModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("Event Listener Removed");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  return (
    <div className={css.modal} onClick={onRequestClose}>
      <img src={urlImg} alt="" className={css.modalImg} />
    </div>
  );
};

export default ImageModal;
