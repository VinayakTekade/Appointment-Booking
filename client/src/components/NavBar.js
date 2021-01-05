import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
} from "reactstrap";
import Booking from "./Booking";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">Dr John</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Link to="/listAll">
              <Button color="primary" className="mx-2">
                List All events
              </Button>
            </Link>
            <Booking className="BookApp" />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
