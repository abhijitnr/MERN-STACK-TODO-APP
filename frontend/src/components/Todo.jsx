import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Todo = (props) => {
  const { text, updateMode, deleteTodo } = props;

  return (
    <div className="todo">
      <div className="text">{text}</div>

      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
