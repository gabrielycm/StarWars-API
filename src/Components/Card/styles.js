import styled, { css } from 'styled-components';

const Container = styled.div`
min-width:300px;
min-height:220px;
background:#fff;
border-top:3px solid red;
border: 1px solid #000;
border-top-color: #C2C2C2;
border-top-width: 6px;
margin:8px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
${props => props.planet && css`
min-height:400px;
width:400px;
p{
    margin:2px;
    padding:5px;
}
`}
${props => props.films && css`
width:400px;
min-height:650px;
`}
${props => props.species && css`
width:400px;
min-height:450px;
`}
${props => props.starships && css`
width:400px;
min-height:650px;
p{
    margin:2px;
    padding:5px;
}
`}
${props => props.vehicles && css`
width:400px;
min-height:500px;
p{
    margin:2px;
    padding:5px;
}
`}
`;

const Content = styled.div`
display:flex;
width:80%;
height:80%;
flex-direction:column;
align-items:center;
`

export { Container, Content }