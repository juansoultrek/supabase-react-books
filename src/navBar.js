import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

function NavBar() {
    const navigate = useNavigate();

    const handleLogout = async () => {

        const { error } = await supabase.auth.signOut();
        navigate("read");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>My Read Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                        <Link to="/create" className="nav-link">
                            Add Book
                        </Link>
                        <Link to="/read" className="nav-link">
                        </Link>
                        <Link to="/edit" className="nav-link">
                            Edit Book
                        </Link>
                        <Link to="#" className="nav-link" onClick={handleLogout}>
                            Log Out
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
