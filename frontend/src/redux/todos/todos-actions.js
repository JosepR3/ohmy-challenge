import * as TodosTypes from "./todos-types";
import api from "../../api";

export function setTodosListSuccess(result) {
  return { type: TodosTypes.SET_TODO_LIST, payload: result };
}

export function addTodoSuccess(todoValues) {
  return { type: TodosTypes.ADD_TODO, payload: todoValues };
}

export function updateTodoSuccess( todoValues ){
  return { type: TodosTypes.EDIT_TODO, payload: todoValues };
}

export function deleteTodo(id) {
  return { type: TodosTypes.DELETE_TODO, payload: id };
}

export function fetchAllTodos() {
  return async function fetchAllTodosThunk(dispatch){
    const res = await api.fetchAllTodos();

      if(res.data){
        dispatch(setTodosListSuccess(res.data))
      }
      else {
        console.log("error")
      }
  }
}

export function addTodo(todoValues) {
  return async function addTodoThunk(dispatch) {
    
      dispatch(addTodoSuccess(todoValues));
  };
}

export function updateTodo( todoValues){
  return async function updateTodoThunk(dispatch){
    console.log(todoValues)
    dispatch(updateTodoSuccess(todoValues))
  }
}
