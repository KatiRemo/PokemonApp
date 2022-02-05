import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import PokeCard from '../components/PokeCard';
import Loader from '../components/Loader';

const PokeList = ({favHandler, favorites}) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [nextPokemons, setNextPokemons] = useState("https://pokeapi.co/api/v2/pokemon/");

    useEffect(() => {
      getPokemons();  
      }, []); 

      const getPokemons = () => {
        axios.get(nextPokemons).catch(error => {
            console.log(error);
        }).then((res) => { 
          const fetches = res.data.results.map((p) =>
            axios.get(p.url).then((res) => res.data)
          );

          setNextPokemons(res.data.next);
        //   setPreviousPokemons(res.data.next);
      
          Promise.all(fetches).then((data) => {
            setPokemons((prevState) => [...prevState, ...data]);
        });
            setIsLoading(false);
        });
      }

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
              pokemonName={pokemon.name}
              fav={favorites.some(item => item.name == pokemon.name)}
              favClick={() => favHandler(pokemon)}
              />
            ))}
          </Row>
        </Container>
        <Button className="next" variant="outline-dark" size="lg" onClick={getPokemons}>
            Next Pokemons
        </Button>
        </div>
    );
};

export default PokeList;