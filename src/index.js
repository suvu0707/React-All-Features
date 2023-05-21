import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mystore from './Redux/store';

import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Mystore}>
      <App />
      </Provider>
  </React.StrictMode>,
);


reportWebVitals();

// localStorage.clear();

 