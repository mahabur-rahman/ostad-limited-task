import "./header.scss";
import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import lang from "../../images/lang.png";

const Header = () => {
  return (
    <>
      <div id="header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image src={logo} alt="Ostad" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <NavDropdown title="সেট ইয়োর গোল" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">সেট ইয়োর গোল 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">সেট ইয়োর গোল 2</NavDropdown.Item>
                  <NavDropdown.Item href="#">সেট ইয়োর গোল 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey={2} href="#">
                  আপকামিং লাইভ ব্যাচ
                </Nav.Link>
                <Nav.Link eventKey={2} href="#">
                  <Image src={lang} alt="lang" />
                  <span className="lang px-2">ENGLISH</span>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#" className="login_btn">
                  LOGIN
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
