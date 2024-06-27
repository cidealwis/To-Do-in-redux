import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../../../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <div className="todo-item-left">
        <span className="todo-item-index">
          {index + 1}.
        </span>
        <span className={`todo-item-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className="todo-item-right">
        <button
          className="toggle-button"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="remove-button"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="complete-button"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="incomplete-button"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
