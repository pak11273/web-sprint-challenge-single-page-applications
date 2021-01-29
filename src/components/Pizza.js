import React, { useState } from "react";

import Swtich from "./Swtich";

export default function Pizza() {
  const initialState = {
    size: "",
    toppings: [],
    substitute: false,
    instructions: "",
    qty: 0,
    total: 0,
  };
  const [state, setState] = useState(initialState);

  const submit = () => {
    // if form valid the clear input
    // if form valid send data and return
    // if form invalid then show errors
    // data must be at least 2 chars
  };

  const onChange = (e) => {
    const [name, value] = e.target;
    setState({
      ...state,
      size: value.innerHTML,
    });
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
          <select className="sizes" onChange={onChange}>
            <option value="" selected disabled hidden>
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
              <input type="checkbox" name="italian" value />
            </label>
            <label>
              Roasted Garlic
              <input type="checkbox" name="garlic" value />
            </label>
            <label>
              Green Pepper
              <input type="checkbox" name="greenpepper" value />
            </label>
            <label>
              Onions
              <input type="checkbox" name="onions" value />
            </label>
            <label>
              Grilled Chicken
              <input type="checkbox" name="chicken" value />
            </label>
            <label>
              Canadian Bacon
              <input type="checkbox" name="canadian" value />
            </label>
            <label>
              Sausage
              <input type="checkbox" name="sausage" value />
            </label>
            <label>
              Pineapple
              <input type="checkbox" name="pineapple" value />
            </label>
            <label>
              Pepperoni
              <input type="checkbox" name="pepperoni" value />
            </label>
            <label>
              Tomato
              <input type="checkbox" name="tomato" value />
            </label>
            <label>
              Spinach
              <input type="checkbox" name="spinach" value />
            </label>
            <label />
            <label />
            <label />
            <label />
          </div>
        </section>
        <section id="substitute">
          <h4>Choice of Substitute</h4>
          <Swtich />
        </section>
        <section id="order">
          <label>
            <h4>Special Instructions</h4>
            <textarea
              rows="10"
              type="text"
              name="instructions"
              value=""
              onChange={onChange}
            />
          </label>
        </section>
        <section id="order">
          returns a database record of name, size, toppings and special
          instructions
          <div className="order">
            <label>
              Qty
              <input type="number" name="qty" step="1" defaultValue="1" />
            </label>
            <button type="submit">Order</button>
            <input type="text" name="amount" value="$19.95" />
          </div>
        </section>
      </form>
    </div>
  );
}
