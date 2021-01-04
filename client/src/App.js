import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";
import Home from "./Home";
import Status from "./Status";
import Error from "./Error";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/status" component={Status} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};
export default App;
