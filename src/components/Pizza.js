import React from "react";

export default function Pizza() {
  const submit = () => {
    // if form valid the clear input
    // if form valid send data and return
    // if form invalid then show errors
    // data must be at least 2 chars
  };

  const onChange = () => {
    console.log("chnage");
  };

  return (
    <div>
      Pizza
      <form onSubmit={submit}>
        <input type="text" name="pizzaName" value="pizza" onChange={onChange} />
        <p>sizes</p>
        <select>
          <option>Extra Lg</option>
          <option>Lg</option>
          <option>Med</option>
          <option>Small</option>
        </select>
        <p>toppings</p>
        <label>
          pineapple-bacon
          <input type="checkbox" name="pineapple-bacon" value />
        </label>
        <label>
          pepperoni
          <input type="checkbox" name="pepperoni" value />
        </label>
        <label>
          tomato
          <input type="checkbox" name="tomato" value />
        </label>
        <label>
          spinach
          <input type="checkbox" name="spinach" value />
        </label>
        <label>
          Special Instructions
          <input
            type="text-area"
            name="instructions"
            value=""
            onChange={onChange}
          />
        </label>
        {/* returns a database record of name, size, toppings and special instructions */}
        <button type="submit">Add to Order</button>
      </form>
    </div>
  );
}
