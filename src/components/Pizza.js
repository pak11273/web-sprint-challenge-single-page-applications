import * as yup from "yup";

import React, { useEffect, useState } from "react";

import axios from "axios";
import classNames from "classnames";
import schema from "../yup";
import { useHistory } from "react-router-dom";

// import Switch from "./Switch";

// const Checked = () => <>🤪</>;
// const UnChecked = () => <>🙂</>;

export default function Pizza() {
  const initialValues = {
    size: "",
    toppings: {
      italian: false,
      garlic: false,
      "green pepper": false,
      onions: false,
      chicken: false,
      bacon: false,
      sausage: false,
      pineapple: false,
      pepperoni: false,
      tomato: false,
      spinach: false,
    },
    substitute: false,
    instructions: "",
    qty: 1,
    errors: [],
    toppingsCost: 0,
    sizeCost: 0,
    total: 0,
  };

  const initialFormErrors = {
    size: "",
    substitute: "",
    instructions: "",
  };

  const [values, setValues] = useState(initialValues);
  const [valid] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    // if form valid the clear input
    if (!valid) {
      console.log("not valid!");
    } else {
      axios
        .post("https://reqres.in/api/users", values)
        .then((res) => {
          history.push({ pathname: "/success", state: { order: res.data } });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    setValues({
      ...values,
      total: (values.toppingsCost + values.sizeCost / 100) * values.qty,
    });
  }, [values.sizeCost, values.toppingsCost, values.qty]);

  const onChange = (name, value, checked) => {
    if (name !== "toppings" && name !== "qty") {
      yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setFormErrors({ ...formErrors, [name]: "" });
        })
        .catch((err) => {
          console.log(name);
          console.log(err);
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0],
          });
        });
    }

    // // setFormValues({
    // //   ...formValues,
    // //   [name]: value, // NOT AN ARRAY
    // // });

    if (!values.toppings[value] && name === "toppings") {
      setValues({ ...values, toppingsCost: (values.toppingsCost += 35 / 100) });
    } else if (values.toppings[value] && name === "toppings") {
      setValues({ ...values, toppingsCost: (values.toppingsCost -= 35 / 100) });
    }

    if (name === "toppings") {
      setValues({
        ...values,
        toppings: {
          ...values.toppings,
          [value]: !values.toppings[value],
        },
      });
    } else if (name === "size") {
      if (value === "xlg") {
        setValues({
          ...values,
          [name]: value,
          sizeCost: 2999,
        });
      }
      if (value === "lg") {
        setValues({
          ...values,
          [name]: value,
          sizeCost: 2499,
        });
      }
      if (value === "med") {
        setValues({
          ...values,
          [name]: value,
          sizeCost: 1499,
        });
      }
      if (value === "sm") {
        setValues({
          ...values,
          [name]: value,
          sizeCost: 999,
        });
      }
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const chgSize = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const chgTopping = (e) => {
    const { name, checked, value } = e.target;
    onChange(name, value, checked);
  };

  const chgInstructions = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const chgQty = (e) => {
    const { name, value } = e.target;
    onChange(name, Number(value));
  };

  return (
    <div className="pizza">
      <h4 className="subtitle">
        <span>FREE</span> Drink with every order!
      </h4>
      <form id="form" onSubmit={submit}>
        <section id="sizes">
          <div>{formErrors.size}</div>
          <h4>Choose your size</h4>
          <p className="required">(required)</p>
          <select
            name="size"
            className="sizes"
            onChange={chgSize}
            defaultValue="sel"
          >
            <option value="sel" disabled>
              -- select --
            </option>
            <option value="xlg">Extra Large</option>
            <option value="lg">Large</option>
            <option value="med">Medium</option>
            <option value="sm">Small</option>
          </select>
        </section>
        <section id="toppings">
          <h4>Add Toppings</h4>
          <div className="toppings">
            <label>
              Spicy Italian Sausage
              <input
                type="checkbox"
                name="toppings"
                value="italian"
                checked={values.toppings.italian === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Roasted Garlic
              <input
                type="checkbox"
                name="toppings"
                value="garlic"
                checked={values.toppings.garlic === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Green Pepper
              <input
                type="checkbox"
                name="toppings"
                value="green pepper"
                checked={values.toppings["green pepper"] === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Onions
              <input
                type="checkbox"
                name="toppings"
                value="onions"
                checked={values.toppings.onions === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Grilled Chicken
              <input
                type="checkbox"
                name="toppings"
                value="chicken"
                checked={values.toppings.chicken === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Canadian Bacon
              <input
                type="checkbox"
                name="toppings"
                value="bacon"
                checked={values.toppings.bacon === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Sausage
              <input
                type="checkbox"
                name="toppings"
                value="sausage"
                checked={values.toppings.sausage === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Pineapple
              <input
                type="checkbox"
                name="toppings"
                value="pineapple"
                checked={values.toppings.pineapple === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Pepperoni
              <input
                type="checkbox"
                name="toppings"
                value="pepperoni"
                checked={values.toppings.pepperoni === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Tomato
              <input
                type="checkbox"
                name="toppings"
                value="tomato"
                checked={values.toppings.tomato === true}
                onChange={chgTopping}
              />
            </label>
            <label>
              Spinach
              <input
                type="checkbox"
                name="toppings"
                value="spinach"
                checked={values.toppings.spinach === true}
                onChange={chgTopping}
              />
            </label>
            <label />
            <label />
            <label />
            <label />
          </div>
        </section>
        {/* <section id="substitute">
          <h4>Choice of Substitute</h4>
          <div className="switchContainer">
            <Switch /> <span>Gluten Free Crust</span>
          </div>
        </section> */}
        <section id="order">
          <label>
            <h4>Special Instructions</h4>
            <textarea
              rows="10"
              type="text"
              name="instructions"
              value={values.instructions}
              onChange={chgInstructions}
            />
            {formErrors.instructions && (
              <div className="errors">{formErrors.instructions}</div>
            )}
          </label>
        </section>
        <section id="order">
          <div>
            <div className="order">
              <label className="qty">
                Qty
                <input
                  type="number"
                  name="qty"
                  step="1"
                  defaultValue="1"
                  min="1"
                  onChange={chgQty}
                />
              </label>
              <label className="total">
                Total
                <div>$ {values.total && values.total.toFixed(2)}</div>
              </label>
            </div>
            <button
              type="submit"
              className={classNames({ notValidBtn: !valid, validBtn: valid })}
            >
              <img
                alt="pizza slice"
                src="https://valentinos.com/wp-content/uploads/2019/06/pepperoni.png"
              />
              <p>Place you order</p>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
