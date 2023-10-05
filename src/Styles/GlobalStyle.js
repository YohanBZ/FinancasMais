import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    list-style:none;
    border:0;  
    box-sizing: border-box;
  }

  body{
    width: 100%;
    min-height: 100vh;
  }

  li{
    list-style-type: none;
  }

  a, button{
    cursor: pointer;
  }

  h2{
    color: ${(props) => props.theme.blue[700]};
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  h3{
    color: ${(props) => props.theme.blue[900]};
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p {
    color: ${(props) => props.theme.blue[900]};
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  .paragraph{
    color: ${(props) => props.theme.blue[900]};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  a {
    color: ${(props) => props.theme.blue[500]};
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }

  .link{
    color: ${(props) => props.theme.white[50]};
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
`;
