import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage.jsx';
import { GlobalStyle } from './Styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { ThemeStyle } from './Styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeStyle}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
);
