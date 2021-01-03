import { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "reactstrap";

function DatePicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="row mx-2 my-5">
      <div className="col-12 col-md-6">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="col-12 col-md-6 text-center">
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
        <Button outline color="primary" className="m-2">
          8:30 AM
        </Button>
      </div>
    </div>
  );
}

export default DatePicker;
