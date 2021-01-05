import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";

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
            <th>Date and Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {this.state.events.map((e) => {
            let date = new Date(e.dateTime).toString();
            return (
              <tr>
                <td>{date}</td>
                <td>{e.duration} Minutes</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
