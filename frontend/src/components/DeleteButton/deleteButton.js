import React from "react";
import { useDispatch } from "react-redux";

import { deleteTodo } from "../../redux/todos/todos-actions";

export default function DeleteButton(props) {
  const dispatch = useDispatch();

  function handleClick(){
    const id = props.props.id;
    dispatch(deleteTodo(id));
  }
  
  return (
    <button 
      className="btn btn-danger" 
      onClick={() => {
        handleClick();
        props.props.onClose()
      }}>
      Delete
    </button>
  );
}
