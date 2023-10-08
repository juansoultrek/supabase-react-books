import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';

function App() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>My Read Books </Navbar.Brand>
                    <Nav>
                        <Nav.Item>Created by Juan</Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <h3>Add Book For Supabase Database</h3>
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control
                            type = "text"
                            id="name"
                        />
                        <h3>Add Book For Supabase Database</h3>
                        <Form.Label>Book Description</Form.Label>
                        <Form.Control
                            type = "text"
                            id="description"
                        />
                        <br></br>
                            <Button>Add Book</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
