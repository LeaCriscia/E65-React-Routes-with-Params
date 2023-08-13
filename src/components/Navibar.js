import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navibar=()=> {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kodego Bootcamp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/services">Services</Link></Nav.Link>
            <Nav.Link><Link to="/experts">Experts</Link></Nav.Link>
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;