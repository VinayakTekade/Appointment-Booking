import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import moment from "moment-timezone";
moment.tz.setDefault("America/New_York");

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{}],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/listAll").then((res) => {
      this.setState({
        events: res.data,
      });
    });
  }

  render() {
    return (
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
    );
  }
}
