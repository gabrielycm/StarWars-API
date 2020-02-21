import styled, {css} from 'styled-components'

const ButtonContainer = styled.div`
height:80px;
min-width:98.9vw;
display:flex;
justify-content:space-between;
align-items:center;
background:#c1c1c1;
margin-top:20px;
`

const Button = styled.button`
margin-left:10px;
margin-right:10px;
height:50px;
width:100px;
background:white;
border:2px solid #C2C2C2;
outline:none;
cursor:${props => props.disabled ? 'not-allowed' : 'pointer'};
`

const MyIcon = styled.img`
position:absolute;
left:5px;
top:5px;
width:4%;
cursor:pointer;
${props => props.mobile && css`
position:absolute;
left:5px;
top:5px;
width:13%; 

`}
`

export { ButtonContainer, Button, MyIcon }