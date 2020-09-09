import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="main-sub-container">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
