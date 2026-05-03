import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { supabase } from './supabaseClient';
import './readBook.css';

function ReadBook() {
    console.log('api_url-->' +process.env.REACT_APP_SUPABASE_CLIENT_URL);

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
        <Container className="read-books-container">
            <Row className="justify-content-center">
                <Col xs={12} lg={11} xl={10}>
                    <div className="books-header">
                        <h2 className="books-title">📚 My Reading Library</h2>
                        <p className="books-subtitle">A collection of books I've read and loved</p>
                    </div>
                    
                    {books.length === 0 ? (
                        <div className="no-books-message">
                            <p>No books to display yet. Start adding your reading journey!</p>
                        </div>
                    ) : (
                        <div className="table-wrapper">
                            <Table hover className="modern-table">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Genre</th>
                                    <th>Description</th>
                                    <th>Purchased</th>
                                    <th>Finished</th>
                                    <th>Format</th>
                                    <th>Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {books.map((book) => (
                                    <tr key={book.id}>
                                        <td className="book-title">{book.title}</td>
                                        <td>{book.author}</td>
                                        <td><span className="genre-badge">{book.genre}</span></td>
                                        <td className="description">{book.description}</td>
                                        <td>{book.date_purchased}</td>
                                        <td>{book.date_finished_reading}</td>
                                        <td><span className="format-badge">{book.format_options}</span></td>
                                        <td className="notes">{book.personal_notes}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ReadBook;
