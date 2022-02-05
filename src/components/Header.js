import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

const Header = () => {
    return (
        <header>
            <Navbar className="nav" expand="lg">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to ="/pokemons">
                            <Nav.Link href="#pokemons">Pokemons</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to ="/favorites">
                            <Nav.Link href="#favorites">Favorites</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
        </header>
    );
};

export default Header;