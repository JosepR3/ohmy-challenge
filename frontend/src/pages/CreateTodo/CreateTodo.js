import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";

import todoSchema from "./todoSchema";
import * as ROUTES from "../../routes";

export default function CreateTodo(){
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      userId: null,
      title: "",
      completed: false,
    },
    validationSchema: todoSchema,
    onSubmit: (values, { setSubmitting }) => {
      const newTodo = addTodo(values);
      setTodo(newTodo);
      setSubmitting(true);
    },
  });
  return (
    <form className="d-flex flex-column w-25 px-5">
            <input
              className=""
              id="userId"
              name="userId"
              type="number"
              placeholder="User Id"
              value={formik.values.userId}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.userId}
              errorMessage={formik.errors.userId}
              required
            />
            <input
              className=""
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              required
            />
            <input
              className=""
              id="completed"
              name="completed"
              type="checkbox"
            />
          <button
            className="btn btn-primary my-2"
            type="submit"
            // disabled={isLoading}
          >
            Submit
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
  )
}