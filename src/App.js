import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pizza from "./components/Pizza";
import React from "react";
import Success from "./components/Success";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/pizza">
            <Pizza />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
