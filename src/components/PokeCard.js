import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

const PokeCard = ({name, image}) => {
    return (
            <Card bg="danger" text="dark" key={name}>
                <Card.Header><strong>{name}</strong></Card.Header>
                <Card.Body>
                  <Card.Img
                  variant="top" src={image} />
                  <LinkContainer to="/pokemonName">
                  <Button variant="outline-dark" size="sm">Details
                  </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
    );
};

export default PokeCard;