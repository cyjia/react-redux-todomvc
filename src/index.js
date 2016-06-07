import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { fetchTodos } from './actions';

import App from './components/app';
require('todomvc-app-css/index.css');

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchTodos());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("root"));
