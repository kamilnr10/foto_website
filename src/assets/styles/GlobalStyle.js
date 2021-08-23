import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    color: white;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
