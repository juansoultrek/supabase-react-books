import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { supabase } from "./supabaseClient";
import { Alert } from 'react-bootstrap';


function CreateBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [datePurchased, setDatePurchased] = useState("");
    const [dateFinishedReading, setDateFinishedReading] = useState("");
    const [format, setFormat] = useState("");
    const [personalNotes, setPersonalNotes] = useState("");

    const [insertSuccess, setInsertSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState("success");

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const resetForm = () => {
        setTitle("");
        setAuthor("");
        setGenre("");
        setDescription("");
        setDatePurchased("");
        setDateFinishedReading("");
        setFormat("");
        setPersonalNotes("");

        console.log('resetForm called')
    };

    const addNewBook = async () => {

        if (
            title.trim() === '' ||
            author.trim() === '' ||
            genre.trim() === '' ||
            description.trim() === '' ||
            datePurchased.trim() === '' ||
            dateFinishedReading.trim() === '' ||
            format === ''
        ) {
            setMessage('Please fill out all required fields.');
            setAlertVariant('danger');
            scrollToTop();
        } else {
            try {
                const {data, error} = await supabase
                    // eslint-disable-next-line no-unused-vars

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
                setInsertSuccess(true);
                resetForm();
                setMessage('Book added successfully.');

                setAlertVariant("success");
                scrollToTop();

                setTimeout(() => {
                    setInsertSuccess(false);
                }, 3000);
            } catch (error) {
                console.log("This is the error:" + error.message);
                setMessage('An error occurred while adding the book.');
                setAlertVariant("danger");
                scrollToTop();
                console.error('Error:', error);
            }
        }
    };

    return (
        <Container>
            {insertSuccess && (
                <Alert variant={alertVariant}>
                    {message}
                </Alert>
            )}

            {!insertSuccess && message && (
                <Alert variant={alertVariant}>
                    {message}
                </Alert>
            )}

            <Row>
                <Col xs={12} md={8}>
                    <h3>Add Book For Supabase Database</h3>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type = "text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type = "text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        type = "text"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as = "textarea"
                        id="description"
                        value={description}
                        rows={3}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Label>Date Purchased</Form.Label>
                    <Form.Control
                        type = "date"
                        id="datePurchased"
                        value={datePurchased}
                        onChange={(e) => setDatePurchased(e.target.value)}
                    />
                    <Form.Label>Date Finished Reading</Form.Label>
                    <Form.Control
                        type = "date"
                        id="dateFinishedReading"
                        value={dateFinishedReading}
                        onChange={(e) => setDateFinishedReading(e.target.value)}
                    />
                    <Form.Label>Personal Notes</Form.Label>
                    <Form.Control
                        as = "textarea"
                        id="personalNotes"
                        value={personalNotes}
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

        </Container>

    );
}

export default CreateBook;
