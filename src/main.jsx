import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import App from './App.jsx';
import './index.css';
import ShoppingContextProvider from './Context/Shoppping_Context'; // Adjust path as per your project structure

ReactDOM.createRoot(document.getElementById('root')).render(  
  
    <ShoppingContextProvider>
      <App />
    </ShoppingContextProvider>
  
);
