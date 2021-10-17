import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    
  }
  
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    color: #444444;
  }
  

  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  
h1 {
  color: #fe95d5;
}

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
