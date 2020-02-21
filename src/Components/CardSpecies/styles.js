import styled from 'styled-components';

const Container = styled.div`
width:300px;
height:400px;
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
        color:#403A37;
    }
`;

const List = styled.ul`
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
width:80%;
min-height:10%;
margin-top:2px;
    li{
        font-size:14px;
        padding-top:10px;
        padding-bottom:10px;
        color:#36312E;
        list-style:none;
        text-align:start;
    }
`

export { Container, List }