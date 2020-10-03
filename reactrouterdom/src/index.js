import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Navbar} from './App';
import './App.css';


ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
