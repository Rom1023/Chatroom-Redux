// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/App';
import '../assets/stylesheets/application.scss';

// Reducers
import messagesReducer from './reducers/messagesReducer';
// import channelsReducer from './reducers/channelsReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
// import currentUserReducer from './reducers/currentUserReducer';

const initialState = {
  messages: [],
  channels: ['general', 'react', 'montreal'],
  currentUser: prompt('Please enter your username') || `Anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const identityReducer = (state = null) => {
  return state;
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: identityReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
