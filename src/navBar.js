import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

function NavBar() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUserData() {
            const { data, error } = await supabase.auth.getUser();

            if (!error && data?.user) {
                setUser(data.user);
                console.log(data.user.email);
            }
        }
        getUserData();
    }, []);

    const handleLogout = async () => {

        const {} = await supabase.auth.signOut();
        window.location.reload();
        navigate("read");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/read" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand>
                        My Read Books {user.email ? <span style={{ fontSize: '12px', color: 'blue' }}>{user.email}</span> : null}
                    </Navbar.Brand>
                </Link>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/login" className={`nav-link ${user.email ? 'd-none' : ''}`}>
                            Login
                        </Link>
                        {user.email && (
                            <>
                                <Link to="/create" className="nav-link">
                                    Add Book
                                </Link>
                                <Link to="/edit" className="nav-link">
                                    Edit Book
                                </Link>

                                <Link to="#" className="nav-link" onClick={handleLogout}>
                                    Log Out
                                </Link>
                            </>
                        )}
                        <Link to="/read" className="nav-link">
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
