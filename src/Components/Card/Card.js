import React from 'react';

import { Container, ColorList, Row } from './styles';

export default function Card(props) {
  return (
    <Container>
        <h1>{props.name}</h1>
        <br/>
        <Row>
            <h1>Gender:{props.gender}</h1>
            <h1>Height:{props.height}</h1>
        </Row>
        <Row>
            <h1>Hair:{props.hair_color}</h1>
            <h1>Skin:{props.skin_color}</h1>
            <h1>Eye:{props.eye_color}</h1>
        </Row>
    
    </Container>
  );
}
