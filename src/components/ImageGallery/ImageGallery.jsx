import { useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ data, find, closeModal }) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  function showBigImg(e) {
    if (e.target.id === "") {
      find("");
      closeModal();
    }
    window.addEventListener("keydown", showBigImg);

    window.removeEventListener("keydown", showBigImg);

    return find(e.target.id);
  }

  return (
    data.length > 0 && (
      <ul className={css.imgList}>
        {data.map(({ urls: { small, regular }, id, likes }) => (
          <li key={id} onClick={showBigImg} className={css.imgItem}>
            <ImageCard url={small} id={id} bigImg={regular} />
            <p>Likes: {likes}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default ImageGallery;
