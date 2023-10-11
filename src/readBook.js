import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { supabase } from './supabaseClient';
import { Alert } from 'react-bootstrap';

function ReadBook() {
    const [books, setBooks] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedBook, setSelectedBook] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch existing books from the database and populate the books state.
        const fetchBooks = async () => {
            const { data, error } = await supabase.from('readbooks').select('*');
            if (error) {
                console.error('Error fetching books:', error);
            } else {
                setBooks(data);
            }
        };

        fetchBooks();
    }, [updateSuccess]);

    const handleEdit = (book) => {
        setEditMode(true);
        setSelectedBook(book);
    };

    const handleSave = async () => {
        const { data, error } = await supabase
            .from('readbooks')
            .update({
                title: selectedBook.title,
                author: selectedBook.author,
                genre: selectedBook.genre,
                description: selectedBook.description,
                date_purchased: selectedBook.date_purchased,
                date_finished_reading: selectedBook.date_finished_reading,
                format_options: selectedBook.format_options,
                personal_notes: selectedBook.personal_notes,
            })
            .eq('id', selectedBook.id);
        if (error) {
            console.error('Error updating book:', error);
            setMessage('An error occurred while updating the book.');
            setAlertVariant('danger');
        } else {
            setEditMode(false);
            setUpdateSuccess(true);
            setMessage('Book updated successfully.');
            setAlertVariant('success');
        }
    };

    return (
        <Container>
            {updateSuccess && (
                <Alert variant={alertVariant}>
                    {message}
                </Alert>
            )}

            <Row>
                <Col xs={12} md={8}>
                    <h3>Read Books</h3>
                    {books.length === 0 ? (
                        <p>No books to display.</p>
                    ) : (
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    {editMode && selectedBook.id === book.id ? (
                                        <>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    value={selectedBook.title}
                                                    onChange={(e) => setSelectedBook({ ...selectedBook, title: e.target.value })}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    value={selectedBook.author}
                                                    onChange={(e) => setSelectedBook({ ...selectedBook, author: e.target.value })}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    value={selectedBook.genre}
                                                    onChange={(e) => setSelectedBook({ ...selectedBook, genre: e.target.value })}
                                                />
                                            </td>
                                            <td>
                                                <Button variant="success" onClick={handleSave}>
                                                    Save
                                                </Button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.genre}</td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleEdit(book)}>
                                                    Edit
                                                </Button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ReadBook;
