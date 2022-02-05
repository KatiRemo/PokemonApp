import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import {Star, StarFill} from 'react-bootstrap-icons';

const PokeCard = ({name, image, pokemonName, fav, favClick}) => {
    return (
            <Card className="pokeCard" key={name}>
                <Card.Header className='d-flex justify-content-between'>
                  <strong>{name}</strong>
                  {fav? (
                    <StarFill onClick={favClick} size="25" color="yellow" />
                  ) : (
                    <Star onClick={favClick} size="25" color="black" />
                  )}
                  </Card.Header>
                <Card.Body>
                  <Card.Img
                  variant="top" src={image} />
                  <LinkContainer to={`/${pokemonName}`}>
                  <Button className='details' variant="outline-dark" size="sm">Details
                  </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
    );
};

export default PokeCard;