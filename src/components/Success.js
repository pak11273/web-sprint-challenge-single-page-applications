import React from "react";
import { useLocation } from "react-router-dom";

export default () => {
  let size = "";
  let toppings = {};
  let total = 0;
  let filteredToppings = "";
  let instructions = "";

  const {
    state: { order },
  } = useLocation();

  for (let prop in order) {
    switch (prop) {
      case "size":
        if (order[prop] === "xlg") {
          size = "Extra Large";
        }
        if (order[prop] === "lg") {
          size = "Large";
        }
        if (order[prop] === "med") {
          size = "Medium";
        }
        if (order[prop] === "sm") {
          size = "Small";
        }
        break;
      case "toppings":
        toppings = order[prop];
        for (let prop in toppings) {
          if (toppings[prop]) {
            filteredToppings += prop + ", ";
          }
        }
      case "instructions":
        instructions = order[prop];
      case "total":
        total = order[prop];
    }
  }
  return (
    <section id="success">
      <h4>Here is what you ordered</h4>
      <section className="confirm">
        <h5>
          Size: <span className="success-span">{size}</span>
        </h5>
        <h5>You chose these toppings:</h5>
        <h4>
          {filteredToppings &&
            filteredToppings.substring(0, filteredToppings.length - 2)}
        </h4>
        <div>
          {instructions ? (
            <>
              <h5>You want these specific instructions:</h5>
              <h4>{instructions}</h4>
            </>
          ) : null}
        </div>
        <h5>
          Your total was:{" "}
          <span className="success-span">${total.toFixed(2)}</span>
        </h5>
      </section>
      <h4>Enjoy!</h4>
    </section>
  );
};
