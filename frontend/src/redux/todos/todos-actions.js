import * as TodosTypes from "./todos-types";
import api from "../../api";

export function setTodosList(result) {
  return { type: TodosTypes.SET_TODO_LIST, payload: result };
}

export function setTodo(todoValues) {
  return { type: TodosTypes.ADD_TODO, payload: todoValues };
}

export function deleteTodo(id) {
  return { type: TodosTypes.DELETE_TODO, payload: id };
}

export function fetchAllTodos() {
  return async function fetchAllTodosThunk(dispatch){
    const res = await api.fetchAllTodos();

      if(res.data){
        dispatch(setTodosList(res.data))
      }
      else {
        console.log("error")
      }
  }
}

export function addTodo(todoValues) {
  return async function addTodoThunk(dispatch) {
    
      dispatch(setTodo(todoValues));
  };
}
