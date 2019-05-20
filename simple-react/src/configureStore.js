import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './reducers';

export default function configureStore() {
  return createStore(
    combineReducers(
      {
        ...reducers,
      }
    ),
    composeWithDevTools(
      applyMiddleware(
        logger,
        thunk
      )
    )
  )
}