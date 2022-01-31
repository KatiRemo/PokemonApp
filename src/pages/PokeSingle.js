import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { Button } from 'react-bootstrap';

const PokeSingle = () => {
    let { pokemonName } = useParams();
    let navigate = useNavigate();
    
    const [pokemon, setPokemon] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .catch(error => {
            console.log(error);
        })
        .then((res) => {
            setPokemon(res.data);
            setIsLoading(false);
        });
        console.log(pokemon);
    }, [])

    return (
        <div className='pokemonData'>
            {isLoading && <Loader />}
            {!isLoading && (
            <div className='single'>
                <h2>{pokemonName}</h2>
                <img src={pokemon.sprites.other.dream_world.front_default} />
                <p>Base Experience: {pokemon.base_experience}</p>
                <p>Height: {pokemon.height}0 cm</p>
                <p>Weight: {pokemon.weight} kg</p>
                <p>
                    Types: {" "}
                    <ul>
                    {pokemon.types.map((item) => (
                        <li key={item.type.name}>{item.type.name}</li>
                    ))}
                    </ul>
                </p>
                <p>
                    Abilities: {" "}
                    <ul>
                    {pokemon.abilities.map((item) => (
                        <li key={item.ability.name}>{item.ability.name}</li>
                    ))}
                    </ul>
                </p>
                <Button onClick={() => navigate(-1)} variant="outline-dark" size="sm">
                      Back to List
                  </Button>
            </div>
            )}
               
        </div>
    );
};

export default PokeSingle;