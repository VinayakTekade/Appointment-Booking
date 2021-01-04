import React, { Component } from "react";
import DatePicker from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "reactstrap";

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTimezone = this.onChangeTimezone.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.getSlots = this.getSlots.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: new Date(),
      timezones: [],
      duration: 0,
      slots: [],
    };
  }

  componentDidMount() {
    this.setState({
      date: new Date(),
      timezones: ["America/New_York"],
      duration: 30,
    });
  }

  onChangeTimezone(e) {
    this.setState({
      timezone: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const events = {
      date: this.state.date,
      timezone: this.state.timezone,
      duration: parseInt(this.state.duration),
    };
    this.getSlots();

    console.log(events);

    // window.location = "/slots";
  }

  getSlots() {
    this.setState({
      slots: ["8:30AM", "9:30AM", "10:30AM", "11:30AM"],
    });
    console.log("Slots Displayed");
  }

  render() {
    return (
      <div>
        <div className="row px-3">
          <div className="col-12 col-md-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label> Date:</label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
              <div className="form-group">
                <select
                  ref="timezoneInput"
                  required
                  className="form-control"
                  value={this.state.timezone}
                  onChange={this.onChangeTimezone}
                >
                  {this.state.timezones.map((timezone) => {
                    return (
                      <option key={timezone} value={timezone}>
                        {timezone}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label> Duration</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Get Slots"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6">
            {this.state.slots.map((slot) => {
              return (
                <Button outline color="primary" className="m-2">
                  {slot}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
