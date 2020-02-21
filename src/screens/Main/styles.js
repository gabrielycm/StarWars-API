import styled, { css } from 'styled-components'
import starbg from '../../assets/images/stargif.gif'

const Container = styled.div`
min-width:10vw;
background-image: url(${starbg});
background-repeat:no-repeat;
background-size:cover;
height:98.4vh;
padding-top:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    #Page{
        color:#696969;
    }
`

const MyLogo = styled.img`
width: 35%;
height: 26%;
${props => props.mobile && css`
width: 60%;
height: 20%;
`}
`


export { Container, MyLogo, }