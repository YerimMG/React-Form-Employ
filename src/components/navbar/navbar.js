import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
import { Link } from 'react-router-dom';

function useNavbar() {
  return (
    <Navbar className="fade-in-fast" bg="dark" variant="dark" expand="sm">
      <Navbar.Brand className="title">
        Lista de <span>Empleados</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" mr-auto">
          <Nav.Link as={Link} to="/" className="nav-button" href="/#">
            Registro
          </Nav.Link>
          <Nav.Link as={Link} to="/list" className="nav-button" href="#/">
            Listas
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default useNavbar;
