import React from 'react';
import Card from 'react-bootstrap/Card';

const PokeCard = ({name, image}) => {
    return (
            <Card bg="danger" text="dark" key={name}>
                <Card.Header><strong>{name}</strong></Card.Header>
                <Card.Body>
                  <Card.Img
                  variant="top" src={image} />
                </Card.Body>
              </Card>
    );
};

export default PokeCard;