import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </div>
  );
}
