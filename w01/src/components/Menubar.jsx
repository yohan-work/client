import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MainRouter from "./MainRouter";
import { useLocation } from "react-router-dom";

const Menubar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">React</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" active={pathname === "/" && true}>
                Home
              </Nav.Link>
              <Nav.Link href="/cart" active={pathname === "/cart" && true}>
                Cart
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login" active={pathname === "/login" && true}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MainRouter />
    </>
  );
};

export default Menubar;
