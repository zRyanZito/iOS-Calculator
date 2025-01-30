import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    background: radial-gradient(circle, rgba(84,0,133,1) 0%, rgba(46,0,78,1) 100%);
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);