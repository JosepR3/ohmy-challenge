import { makeRequest } from "./api-utils";

function makeApi(request = makeRequest()) {
  
  function fetchAllTodos() {
    return request({
      url: "/",
      requestMethod: "GET",
    });
  }

  function fetchTodo( id ) {
    return request({
      url: `/${id}`,
      requestMethod: "GET",
    });
  }

  function updateTodo( id, body ) {
    return request({
      url: `/${id}`,
      requestMethod: "PATCH",
      body: body,
    });
  }

  function deleteTodo( id ) {
    return request({
      url: `/${id}`,
      requestMethod: "DELETE",
    });
  }

  function createTodo( body ) {
    return request({
      url: "/",
      requestMethod: "POST",
      body: body
    });
  }

  function fetchTodoByUser( userId ) {
    return request({
      url: `?userId=${userId}`,
      requestMethod: "GET",
    });
  }

  return {
    fetchAllTodos: fetchAllTodos,
    fetchTodo: fetchTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo,
    createTodo: createTodo,
    fetchTodoByUser: fetchTodoByUser

  };
}

export default makeApi();
