import React, { Component } from "react";
// import {  } from "reactstrap";
import Calendar from "react-calendar";
import axios from "axios";
import { Table } from "reactstrap";
import moment from "moment-timezone";
moment.tz.setDefault("America/New_York");

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getEventsList = this.getEventsList.bind(this);

    this.state = {
      events: [],
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  componentDidMount() {
    this.setState({
      events: [],
      startDate: moment()
        .tz("America/New_York")
        .set({ hour: 0, minute: 0, second: 0 })
        .toDate(),
      endDate: moment()
        .tz("America/New_York")
        .set({ hour: 0, minute: 0, second: 0 })
        .add(1, "day")
        .toDate(),
    });
  }

  onChangeStart = (start) => {
    this.setState({
      startDate: moment(start)
        .tz("America/New_York")
        .set({ hour: 0, minute: 0, second: 0 })
        .add(1, "day")
        .toDate(),
    });
    console.log(this.state.startDate);
  };

  onChangeEnd = (end) => {
    this.setState({
      endDate: moment(end)
        .tz("America/New_York")
        .set({ hour: 0, minute: 0, second: 0 })
        .add(1, "day")
        .toDate(),
    });
    console.log(this.state.endDate);
  };

  getEventsList(eventsList) {
    this.setState({
      events: eventsList,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const range = {
      reqStart: moment.tz(this.state.startDate, "America/New_York").toDate(),
      reqEnd: moment.tz(this.state.endDate, "America/New_York").toDate(),
    };

    axios.post("http://localhost:5000/getEvents/", range).then((res) => {
      this.getEventsList(res.data);
    });
  }
  render() {
    return (
      <div className="container">
        <form className="range-selector row mt-5" onSubmit={this.onSubmit}>
          <div className="col-12 col-md-6 mt-5">
            <div className="display-3 mb-3">Start Date</div>
            <Calendar
              selected={this.state.startDate}
              onChange={this.onChangeStart}
            />
          </div>
          <div className="col-12 col-md-6 mt-5">
            <div className="display-3 mb-3">End Date</div>
            <Calendar
              selected={this.state.endDate}
              onChange={this.onChangeEnd}
            />
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <input
              type="submit"
              value="Get Events"
              className="btn btn-primary mt-5"
            />
          </div>
        </form>
        <Table className="container mt-5" striped>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map((e) => {
              let date = moment(e.dateTime).format("dddd, MMMM Do YYYY");
              let time = moment(e.dateTime).format("hh:mm A");
              return (
                <tr>
                  <td>{date}</td>
                  <td>{time}</td>
                  <td>{e.duration} Minutes</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
