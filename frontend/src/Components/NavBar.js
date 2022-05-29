import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container,Navbar,Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/apply">Apply Now</Nav.Link>
                        <Nav.Link as={Link} to="/applications">My Applications</Nav.Link>
                        <Nav.Link as={Link} to="/lend">Loan Requests</Nav.Link>
                    </Nav>
                    <Button variant="outline-primary">Logout</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar