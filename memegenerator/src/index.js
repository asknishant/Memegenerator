import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Meme } from'./Meme/Meme'
import { App } from './App/App' // Component that does not have a default export
import { BrowserRouter as Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <Meme />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
