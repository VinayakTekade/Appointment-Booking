import React from "react";
import { Switch, Route, useParams } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/error/:status" children={<GetStatus />} />
        <Route path="/" children={<NotFound />} />
      </Switch>
    </div>
  );
};

const GetStatus = () => {
  let { status } = useParams();
  return (
    <div
      className="errorMessage"
      style={{ width: "700px", margin: "100px auto" }}
    >
      <h3>Failed</h3>
      <p>Status Code: {status}</p>
      <a href="/">Back to Home</a>
    </div>
  );
};
const NotFound = () => {
  return (
    <div className="errorMessage" style={{ marginTop: "70px" }}>
      <h3>Page Not Found</h3>
      <p>Status Code: 404</p>
    </div>
  );
};

export default Error;
