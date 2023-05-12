import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './Pages/Register';
import Login from './Pages/Login'
import reportWebVitals from './reportWebVitals';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

reportWebVitals();
