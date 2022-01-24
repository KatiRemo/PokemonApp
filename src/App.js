import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Header from './components/Header';
import PokeCard from './components/PokeCard';
import Footer from './components/Footer';

import axios from 'axios';

const App = () => {
 const [pokemons, setPokemons] = useState();
 const [isLoading, setIsLoading] = useState(true);
//  const [inputData, setInputData] = useState ('');

//  useEffect(() => {
//    axios.get('https://pokeapi.co/api/v2/pokemon')
//    .then(res => setPokemons(res.data.results));
//   //  add another axios with new api and promiseAll 
//  }, []);

// useEffect(() => {
//   console.log('EFFECT IS ON')
// }, [inputData]) //first part ()=> {} is doing something and the second part is why we're doing it. Having the empty array makes sure the useEffect is not funning on infinite loop and the effect is run only once. Change is not done only when there is data input.


useEffect(() => {
  axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => { console.log(res.data);


    const fetches = res.data.results.map((p) =>
      axios.get(p.url).then((res) => res.data)
    );

    Promise.all(fetches).then((data) => {
      setPokemons(data);
      setIsLoading(false);
    });
  });
}, []); // here is the empty string for useEffect

  return (
    <div>
      <Header />
      <Container>
        <Row 
          xs={2} 
          md={4} 
          lg={5} 
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && (
            <Spinner animation="border" variant="danger" size="l" role="status">
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}

            {!isLoading &&
            pokemons.map((pokemon) => (
              <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              />
            ))}
            
          </Row>
          <Button bg="dark" type="submit" className='submit'>
            {/* < fetch href ={'"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"'}/> */}
            Get next set of Pokemons</Button>
        </Container>
        <Footer />
    </div>
  );
};

export default App;

// use important as little as possible. Like NEVER