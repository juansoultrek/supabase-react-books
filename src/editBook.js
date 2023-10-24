import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button, Table, Alert } from 'react-bootstrap';
import { supabase } from './supabaseClient';

function EditBook() {
    const [books, setBooks] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedBook, setSelectedBook] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {

            const { data, error } = await supabase.from('readbooks').select('*');// eslint-disable-line no-unused-vars
            if (error) {
                console.error('Error fetching books:', error);
            } else {
                setBooks(data);
            }
        };

        fetchBooks();
    }, [updateSuccess]); // Update the effect dependency

    const handleEdit = (book) => {
        setEditMode(true);
        // Clone the book object to avoid modifying the original book
        setSelectedBook({ ...book });
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
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
            scrollToTop();
        } else {
            setEditMode(false);
            setUpdateSuccess(true);
            setMessage('Book updated successfully.');
            setAlertVariant('success');
            scrollToTop();
        }
    };

    return (
        <Container>
            {updateSuccess && (
                <Alert variant={alertVariant}>
                    {message}
                </Alert>
            )}

            {!updateSuccess && message && (
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
                                <th>Description</th>
                                <th>Date Purchased</th>
                                <th>Date Finished Reading</th>
                                <th>Format Options</th>
                                <th>Personal Notes</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    <td>
                                        {editMode && selectedBook.id === book.id ? (
                                            <Form.Control
                                                type="text"
                                                value={selectedBook.title}
                                                onChange={(e) => setSelectedBook({ ...selectedBook, title: e.target.value })}
                                            />
                                        ) : (
                                            book.title
                                        )}
                                    </td>
                                    <td>
                                        {editMode && selectedBook.id === book.id ? (
                                            <Form.Control
                                                type="text"
                                                value={selectedBook.author}
                                                onChange={(e) => setSelectedBook({ ...selectedBook, author: e.target.value })}
                                            />
                                        ) : (
                                            book.author
                                        )}
                                    </td>
                                    <td>
                                        {editMode && selectedBook.id === book.id ? (
                                            <Form.Control
                                                type="text"
                                                value={selectedBook.genre}
                                                onChange={(e) => setSelectedBook({ ...selectedBook, genre: e.target.value })}
                                            />
                                        ) : (
                                            book.genre
                                        )}
                                    </td>
                                    <td>
                                        {editMode && selectedBook.id === book.id ? (
                                            <Form.Control
                                                as="textarea"
                                                value={selectedBook.description}
                                                onChange={(e) => setSelectedBook({ ...selectedBook, description: e.target.value })}
                                            />
                                        ) : (
                                            book.description
                                        )}
                                    </td>
                                    <td>
                                        {editMode && selectedBook.id === book.id ? (
                                            <Form.Control
                                                type="date"
                                                value={selectedBook.date_purchased}
                                                onChange={(e) => setSelectedBook({ ...selectedBook, date_purchased: e.target.value })}
                                            />
                                        ) : (
                                            book.date_purchased
                                        )}
                                    </td>
                                    <td>
                                        {editMode && selectedBook.id === book.id ? (
                                            <Form.Control
                                                type="date"
                                                value={selectedBook.date_finished_reading}
                                                onChange={(e) => setSelectedBook({ ...selectedBook, date_finished_reading: e.target.value })}
                                            />
                                        ) : (
                                            book.date_finished_reading
                                        )}
                                    </td>
                                    <td>
                                        {editMode ? (
                                            <Form.Control
                                                as="select"
                                                value={selectedBook.format_options} // Set the value based on the selected book
                                                onChange={(e) =>
                                                    setSelectedBook({
                                                        ...selectedBook,
                                                        format_options: e.target.value,
                                                    })
                                                }
                                            >
                                                <option value="physical">Physical</option>
                                                <option value="digital">Digital</option>
                                            </Form.Control>
                                        ) : (
                                            book.format_options
                                        )}
                                    </td>
                                    <td>
                                        {editMode && selectedBook.id === book.id ? (
                                            <Form.Control
                                                as="textarea"
                                                value={selectedBook.personal_notes}
                                                onChange={(e) => setSelectedBook({ ...selectedBook, personal_notes: e.target.value })}
                                            />
                                        ) : (
                                            book.personal_notes
                                        )}
                                    </td>
                                    <td>
                                        {editMode && selectedBook.id === book.id ? (
                                            <Button variant="success" onClick={handleSave}>
                                                Save
                                            </Button>
                                        ) : (
                                            <Button variant="primary" onClick={() => handleEdit(book)}>
                                                Edit
                                            </Button>
                                        )}
                                    </td>
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

export default EditBook;

