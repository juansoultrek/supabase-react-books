import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { supabase } from './supabaseClient';

function ReadBook() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch existing books from the database and populate the books state.
        const fetchBooks = async () => {
            const { data, error } = await supabase.from('readbooks').select('*');
            if (error) {
                console.error ('Error fetching books:', error);
            } else {
                setBooks(data);
            }
        };

        fetchBooks();
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Read Books</h3>
                    {books.length === 0 ? (
                        <p>No books to display.</p>
                    ) : (
                        <Table striped bordered hover style={{ width: '100%' }}>
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
                            </tr>
                            </thead>
                            <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.description}</td>
                                    <td>{book.date_purchased}</td>
                                    <td>{book.date_finished_reading}</td>
                                    <td>{book.format_options}</td>
                                    <td>{book.personal_notes}</td>
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
