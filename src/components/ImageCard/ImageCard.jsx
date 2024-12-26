import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ url, id }) => {
  return (
    <div>
      <img src={url} alt="" id={id} className={css.imgs} />
    </div>
  );
};

export default ImageCard;
