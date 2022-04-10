import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

// Redux
import { todosSelector } from "../../redux/todos/todos-selector";
import { updateTodo } from "../../redux/todos/todos-actions";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todosList } = useSelector(todosSelector);

  function handleCheckbox(values) {
    values.completed = !values.completed
    dispatch(updateTodo(values))
    
  }

  return (
    <>
      {todosList &&
        todosList.map((todo) => {
          return (
            <div className="d-flex flex-row flex-wrap mb-1" key={todo?.id}>
              <div className="col-1">{todo?.userId}</div>
              {todo?.completed === true ? <del className="col-6">{todo?.title}</del> : <div className="col-6">{todo?.title}</div>}
              <div className="col-1 text-center">
                <input
                  type="checkbox"
                  checked={todo?.completed}
                  onChange={(e) => handleCheckbox(todo)}
                  id="flexCheckDefault"
                />
              </div>
              <div className="col-1">
                <button className="btn btn-secondary">
                  <FiEdit />
                </button>
              </div>
              <div className="col-1">
                <button className="btn btn-danger">
                  <BsTrash />
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}
