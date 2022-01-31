import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function getPokemon(pokemonName) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
}

const PokeSingle = () => {
    let { pokemonName, image, ability } = useParams();

    return (
        <Card bg="danger" text="dark">
            <Card.Header><strong>{pokemonName}</strong></Card.Header>
                <Card.Body>
                  <Card.Img
                  variant="top" src={image} />
                  <p>Ability: {ability}</p>
                  </Card.Body>
        </Card>
    );
};

export default PokeSingle;