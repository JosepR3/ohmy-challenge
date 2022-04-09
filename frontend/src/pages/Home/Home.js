import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllTodos } from "../../redux/todos/todos-actions";

import TodoList from "../../components/TodoList/todoList";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllTodos());
  }, [dispatch])

  return (
    <main className="container">
      <h2 className="text-center">TODO LIST</h2>
      <div>
        <input placeholder="Insert your Id"></input>
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
