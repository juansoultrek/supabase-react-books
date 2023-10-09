import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

function CreateBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    console.log(title);
    console.log(author);

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Add Book For Supabase Database</h3>
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <h3>Add Book For Supabase Database</h3>
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control
                        type="text"
                        id="author"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <br></br>
                    <Button>Add Book</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateBook;
