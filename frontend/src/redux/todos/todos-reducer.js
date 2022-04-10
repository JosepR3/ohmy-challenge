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
      todosList: [...state.todosList, action.payload]
      };
    case EDIT_TODO:
      console.log(action.payload.id)
      return {
        ...state,
          ...state.todosList,
            [action.payload.id - 1]: action.payload
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