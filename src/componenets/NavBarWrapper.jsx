import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBarWrapper() {
  return (
    <Navbar className="gold" expand="sm" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Container className="d-inline-flex">
        <Navbar.Toggle className="gold" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#portoPicture" className="gold">
              about me
            </Nav.Link>
            <Nav.Link href="#experience" className="gold">
              Experience
            </Nav.Link>
            <Nav.Link href="#projects" className="gold">
              Projects
            </Nav.Link>
            <Nav.Link href="#education" className="gold">
              Education
            </Nav.Link>
            <Nav.Link href="#skills" className="gold">
              Skills
            </Nav.Link>
            <Nav.Link href="#contactme" className="gold">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
