import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import React from "react";

// import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
};
export default App;
