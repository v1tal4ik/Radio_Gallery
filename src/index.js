import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import createStore from './store';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
