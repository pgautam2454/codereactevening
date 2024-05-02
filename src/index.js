import React from 'react';
import ReactDOM from 'react-dom/client';
import Myhome from "./page/Home";
import About from './page/About';
import Mybootstappage from './page/Mybootstappage';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Mybootstappage></Mybootstappage>
    <Myhome></Myhome>
    <About></About>
  </React.StrictMode>
);


reportWebVitals();
