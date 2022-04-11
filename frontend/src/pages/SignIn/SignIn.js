import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";

import * as ROUTES from "../../routes";

export default function SignIn(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailAdmin = "joseprrr@gmail.com"
  const passwordAdmin = "123456"

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  function handleSubmit(e){
    e.preventDefault();
    if(user.email === emailAdmin && user.password === passwordAdmin){
      navigate(ROUTES.HOME);
    }
    else{
      console.log("you have to sign-up")
    }
  }

  function handleInput(e){
    const { target } = e;
    const { name, value } = target;

    const newUser = {
      ...user,
      [name]: value,
    };
    setUser(newUser)
  }
  return (
    <main className="container text-center">
      <section className="container px-5 py-2">
        <h1 className="my-4">Sign in</h1>
        <form className="d-flex flex-column px-5" onSubmit={handleSubmit}>
            <input
              className="auth__input"
              name="email"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInput}
              required
            />
            <input
              className=""
              name="password"
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInput}
              required
            />
          <div className="d-flex justify-content-end mb-3">
            <a className="" href="/">
              Did you forget your password?
            </a>
          </div>
          <button
            className="btn btn-primary my-2"
            type="submit"
            // disabled={isLoading}
          >
            Sign in
            {/* {isLoading && (
              <div
                className="spinner-border spinner-border-sm ml-2"
                role="status"
              ></div>
            )} */}
          </button>
          {/* {signUpError && (
            <div className="bg-danger rounded mt-2" role="status">
              Wrong email or password, <br />
              please try again
            </div>
          )} */}
        </form>
        <div className="d-flex align-self-end mt-2 mx-4">
          <p>Dont you have an account?</p>
          <a className="ps-1" href={ROUTES.SIGN_UP}>
            Create one
          </a>
        </div>
      </section>
    </main>
  );
}