import * as Yup from "yup";

const todoSchema = Yup.object().shape({
  userId: Yup.number()
    .integer("You should put an id number")
    .positive("Id should be a positive number")
    .required("Id is required"),
  title: Yup.string()
    .min(4, "Min characters permitted are 4")
    .max(200, "Max characters permitted are 200")
    .required("The title is required"),
});

export default todoSchema;