import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

const appRoot = ReactDOM.createRoot(root);
appRoot.render(
    <Provider store={store}>
          <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
);

