import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

function navbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand className="title" href="#home">
        Lista de <span>Empleados</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" mr-auto">
          <Nav.Link className="nav-button" href="#register">
            Registro
          </Nav.Link>
          <Nav.Link className="nav-button" href="#listas">
            Listas
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
