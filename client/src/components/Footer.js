import { Jumbotron, Container } from "reactstrap";
import Booking from "./Booking";

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
              <Booking className="BookApp" size="lg" />
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
