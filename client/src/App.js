import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Status from "./Status";
import Error from "./Error";
import EventsList from "./EventsList";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/status" component={Status} />
        <Route path="/listAll" component={EventsList} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};
export default App;
