import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className='cards' style={{display: 'grid', gridgap: '1rem', margin: '20px'}}>
      <Card style={{ width: '18rem', backgroundColor: 'black', color: 'whitesmoke' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='LA'/>
        <Card.Body>
          <Card.Title>Los Angeles</Card.Title>
          <Card.Text>
          Los Angeles (L.A.), officially the City of Los Angeles, is a city in Southern California, in the United States.
          </Card.Text>
          <Button variant="primary" style={{backgroundColor: 'whitesmoke', color: 'black'}}>More about LA</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', backgroundColor: 'black', color: 'whitesmoke' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='LA'/>
        <Card.Body>
          <Card.Title>Los Angeles</Card.Title>
          <Card.Text>
          Los Angeles (L.A.), officially the City of Los Angeles, is a city in Southern California, in the United States.
          </Card.Text>
          <Button variant="primary" style={{backgroundColor: 'whitesmoke', color: 'black'}}>More about LA</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', backgroundColor: 'black', color: 'whitesmoke' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='LA'/>
        <Card.Body>
          <Card.Title>Los Angeles</Card.Title>
          <Card.Text>
          Los Angeles (L.A.), officially the City of Los Angeles, is a city in Southern California, in the United States.
          </Card.Text>
          <Button variant="primary" style={{backgroundColor: 'whitesmoke', color: 'black'}}>More about LA</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', backgroundColor: 'black', color: 'whitesmoke' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='LA'/>
        <Card.Body>
          <Card.Title>Los Angeles</Card.Title>
          <Card.Text>
          Los Angeles (L.A.), officially the City of Los Angeles, is a city in Southern California, in the United States.
          </Card.Text>
          <Button variant="primary" style={{backgroundColor: 'whitesmoke', color: 'black'}}>More about LA</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', backgroundColor: 'black', color: 'whitesmoke' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='LA'/>
        <Card.Body>
          <Card.Title>Los Angeles</Card.Title>
          <Card.Text>
          Los Angeles (L.A.), officially the City of Los Angeles, is a city in Southern California, in the United States.
          </Card.Text>
          <Button variant="primary" style={{backgroundColor: 'whitesmoke', color: 'black'}}>More about LA</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', backgroundColor: 'black', color: 'whitesmoke' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='LA'/>
        <Card.Body>
          <Card.Title>Los Angeles</Card.Title>
          <Card.Text>
          Los Angeles (L.A.), officially the City of Los Angeles, is a city in Southern California, in the United States.
          </Card.Text>
          <Button variant="primary" style={{backgroundColor: 'whitesmoke', color: 'black'}}>More about LA</Button>
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
};

export default App;

// use important as little as possible. Like NEVER