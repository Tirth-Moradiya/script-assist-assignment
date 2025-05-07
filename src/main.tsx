// main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Only this one at the top level
import App from './App';

ReactDOM.render(
  <BrowserRouter>  {/* Ensure BrowserRouter is here at the top level only */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
