import styled from 'styled-components';

const Container = styled.div`
width:400px;
height:220px;
background:#fff;
border-top:3px solid red;
border: 1px solid #000;
border-top-color: #C2C2C2;
border-top-width: 6px;
margin:8px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    h1{
        font-family: 'Open Sans', sans-serif;
        font-size:16px;
    }
`;

const Row = styled.div`
display:flex;
    h1{
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        font-weight: normal;
        margin-left: 8px;
        margin-right: 8px;
    }
`

export { Container, Row }