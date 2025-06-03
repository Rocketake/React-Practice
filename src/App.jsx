import Counter from "./components/Counter/Counter.jsx";
import ColorPicker from "./components/ColorPicker/ColorPicker.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import Modal from "./components/Modal/Modal.jsx";
import CurrentTime from "./components/CurrentTime/CurrentTime.jsx";
import LoginForm from "./components/LoginForm.jsx";
import UncontrolledForm from "./components/Forms/UncontrolledForm.jsx";
import Form from "./components/Forms/Form.jsx";
import Articles from "./components/Articles/Articles.jsx";
import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api.js";
import Loader from "./components/Loader/Loader.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import toast from "react-hot-toast";

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const onClose = () => {
  //   setIsOpen(!isOpen);
  // };

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(0);
  const [nbPages, setNbPages] = useState(1);

  useEffect(() => {
    if (nbPages === page) {
      toast("You`ve already downloaded all posts!", {
        position: "top-right",
      });
    }
  }, [nbPages, page]);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { hits, nbPages } = await fetchArticles(query, page);
        setArticles((prev) => [...prev, ...hits]);
        setNbPages(nbPages);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeQuery = (query) => {
    setPage(0);
    setArticles([]);
    setQuery(query);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {/* {isOpen && <Modal onClose={onClose} />}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        open
      </button> */}
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}
      {/* <CurrentTime /> */}
      {/* <LoginForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <Form /> */}
      <SearchBar onChangeQuery={handleChangeQuery} />
      {isError && <h2>Something went wrong... refresh the page</h2>}
      {isLoading && <Loader />}
      {articles.length > 0 && nbPages > page && (
        <button onClick={handleChangePage}>Load More</button>
      )}
      <Articles data={articles} />
    </>
  );
};

export default App;
