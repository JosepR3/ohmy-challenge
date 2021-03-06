import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as ROUTES from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/index.scss";

import { fetchAllTodos } from "./redux/todos/todos-actions";

//PAGE COMPONENTS
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CreateTodo from "./pages/CreateTodo/CreateTodo";

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchAllTodos());
  },[])

  return (
    <>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route exact path={ROUTES.CREATE_TODO} element={<CreateTodo />} />
      </Routes>
    </>
  );
}

export default App;
