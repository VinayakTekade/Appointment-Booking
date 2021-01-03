import { Jumbotron, Container } from "reactstrap";

const Greeting = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome</h1>
          <p className="lead">
            To the world's best doctor. <br /> Press the "Book Appointment" in
            the header to schedule a meeting
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Greeting;
