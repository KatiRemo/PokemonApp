import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';

const App = () => {
 const [pokemons, setPokemons] = useState();
 const [isLoading, setIsLoading] = useState(true);

//  useEffect(() => {
//    axios.get('https://pokeapi.co/api/v2/pokemon')
//    .then(res => setPokemons(res.data.results));
//   //  add another axios with new api and promiseAll 
//  }, []);

useEffect(() => {
  console.log('EFFECT IS ON')
}, []) //first part ()=> {} is doing something and the second part is why we're doing it. Having the empty array makes sure the useEffect is not funning on infinite loop

useEffect(() => {
  axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
    const fetches = res.data.results.map((p) =>
      axios.get(p.url).then((res) => res.data)
    );

    Promise.all(fetches).then((data) => {
      setPokemons(data);
      setIsLoading(false);
    });
  });
}, []);

  return (
    <div>
       <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#">Pokemon App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row 
          xs={2} 
          md={4} 
          lg={5} 
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}

            {!isLoading &&
            pokemons.map((pokemon) => (
              <Card bg="dark" text="light" key={pokemon.name}>
                <Card.Header>{pokemon.name}</Card.Header>

                <Card.Body>
                  <Card.Img
                  variant="top"
                  src={pokemon.sprites.other.dream_world.front_default}
                  />
                </Card.Body>
              </Card>
            ))}
          </Row>
          <Button bg="dark" type="submit" className='submit'>
            {/* < useEffect href ={'https://pokeapi.co/api/v2/pokemon/'}/> */}
            Get next set of Pokemons</Button>
        </Container>
    </div>
  );
};

export default App;

// use important as little as possible. Like NEVER