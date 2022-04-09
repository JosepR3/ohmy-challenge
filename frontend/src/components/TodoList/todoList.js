import React, { useState } from "react";
import { useSelector } from "react-redux";

import { BsTrash } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"

// Redux
import { todosSelector } from "../../redux/todos/todos-selector";

export default function TodoList() {
  
  const { todosList } = useSelector(todosSelector);
  console.log(todosList)
  
  return (
    <>
    {todosList &&
      todosList.map((todo) => {
        return (
          <div className="d-flex flex-row flex-wrap mb-1" key={todo?.id}>
            <div className="col-1">{todo?.userId}</div>
            <div className="col-6">{todo?.title}</div>
            <div className="col-1 text-center">
              <input type="checkbox" checked={todo?.completed} id="flexCheckDefault"/>
            </div>
            <div className="col-1"><button className="btn btn-secondary"><FiEdit /></button></div>
            <div className="col-1"><button className="btn btn-danger"><BsTrash /></button></div>
          </div>
        );
      })
    }  
    </>
  );
}
