import * as TodosTypes from "./todos-types";
// import api from "../../api";


export function setTodosList(result) {
  return { type: TodosTypes.SET_TODO_LIST, payload: result };
}

export function setTodo(todoValues) {
  return { type: TodosTypes.ADD_TODO, payload: todoValues};
}

export function deleteTodo(id) {
  return { type: TodosTypes.DELETE_TODO, payload: id };
}

// export async function fetchAllTodos(dispatch) {
//   try {
//     const res = await api.fetchAllTodos();
//     return dispatch(setTracksResult(res.data.data));
//   } catch (error) {
//     console.log(error, "fetcherror");
//   }
// }

export function addTodo(todoValues){
  return async function addTodoThunk(dispatch){
    try{
      dispatch(setTodo(todoValues))
    }
    catch {
      console.log("error")
    }
  }
  
}