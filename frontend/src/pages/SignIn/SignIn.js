import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import * as ROUTES from "../../routes";

export default function SignIn(){
  return (
    <main className="container text-center">
      <section className="container px-5 py-2">
        <h1 className="my-4">Sign in</h1>
        <form className="d-flex flex-column px-5">
            <input
              className="auth__input"
              name="email"
              type="email"
              placeholder="Email"
              // value={email}
              // onChange={handleSetEmail}
              required
            />
            <input
              className=""
              name="password"
              type="password"
              placeholder="Password"
              // value={password}
              // onChange={handleSetPassword}
              required
            />
          <div className="d-flex justify-content-end mb-3">
            <a className="" href="#">
              Did you forget your password?
            </a>
          </div>
          <button
            className="btn btn-primary my-2"
            type="submit"
            variant="log-color"
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