import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ data, onImgClick }) => {
  return (
    data.length > 0 && (
      <ul className={css.imgList}>
        {data.map(({ urls: { small, regular }, id, likes, description }) => (
          <li key={id} className={css.imgItem}>
            <ImageCard
              url={small}
              id={id}
              alt={description}
              bigImg={regular}
              onClick={() => {
                onImgClick(regular, description);
              }}
            />
            <p>Likes: {likes}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default ImageGallery;
