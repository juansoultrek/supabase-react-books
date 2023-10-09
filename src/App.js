import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navBar'; // Make sure to import your NavBar component
import CreateBook from './createBook';
function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/create" element={<CreateBook />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;