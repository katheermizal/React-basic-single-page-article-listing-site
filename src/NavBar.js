import React from 'react';
import { 
    Navbar,
    Nav,
    Container,
 } from 'react-bootstrap';

const NavBar = () => (
    <Navbar  bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/articles-list">Articles</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavBar;