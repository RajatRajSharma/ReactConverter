import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Components from app.js ,with the help of Index.js will be taken to the mentioned element
// strict mode is on below
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);  /* It say's that where ever there is id=root put the app component there of app.js  */


reportWebVitals();
