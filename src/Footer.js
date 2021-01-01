import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";

const Footer = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="display-4 ">Schedule your meeting now</h3>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <Button color="primary" size="lg">
                Book Appointment
              </Button>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
