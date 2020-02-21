import React from 'react';
import { Container, Content, MyIcon, Text, List} from './styles';

import dartIcon2 from '../../assets/images/dartIcon2.png'
import { Link } from 'react-router-dom';
import { useMedia } from '../../hooks/useMedia';

const MyMenu =(props)=> {
const { isSmall, isMedium } = useMedia()
  return (
    <Container main={props.main} mobile={isSmall + isMedium} show={props.show}>
        <Content>
            <div>
                <MyIcon onClick={props.close} src={props.dartBlack || dartIcon2}/>
                <Text main={props.main}>close</Text>
            </div>
            <List main={props.main}>
                <Link to="/"><li>Principal</li></Link>
                <Link to="/Peoples"><li>Pessoas</li></Link>
                <Link to="/Planets"><li>Planetas</li></Link>
                <Link to="/Films"><li>Filmes</li></Link>
                <Link to="/Species"><li>Espécies</li></Link>
                <Link to="/Vehicles"><li>Veiculos</li></Link>
                <Link to="/Starships"><li>Naves</li></Link>
            </List>
        </Content>
    </Container>
  );
}

export default MyMenu