import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const rootElement = document.getElementById('root');
const notificationsElement = document.getElementById('root-notifications');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(notificationsElement).render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);


