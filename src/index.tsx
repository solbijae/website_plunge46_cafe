import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import mediaQueries from './styles/MediaQuery';
import { ThemeConfig } from './styles/ThemeConfig';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider theme={{ ...ThemeConfig, mediaQueries }}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);
