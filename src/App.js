import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './navBar';
import CreateBook from './createBook';
import ReadBook from './readBook';
import EditBook from './editBook';
import LoginBook from './loginBook';
import ProtectedRoute from './protectedRoute';  // Assuming you have a ProtectedRoute component

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/create" element={<ProtectedRoute element={<CreateBook />} />} />
                    <Route path="/read" element={<ReadBook />} />
                    <Route path="/edit" element={<ProtectedRoute element={<EditBook />} />} />
                    <Route path="/login" element={<LoginBook />} />
                    <Route path="*" element={<Navigate to="/read" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
