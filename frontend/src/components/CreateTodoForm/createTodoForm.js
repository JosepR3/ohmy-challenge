import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";

// Redux
import { todosSelector } from "../../redux/todos/todos-selector";
import { addTodo } from "../../redux/todos/todos-actions";

import todoSchema from "./todoSchema";
import * as ROUTES from "../../routes";

import Input from "../Input";

export default function CreateTodoForm() {
  const dispatch = useDispatch();

  const { todo } = useSelector(todosSelector);
  console.log(todo)
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      userId: todo?.userId,
      title: todo?.title,
      completed: todo?.completed,
    },
    validationSchema: todoSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values)
      dispatch(addTodo(values));
      setSubmitting(true);
      setHasSubmitted(true);
    },
  });
  return (
    <form className="d-flex flex-column w-25 px-5" onSubmit={formik.handleSubmit}>
      <Input
        label="User Id"
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
      <Input
        label="Title"
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        value={formik.values.title}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.title}
        errorMessage={formik.errors.title}
        required
      />
      <label>Completed</label>
      <input
        label="Completed"
        id="completed"
        name="completed"
        type="checkbox"
        value={formik.values.completed}
        onChange={formik.handleChange}
        // handleBlur={formik.handleBlur}
        // hasErrorMessage={formik.touched.completed}
        // errorMessage={formik.errors.completed}
      />
      <button
        className="btn btn-primary my-2"
        type="submit"
        // disabled={formik.isValidating || !formik.isValid}
      >
        {formik.isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {hasSubmitted && <Navigate to={ROUTES.HOME} />}
    </form>
  );
}
