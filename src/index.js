import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { fetchTodos } from './actions';

import App from './components/app';
require('todomvc-app-css/index.css');

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
};

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
store.dispatch(fetchTodos());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("root"));
