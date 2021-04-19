import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const NewNavbar = () => {
    return(
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Evan Furniss</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NewNavbar;