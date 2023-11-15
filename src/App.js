import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './navBar';
import CreateBook from './createBook';
import ReadBook from './readBook';
import EditBook from './editBook';
import LoginBook from './loginBook';
import ProtectedRoute from './protectedRoute';
import EnvVariablesDisplay from './EnvVariablesDisplay';


function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/books/env" element={<EnvVariablesDisplay />}/>

                    <Route path="/books/create" element={<ProtectedRoute element={<CreateBook />} />} />
                    <Route path="/books/read" element={<ReadBook />} />
                    <Route path="/books/edit" element={<ProtectedRoute element={<EditBook />} />} />
                    <Route path="/books/login" element={<LoginBook />} />
                    <Route path="/books/*" element={<Navigate to="/books/read" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
