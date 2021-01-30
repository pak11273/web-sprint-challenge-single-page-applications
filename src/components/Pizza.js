import React, { useEffect, useState } from "react";

import Switch from "./Switch";
import axios from "axios";

const Checked = () => <>🤪</>;
const UnChecked = () => <>🙂</>;

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
    sizeCost: 0,
    total: 0.0,
  };

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", {
        test: "morpheus",
        toppings: "leader",
      })
      .then((res) => {
        console.log("res: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // if form valid the clear input
    // if form valid send data and return
    // if form invalid then show errors
    // data must be at least 2 chars
  };

  // const calcTotal = () => {
  //   var total = 1;
  //   for (const prop in values.toppings) {
  //     if (values.toppings[prop]) {
  //       total++;
  //     } else {
  //       total--;
  //     }
  //     console.log("total: ", total);
  //     return total;
  //   }
  // };

  const onChange = (name, value, checked) => {
    if (!values.toppings[value] && name === "toppings") {
      setValues({ ...values, total: (values.total += 35) });
    } else if (values.toppings[value] && name === "toppings") {
      setValues({ ...values, total: (values.total -= 35) });
    }

    // if (name === "size") {
    //   if (value === "xlg") {
    //     console.log(newSize);
    //     setValues(newSize);
    //   }
    //   if (value === "lg") {
    //     setValues(newSize);
    //   }
    //   if (value === "med") {
    //     setValues(newSize);
    //   }
    //   if (value === "sm") {
    //     setValues(newSize);
    //   }
    // }

    if (name === "toppings") {
      console.log("toppings");
      setValues({
        ...values,
        toppings: {
          ...values.toppings,
          [value]: !values.toppings[value],
        },
      });
    } else if (name === "size") {
      if (value === "xlg") {
        setValues({ ...values, sizeCost: 2999 });
      }
      if (value === "lg") {
        setValues({ ...values, sizeCost: 2499 });
      }
      if (value === "med") {
        setValues({ ...values, sizeCost: 1499 });
      }
      if (value === "sm") {
        setValues({ ...values, sizeCost: 999 });
      }
    } else {
      console.log("else");
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
    console.table("name: ", name, "checked: ", checked, "value: ", value);
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
          <h4>Choose your size</h4>
          <p className="required">(required)</p>
          <select
            name="size"
            className="sizes"
            onChange={chgSize}
            defaultValue="-- select --"
          >
            <option value="" disabled hidden>
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
        <section id="substitute">
          <h4>Choice of Substitute</h4>
          <div className="switchContainer">
            <Switch /> <span>Gluten Free Crust</span>
          </div>
        </section>
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
                  onChange={chgQty}
                />
              </label>
              <label className="total">
                Total
                <div>$ {values.total.toFixed(2)}</div>
              </label>
            </div>
            <button type="submit">
              <img src="https://valentinos.com/wp-content/uploads/2019/06/pepperoni.png" />
              <p>Place you order</p>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
