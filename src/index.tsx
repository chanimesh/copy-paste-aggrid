import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LicenseManager } from '@ag-grid-enterprise/core';


LicenseManager.setLicenseKey(`${process.env.REACT_APP_AG_GRID_LICENCE_KEY}`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
