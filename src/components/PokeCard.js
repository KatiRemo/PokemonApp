import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import {SuitHeart, SuitHeartFill} from 'react-bootstrap-icons';

const PokeCard = ({name, image, pokemonName, fav, favClick}) => {
    return (
            <Card bg="danger" text="dark" key={name}>
                <Card.Header className='d-flex justify-content-between'>
                  <strong>{name}</strong>
                  {fav? (
                    <SuitHeartFill onClick={favClick} size="25" color="black" />
                  ) : (
                    <SuitHeart onClick={favClick} size="25" color="black" />
                  )}
                  </Card.Header>
                <Card.Body>
                  <Card.Img
                  variant="top" src={image} />
                  <LinkContainer to={`/${pokemonName}`}>
                  <Button variant="outline-dark" size="sm">Details
                  </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
    );
};

export default PokeCard;