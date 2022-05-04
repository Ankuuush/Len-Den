import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container,Navbar,Button } from 'react-bootstrap';
const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="apply">Apply Now</Nav.Link>
                        <Nav.Link href="application">Loan Application</Nav.Link>
                        <Nav.Link href="lend">Loan Requests</Nav.Link>
                    </Nav>
                    <Button variant="outline-primary">Logout</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar