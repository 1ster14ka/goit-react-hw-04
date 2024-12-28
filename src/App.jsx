import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

import { fetchImages } from "./components/api-request";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMore from "./components/LoadMore/LoadMore";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [bigImg, setBigImg] = useState("");
  const [isLastPage, setIsLastPage] = useState(true);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

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
        // console.log(data);

        setData((prev) => [...prev, ...response.results]);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };
    fetchRequest();
  }, [query, page]);

  function findId(test) {
    data.find((id) => {
      if (test === id.id) {
        setBigImg(id.urls.regular);
        openModal();

        return;
      }
    });
  }

  return (
    <>
      <SearchBar search={setQuery} resetData={setData} />
      <ImageGallery data={data} find={findId} closeModal={closeModal} />
      <Loader load={isLoad} />
      {isError && <ErrorMessage />}
      {data.length > 0 && isLastPage && (
        <LoadMore changePage={() => setPage((prev) => prev + 1)} />
      )}
      {isOpenModal && (
        <ImageModal
          urlImg={bigImg}
          click={openModal}
          onRequestClose={closeModal}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
