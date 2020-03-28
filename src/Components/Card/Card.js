import React from 'react';

import { Container, Row } from './styles';

export default function Card(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}
