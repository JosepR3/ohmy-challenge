import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchAllTodos, setTodo } from "../../redux/todos/todos-actions";

import * as ROUTES from "../../routes";

// Components
import TodoList from "../../components/TodoList/todoList";
import InputSearch from "../../components/InputSearch/inputSearch";

export default function Home() {
  const dispatch = useDispatch();

  

  function handleClick(){
    dispatch(setTodo())
  }

  return (
    <main className="container">
      <h2 className="text-center">TODO LIST</h2>
      <div className="d-flex flex-row justify-content-between">
        <InputSearch />
        <Link to={ROUTES.CREATE_TODO}><button className="btn btn-primary" onClick={handleClick}>Create Todo</button></Link>
      </div>
      <div className="d-flex flex-row flex-wrap mb-1">
        <div className="col-1">User Id</div>
        <div className="col-6">Title</div>
        <div className="col-1">Completed</div>
        <div className="col-1">Edit</div>
        <div className="col-1">Delete</div>
      </div>
      <TodoList />
    </main>
  );
}
