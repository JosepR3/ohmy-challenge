import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { todosSelector } from "../../redux/todos/todos-selector";
import { updateTodo } from "../../redux/todos/todos-actions";

import EditButton from "../EditButton/editButton";
import DeleteModal from "../DeleteModal/deleteModal";
import { BsTrash } from "react-icons/bs";


export default function TodoList() {
  const dispatch = useDispatch();
  const { todosList } = useSelector(todosSelector);
  const [idDelete, setIdDelete] = useState(null)
  const [show, setShow] = useState(false);
  
  function handleCheckbox(values) {
    values.completed = !values.completed
    dispatch(updateTodo(values))
  }
  
  return (
    <>
      { show === true ? <DeleteModal id={idDelete} show={show} onClose={() => setShow(false)}/> : null}
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
                  onChange={() => handleCheckbox(todo)}
                  id="flexCheckDefault"
                />
              </div>
              <div className="col-1">
                <EditButton
                  userId={todo?.userId}
                  id={todo?.id}
                  title={todo?.title}
                  completed={todo?.completed}
                  edit={true}
                />
              </div>
              <div className="col-1">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setIdDelete(todo?.id);
                    setShow(true);
                  }}
                >
                  <BsTrash />
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}
