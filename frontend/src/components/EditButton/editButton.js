import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes";

import { setTodo } from "../../redux/todos/todos-actions";

import { FiEdit } from "react-icons/fi";

export default function EditButton(props){
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(setTodo(props))
  }

  return(
    <Link to={ROUTES.CREATE_TODO}>
      <button className="btn btn-secondary" onClick={handleClick}>
        <FiEdit />
      </button>
    </Link>
  );
}