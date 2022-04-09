import { createSelector } from "reselect";

export const selectTodosState = (state) => state.todos;

export const todosSelector = createSelector(
  [selectTodosState],
  (todos) => todos,
);