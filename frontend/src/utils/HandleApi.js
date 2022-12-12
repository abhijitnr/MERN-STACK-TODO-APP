import axios from "axios";

// const baseurl = "http://localhost:8000";
const baseurl = "https://super-jay-dirndl.cyclic.app";

/* GET ALL TODOS */
const getTodos = (setTodo) => {
  axios
    .get(`${baseurl}/todos`)
    .then(({ data }) => {
      //   console.log(data);
      setTodo(data);
    })
    .catch((err) => console.log(err));
};

/* ADD A NEW TODO */
const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${baseurl}/todos/create`, { text })
    .then(() => {
      setText("");
      getTodos(setTodo);
    })
    .catch((err) => console.log(err));
};

/* UPADTE TODO */
const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) => {
  axios
    .post(`${baseurl}/todos/update`, { _id: todoId, text })
    .then(() => {
      setText("");
      setIsUpdating(false);
      getTodos(setTodo);
    })
    .catch((err) => console.log(err));
};

/* DELETE TODO */
const deleteTodo = (todoId, setTodo) => {
  axios
    .post(`${baseurl}/todos/delete`, { _id: todoId })
    .then(() => {
      getTodos(setTodo);
    })
    .catch((err) => console.log(err));
};
export { getTodos, addTodo, updateTodo, deleteTodo };
