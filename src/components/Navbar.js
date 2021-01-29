import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <h2 className="title">
        <span>Lambda</span> Eats
      </h2>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/pizza">Pizza</Link>
      </nav>
    </div>
  );
}
