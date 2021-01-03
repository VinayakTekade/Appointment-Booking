import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";
import "./assets/css/index.css";
import App from "./App";
import Nav from "./components/NavBar";
import Info from "./components/Information";
import reportWebVitals from "./reportWebVitals";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/nav">
          <Info />
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
