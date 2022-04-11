import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { fetchTodoByUser } from "../../redux/todos/todos-actions";

import { GoSearch } from "react-icons/go";


export default function InputSearch(){
  const dispatch = useDispatch()
  const [id, setId] = useState()

  function handleSubmit(e){
    e.preventDefault();
    dispatch(fetchTodoByUser(id));
  }

  function handleChange(e){
    const { target } = e;
    const { name, value } = target;

    const newId = {
      ...id,
      [name]: value,
    };
    setId(newId)
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="number" max="20" name="id" placeholder="Insert your Id" onChange={handleChange}></input>
      <button type="submit" className="btn btn-secondary"><GoSearch/></button>
    </form>
  </div>
  )
}