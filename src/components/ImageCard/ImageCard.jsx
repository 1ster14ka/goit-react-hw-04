import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ url, id, alt, onClick }) => {
  return (
    <div>
      <img src={url} alt={alt} id={id} className={css.imgs} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
