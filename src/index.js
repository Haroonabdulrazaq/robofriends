import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import rootReducer from './reducers/rootReducer';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();
