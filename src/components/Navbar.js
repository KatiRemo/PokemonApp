import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Nav = () => {
    return (
    <nav>
        <ul>
        <Navbar bg="dark" variant="dark" >
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            </Container>
      </Navbar>
        </ul>
    </nav>
    );
};

export default Nav;