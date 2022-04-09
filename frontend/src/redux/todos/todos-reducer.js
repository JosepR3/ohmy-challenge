import initialState from "./todos-state";
import {
  SET_TODO_LIST,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,

} from "./todos-types";

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        ...state,
        todosList: action.payload,
      };
    case ADD_TODO:
      console.log(action.payload)
      return {
      ...state,
      todoList: [...state.todoList, action.payload]
      };
    case EDIT_TODO:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        state: null,
      };
    default:
      return state;
  }
}