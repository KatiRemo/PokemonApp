import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import PokeCard from './PokeCard';
import Loader from './Loader';

const PokeList = () => {
    const [pokemons, setPokemons] = useState();
    const [isLoading, setIsLoading] = useState(true);

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
            <Container>
        <Row 
          xs={2} 
          md={4} 
          lg={5} 
          className="justify-content-between my-5 d-flex gap-3"
        >

            {isLoading && <Loader /> }
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
            Get next set of Pokemons</Button>
        </Container>
        </div>
    );
};

export default PokeList;