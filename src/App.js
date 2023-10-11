import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './navBar'; // Make sure to import your NavBar component
import CreateBook from './createBook';
import ReadBook from "./readBook";
function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/create" element={<CreateBook />} />
                    <Route path="/read" element={<ReadBook />} />
                    <Route path="/edit" element={<ReadBook />} />
                    <Route path="*" element={<Navigate to="/read" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;