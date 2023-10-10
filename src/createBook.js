import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { supabase } from "./supabaseClient";


function CreateBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [datePurchased, setDatePurchased] = useState("");
    const [dateFinishedReading, setDateFinishedReading] = useState("");
    const [format, setFormat] = useState("");
    const [personalNotes, setPersonalNotes] = useState("");

    console.log(title);
    console.log(author);

    const addNewBook = async () => {
        try {
            const { data, error } = await supabase
                .from("readbooks")
                .insert({
                    title,
                    author,
                    genre,
                    description,
                    date_purchased: datePurchased,
                    date_finished_reading: dateFinishedReading,
                    format_options: format,
                    personal_notes: personalNotes
                })
                .single();
            if (error) throw error;
        } catch (error) {
            console.log("This is the error:" + error.message);
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Add Book For Supabase Database</h3>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type = "text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type = "text"
                        id="author"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        type = "text"
                        id="genre"
                        onChange={(e) => setGenre(e.target.value)}
                    />
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as = "textarea"
                        id="description"
                        rows={3}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Label>Date Purchased</Form.Label>
                    <Form.Control
                        type = "date"
                        id="datePurchased"
                        onChange={(e) => setDatePurchased(e.target.value)}
                    />
                    <Form.Label>Date Finished Reading</Form.Label>
                    <Form.Control
                        type = "date"
                        id="dateFinishedReading"
                        onChange={(e) => setDateFinishedReading(e.target.value)}
                    />
                    <Form.Label>Personal Notes</Form.Label>
                    <Form.Control
                        as = "textarea"
                        id="format"
                        rows={3}
                        onChange={(e) => setPersonalNotes(e.target.value)}
                    />
                    <Form.Label>Format</Form.Label>
                    <Form.Control
                        as="select"
                        value={format}
                        onChange={e => setFormat(e.target.value)}
                    >
                        <option value="">Select an option:</option>
                        <option value="digital">Digital</option>
                        <option value="physical">Physical</option>
                    </Form.Control>

                    <br></br>
                    <Button onClick={ () => addNewBook() }>Add Book</Button>
                </Col>
            </Row>
            <hr></hr>
            <Row xs={1} lg={3} className="g-4">

            </Row>
        </Container>

    );
}

export default CreateBook;
