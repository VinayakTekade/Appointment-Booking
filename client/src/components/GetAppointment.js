import React, { Component } from "react";
import DatePicker from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "reactstrap";
import axios from "axios";
import moment from "moment-timezone";
import timezones from "../timezones";
moment.tz.setDefault("America/New_York");

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTimezone = this.onChangeTimezone.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.getSlots = this.getSlots.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSlotSelect = this.onSlotSelect.bind(this);

    this.state = {
      date: new Date(),
      timezones: timezones,
      timezone: "",
      duration: 0,
      slots: [],
      buttons: [],
    };
  }

  componentDidMount() {
    this.setState({
      date: new Date(),
      timezone: "America/New_York",
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

  getSlots(availableSlots) {
    let refSlots = [];
    availableSlots.map((slot) => {
      refSlots.push(moment.tz(slot, this.state.timezone));
    });
    this.setState({
      slots: refSlots,
    });
    let tmp = [];
    this.state.slots.map((slot) => {
      let Hours = slot.hours();
      let min = slot.minutes();
      let _hrs = Hours;
      let _daynight = "AM";
      if (Hours > 12) {
        _hrs = Hours - 12;
        _daynight = "PM";
      } else if (Hours === 12) {
        _hrs = 12;
        _daynight = "PM";
      }
      let _min = min;
      if (min === 0) _min = "00";
      tmp.push(`${_hrs}:${_min} ${_daynight}`);
      return tmp;
    });
    this.setState({
      buttons: tmp,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const events = {
      reqDate: this.state.date.valueOf(),
      reqTimezone: this.state.timezone,
    };

    axios.post("http://localhost:5000/freeSlots", events).then((res) => {
      this.getSlots(res.data);
    });
  }

  onSlotSelect(e) {
    let refSlots = [];
    this.state.slots.map((slot) => {
      refSlots.push(moment.tz(slot, "America/New_York"));
    });
    let index = this.state.buttons.indexOf(e.button);
    const selectedSlot = refSlots[index];
    let date = this.state.date,
      yr = date.getFullYear(),
      month = date.getMonth(),
      day = date.getDate(),
      hr = moment(selectedSlot).hours(),
      min = moment(selectedSlot).minutes();

    // let eventDateTime = new Date(yr, month, day, hr, min, 0);
    let eventDateTime = moment
      .tz([yr, month, day, hr, min], "America/New_York")
      .format();
    console.log(eventDateTime);

    const eventParam = {
      reqDateTime: eventDateTime,
      reqDuration: this.state.duration,
    };

    axios.post("http://localhost:5000/createEvent", eventParam).then(() => {
      window.location = "/status";
    });
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
            {this.state.buttons.map((button) => {
              return (
                <Button
                  color="primary"
                  className="m-2"
                  onClick={() => {
                    this.onSlotSelect({ button });
                  }}
                >
                  {button}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
