import css from "../ImageModal/ImageModal.module.css";

const ImageModal = ({ urlImg, onRequestClose }) => {
  return (
    <div className={css.modal} onClick={onRequestClose}>
      <img src={urlImg} alt="" className={css.modalImg} />
    </div>
  );
};

export default ImageModal;
