import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";
import "./assets/css/index.css";
import App from "./App";
import Status from "./Status";
import Error from "./Error";
import reportWebVitals from "./reportWebVitals";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/status">
          <Status />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ReactRouterSetup />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
