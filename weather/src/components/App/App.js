import React from "react";

import Main from "../Main/Main";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="mainPage">
        <Switch>
          <Route exact path="/" component={Main} />
         
        </Switch>
      </div>
    </Router>
  );
}
