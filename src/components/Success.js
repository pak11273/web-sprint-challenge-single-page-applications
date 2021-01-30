import React from "react";

export default () => {
  const order = [{ name: "pizza" }];
  return (
    <section id="success">
      <h4>Here is what you ordered</h4>
      <section className="confirm">
        {order.map((value, i) => {
          return <h5 key={i}>{value.name}</h5>;
        })}
      </section>
      <h4>Enjoy!</h4>
    </section>
  );
};
