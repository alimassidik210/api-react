import { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

const NavComp = () => {
  return (
    <Container className="sticky-top border border-bottom-0  mt-4">
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
        <Container fluid>
          <Navbar.Brand href="#" className="text-info fs-3">
            Darcik News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", fontSize: "1.3rem" }}
              navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <Nav.Link href="#" disabled>
                AboutMe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavComp;
