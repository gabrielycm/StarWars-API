import styled, { css } from 'styled-components'

const Container = styled.div`
width:20vw;
height:100vh;
position:absolute;
left:${props=> props.show ? '0px' : '-700px'};
top:0px;
background-color:${props=> props.main ? 'white' : 'black'};
transition-property: left;
transition-duration: 0.8s;
border-top-right-radius:35px;
border-bottom-right-radius:35px;
position:fixed;
${props=> props.mobile && css`
width:80vw;
`}
`

const Content = styled.div`
width:100%;
height:80%;
`

const MyIcon = styled.img`
width:51px;
cursor:pointer;
${props => props.mobile && css`
position:absolute;
left:5px;
top:5px;
width:13%; 

`}
`

const Text = styled.h1`
font-size:10px;
margin-top:-2px;
margin-left:10px;
width:30px;
text-align:center;
color:${props=> props.main ? 'black' : 'white'}
`

const List = styled.ul`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
margin-left:-40px;
a{
    text-decoration:none;
    color:${props=> props.main ? 'black' : 'white'};
    border-bottom: 1px solid ${props=> props.main ? 'black' : 'white'};
    padding-top:30px;
    padding-bottom:20px;
    width:100%;
    text-align:center;
    :hover{
        background:${props => props.main ? '#403A3A' : '#D2D2D2'};
        color:${props => props.main? 'white' : 'black'}
    }
    li{
        list-style-type:none;
    }
}
`
export { Container, Content, MyIcon, Text, List}