import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import ShoppingContextProvider from './Context/Shopping_Context';
import ThemeContextProvider from './Context/Theme_Context'; // Import the theme context provider

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ShoppingContextProvider>
        <App />
      </ShoppingContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
