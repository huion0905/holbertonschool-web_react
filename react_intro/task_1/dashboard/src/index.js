import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const rootNotifications = document.createElement('div');
rootNotifications.id = 'root-notifications';
document.body.insertBefore(rootNotifications, document.getElementById('root'));

const rootNotif = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotif.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

reportWebVitals();
