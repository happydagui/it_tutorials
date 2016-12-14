import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import HelloTime from './HelloTime';
import Incrementor from './Incrementor';
import './index.css';

ReactDOM.render(
  <Incrementor initial={100} />,
  document.getElementById('root')
);
