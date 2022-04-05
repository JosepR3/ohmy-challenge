import { Route, Routes } from "react-router-dom";

import * as ROUTES from "./routes";
import './App.css';

//PAGE COMPONENTS
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CreateTodo from "./pages/CreateTodo";

function App() {
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
