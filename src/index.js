import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Pipeline from "./Percentage-Pipeline";

function RouteSetUp() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/percentage" component={Pipeline} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouteSetUp />, rootElement);
