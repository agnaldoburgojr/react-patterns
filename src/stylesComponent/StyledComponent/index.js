import React from 'react';

import art from '../../assets/art.gif';

import { Container, Card, Title, CardContent, CardFooter } from './styles';

export default function StyledComponent() {
  return (
    <Container>
      <Card>
        <img src={art} alt="art" />
        <div>
          <Title>Frases inspiradoras</Title>
          <CardContent>
            <p>A simplicidade é o último grau de sofisticação</p>
            <span>Leonardo da Vinci</span>
          </CardContent>
          <CardFooter>
            <h4>Continuar</h4>
          </CardFooter>
        </div>
      </Card>
    </Container>
  );
}
