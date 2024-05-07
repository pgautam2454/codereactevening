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
import Mylogin from './modules/auth/Mylogin';
import Myregister from './modules/auth/Myregister';
import Mylanding from './modules/dashboard/Mylanding';
import Mycard from './modules/dashboard/Mycard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Mylogin></Mylogin>
    <Myregister></Myregister> */}
    <Mylanding></Mylanding>
    <Mycard></Mycard>
  </React.StrictMode>
);


reportWebVitals();
