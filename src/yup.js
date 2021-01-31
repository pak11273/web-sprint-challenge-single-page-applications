import * as yup from "yup";

let schema = yup.object().shape({
  size: yup.string().required("A size is required"),
  instructions: yup.string(),
});

export default schema;
