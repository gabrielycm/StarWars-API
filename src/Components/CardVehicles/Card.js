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
            <li>{props.fifth}</li>
            <li>{props.sixth}</li>
            <li>{props.seventh}</li>
            <li>{props.eighth}</li>
            <li>{props.ninth}</li>
            <li>{props.tenth}</li>
          </List>
    </Container>
  );
}
