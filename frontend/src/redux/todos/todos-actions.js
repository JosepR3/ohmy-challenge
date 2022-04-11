import * as TodosTypes from "./todos-types";
import api from "../../api";

export function setTodosListSuccess(result) {
  return { type: TodosTypes.SET_TODO_LIST, payload: result };
}

export function setTodo(todo){
  return { type: TodosTypes.SET_TODO, payload: todo };
}

export function addTodoSuccess(todoValues) {
  return { type: TodosTypes.ADD_TODO, payload: todoValues };
}

export function updateTodoSuccess( todoValues ){
  return { type: TodosTypes.EDIT_TODO, payload: todoValues };
}

export function deleteTodoSuccess(id) {
  return { type: TodosTypes.DELETE_TODO, payload: id };
}

export function fetchAllTodos() {
  return async function fetchAllTodosThunk(dispatch){
    const res = await api.fetchAllTodos();

      if(res.data){
        dispatch(setTodosListSuccess(res.data))
      }
      else {
        console.log("something went wrong")
      }
  }
}

export function addTodo(todoValues) {
  return async function addTodoThunk(dispatch) {
    const body = todoValues;
    const res = await api.createTodo(body)
    if(res){
      dispatch(addTodoSuccess(res.data));
      alert("Your post has been CREATED successfully")
    }
    else{
      console.log("error creating todo")
    }
  };
}

export function updateTodo(todoValues){
  return async function updateTodoThunk(dispatch){
    
    const id = todoValues.id;
    const body = todoValues;

    const res = await api.updateTodo( id, body )
    if(res){
      dispatch(updateTodoSuccess(res.data))
      alert("Your todo has been UPDATED successfully")
    }
    else {
      console.log("error updating todo")
    }
    
  }
}

export function deleteTodo(id){
  return async function deleteTodoThunk(dispatch){

    await api.deleteTodo(id)
    dispatch(deleteTodoSuccess(id))
    alert(`You have deleted successfully todo ${id}`)
  }
}

export function fetchTodoByUser(userId){
  return async function fetchTodoByUserThunk(dispatch){
    console.log(userId)
    const res = await api.fetchTodoByUser(userId.id)
      if(res){
        dispatch(setTodosListSuccess(res.data))
      }
      else{
        console.log("Something went wrong")
      }
  }
}