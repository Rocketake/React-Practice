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

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const onClose = () => {
  //   setIsOpen(!isOpen);
  // };

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { hits } = await fetchArticles();
        setArticles(hits);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
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
      {isError && <h2>Something went wrong... refresh the page</h2>}
      {isLoading && <Loader />}
      <Articles data={articles} />
    </>
  );
};

export default App;
