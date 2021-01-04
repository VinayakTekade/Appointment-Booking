import React from "react";

const Success = (props) => {
  const { statuscode, eventDate, eventDuration } = props;
  return (
    <div>
      <h1>
        This page will show the status of the Appointment after clicking next
      </h1>
    </div>
  );
};

export default Success;
