import React from "react";
import moment from "moment-timezone";
import { Switch, Route, useParams } from "react-router-dom";

const Success = () => {
  return (
    <div>
      <Switch>
        <Route
          path="/status/:dateTime/:duration"
          children={<BookingStatus />}
        />
      </Switch>
    </div>
  );
};

const BookingStatus = () => {
  let { dateTime, duration } = useParams();
  let date = moment(dateTime).format("dddd, MMMM Do YYYY");
  let time = moment(dateTime).format("hh:mm A");
  return (
    <div
      className="statusMessage"
      style={{ width: "700px", margin: "100px auto" }}
    >
      <h3>Your appointment is successfully booked</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>duration: {duration}</p>
      <a href="/">Back to Home</a>
    </div>
  );
};
export default Success;
