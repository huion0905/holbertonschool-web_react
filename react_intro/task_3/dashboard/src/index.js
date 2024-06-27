import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div className="root-app">
        <App />
      </div>
      <div className="root-notifications">
        <Notifications />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
