import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const App = () => {
 const [pokemons, setPokemons] = useState('wow I am state');

  return (
    <div>
       <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
      <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3" />

          <Card bg="dark" text="light">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='LA'/>
            <Card.Body>
              <Card.Title>{pokemons}</Card.Title>
              <Card.Text>
                Los Angeles (L.A.), officially the City of Los Angeles, is a city in Southern California, in the United States.
              </Card.Text>
              <Button variant="light" size="md">More about LA</Button>
            </Card.Body>
            </Card>

        </Container>
    </div>
  );
};

export default App;

// use important as little as possible. Like NEVER