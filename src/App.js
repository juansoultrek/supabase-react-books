import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
      <Navbar>
          <Container>
              <Navbar.Brand>My Personal Library</Navbar.Brand>
              <Nav>
                  <Nav.Item>Created by Juan</Nav.Item>
              </Nav>
          </Container>
      </Navbar>
  );
}

export default App;
