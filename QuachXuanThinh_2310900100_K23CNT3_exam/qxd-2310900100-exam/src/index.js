import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import QxtApp from './QxtApp';


const qxtRoot = ReactDOM.createRoot(document.getElementById('qxtRoot'));
qxtRoot.render(
  <React.StrictMode>
    <QxtApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
