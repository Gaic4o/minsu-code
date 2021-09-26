import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './layouts/App/App';


axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'http://18.116.24.82/' : 'http://localhost:3000';
  console.log('env', process.env.NODE_ENV === 'production');
render(
<BrowserRouter>
<App />
</BrowserRouter>, 
document.querySelector('#app'));