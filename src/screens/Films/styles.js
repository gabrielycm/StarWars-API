import styled, { css } from 'styled-components'

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
${props => props.erro && css`
height:100vh;
`}
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

const MyIcon = styled.img`
position:absolute;
left:5px;
top:5px;
width:4%;
${props => props.mobile && css`
position:absolute;
left:5px;
top:5px;
width:13%; 

`}
`

const MyLogo = styled.img`
width: 35%;
height: 26%;
${props => props.mobile && css`
width: 60%;
height: 20%;
`}
`

export { Container, Content, MyIcon, MyLogo, LoadingContainer }