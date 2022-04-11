import initialState from "./todos-state";
import {
  SET_TODO_LIST,
  SET_TODO,
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
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todosList: [...state.todosList, action.payload],
      };
    case EDIT_TODO: {
      const index = action.payload.id - 1;
      const newArray = [...state.todosList];
      newArray[index] = action.payload;
      console.log(newArray);
      return {
        ...state,
        todosList: newArray,
      };
    }
    case DELETE_TODO: {
      console.log(action.payload)
      const index = action.payload - 1;
      console.log(state.todosList)
      state.todosList.splice(index, 1);

      return {
        ...state,
        todosList: state.todosList,
      };
    }
    default:
      return state;
  }
}
