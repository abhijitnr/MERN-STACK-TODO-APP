import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getTodos(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>TODO APP</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div
            className="add_todo"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(todoId, text, setTodo, setText, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "UPDATE" : "ADD"}
          </div>
        </div>

        <div className="todo_list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
