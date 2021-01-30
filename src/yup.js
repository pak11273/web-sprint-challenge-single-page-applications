import * as yup from "yup";

let schema = yup.object().shape({
  size: yup.string().required(),
  substitute: yup.boolean(),
  instructions: yup.string(),
  toppings: yup.object(),
  qty: yup.number(),
});

export default schema;
