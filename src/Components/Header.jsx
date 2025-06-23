import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-info m-3">
          <Container fluid>
            <Navbar.Brand href="#" className="text-light">
              Aswin Hsptl
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="text-light">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  Dashboard
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  Appointments
                </Nav.Link>
                <NavDropdown
                  title={
                    <span className="text-white">
                      More <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  }
                  className="text-light"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              </Form>
              <Button variant="outline-success" className="bg-success text-light ms-3">New Sale</Button>
              <Button variant="outline-success" className="bg-success text-light ms-3 me-3">Add Patient</Button>  
              <button className="me-3">a</button>
              <button className="me-3">b</button>
              <button className="me-3">c</button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <style>
        {`
          /* Remove the default Bootstrap dropdown icon */
          .navbar .nav-item .nav-link::after {
            display: none;
          }
        `}
      </style>
    </>
  );
}

export default Header;
