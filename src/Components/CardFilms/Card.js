import React from 'react';

import { Container, List } from './styles';

export default function Card(props) {
  return (
    <Container>
        <h1>{props.name}</h1>
          <List>
            <li>{props.first}</li>
            <li>{props.second}</li>
            <li>{props.third}</li>
            <li>{props.fourth}</li>
          </List>
    </Container>
  );
}
