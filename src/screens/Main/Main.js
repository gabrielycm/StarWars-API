import React, { useState } from 'react';
import { Container, MyLogo } from './styles';
import { MyIcon } from '../../assets/Constants/const.style'
import { useMedia } from '../../hooks/useMedia'
import starlogo from '../../assets/images/Starlogo.png'
import icon from '../../assets/images/icons8-menu.png'
import dartBlack from '../../assets/images/dartIcon.png'
import MyMenu from '../../Components/Menu/Menu';

export default function Main() {
    const { isMedium, isSmall} = useMedia()
    const [showMenu, setShowMenu] = useState(false)
  
    const toggleMenu = ()=>{
        console.log('CLICADO')
        setShowMenu(!showMenu)
    }
    return (
    <Container>
        <MyIcon onClick={()=> toggleMenu()} mobile={isMedium + isSmall} src={icon} alt=""/>
        <MyLogo mobile={isMedium + isSmall} src={starlogo} alt=""/>
        
        
        <MyMenu
        dartBlack={dartBlack}
        main
        show={showMenu}
        close={toggleMenu}/>
    </Container>
  );
}
