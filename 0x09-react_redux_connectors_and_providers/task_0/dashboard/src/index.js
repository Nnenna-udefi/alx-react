import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore } from 'redux';
import uiReducer from './reducers/uiReducer';
import { Provider } from 'react-redux';

const store = createStore(uiReducer);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
