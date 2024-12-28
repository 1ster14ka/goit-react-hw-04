import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ url, id, findId, closeModal, alt }) => {
  function showBigImg(e) {
    if (e.target.id === "") {
      findId("");
      closeModal();
    }

    return findId(e.target.id);
  }

  return (
    <div>
      <img
        src={url}
        alt={alt}
        id={id}
        className={css.imgs}
        onClick={showBigImg}
      />
    </div>
  );
};

export default ImageCard;
