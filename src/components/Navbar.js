import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Nav = () => {
    return (
    <nav>
        <ul>
        <Navbar bg="danger" text="dark">
            <Container>
            <Navbar.Brand href="/"><strong>Home</strong></Navbar.Brand>
            </Container>
      </Navbar>
        </ul>
    </nav>
    );
};

export default Nav;