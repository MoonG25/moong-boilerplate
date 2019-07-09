import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as reducers from './reducers';

export const history = createBrowserHistory();

export default function configureStore() {
  return createStore(
    combineReducers(
      {
        ...reducers,
        router: connectRouter(history)
      }
    ),
    composeWithDevTools(
      applyMiddleware(
        logger,
        thunk,
        routerMiddleware(history)
      )
    )
  )
}