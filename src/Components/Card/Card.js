import React from 'react';

import { Container, Content } from './styles';

export default function Card(props) {
  return (
    <Container 
    planet={props.planet}
    films={props.films}
    species={props.species}
    starships={props.starships}
    vehicles={props.vehicles}
    >
      <Content>
        {props.children}
      </Content>
    </Container>
  );
}
