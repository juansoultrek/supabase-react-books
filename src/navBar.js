import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/read" className="navbar-brand">My Read Books</Link> {/* Added Link to Read Books */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/create" className="nav-link">
                            Add New Book
                        </Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Item>Created by Juan</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
