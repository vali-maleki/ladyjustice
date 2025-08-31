import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', Arial, sans-serif;
    background: #fff;
    margin: 0;
    color: #232b52;
  }
  h1, h2, h3 {
    font-weight: 700;
    margin-bottom: 12px;
  }
  /* Add more base styles as needed */
  a {
    text-decoration: none;
    color: inherit;
  }
`;
