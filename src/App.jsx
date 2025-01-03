import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

import { fetchImages } from "./components/api-request";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [isLastPage, setIsLastPage] = useState(true);

  const openModal = (imgSrc, altText) => {
    setModalImgSrc(imgSrc);
    setModalAlt(altText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImgSrc("");
    setModalAlt("");
  };

  useEffect(() => {
    const fetchRequest = async () => {
      if (!query.trim()) {
        return;
      }
      try {
        setIsLoad(true);
        setIsError(false);
        setIsLastPage(true);

        const response = await fetchImages(query, page);

        if (response.total_pages === page) {
          setIsLastPage(false);
        }

        setData((prev) => [...prev, ...response.results]);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };
    fetchRequest();
  }, [query, page]);

  return (
    <>
      <SearchBar search={setQuery} resetData={setData} />
      <ImageGallery data={data} onImgClick={openModal} />
      <Loader load={isLoad} />
      {isError && <ErrorMessage />}
      {data.length > 0 && isLastPage && (
        <LoadMoreBtn changePage={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imgSrc={modalImgSrc}
        altText={modalAlt}
      />
    </>
  );
}

export default App;
