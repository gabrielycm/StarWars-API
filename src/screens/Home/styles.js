import styled from 'styled-components'

const Container = styled.div`
min-width:10vw;
background:#f1f1f1;
min-height:10vh;
padding-top:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    #Page{
        color:#696969;
    }
`
const Content = styled.div`
width:100%;
height:100%;
display:flex;
flex-flow: row wrap;
justify-content:center;
align-items:center;
`
const LoadingContainer = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#f1f1f1;
`

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


export { Container, Content, LoadingContainer, ButtonContainer, Button }