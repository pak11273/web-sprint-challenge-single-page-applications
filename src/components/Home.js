import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h2>Fuel your coding!</h2>
      <Link to="/pizza">
        <img
          src="https://media.istockphoto.com/photos/one-slice-of-pizza-on-a-white-picture-id595136994?k=6&m=595136994&s=170667a&w=0&h=0SxY7j7KnroZQ7yktscIYC2X3CxUQRNzyBwLRcrhLWc="
          width="300px"
          height="100%"
        />
      </Link>
    </div>
  );
}
