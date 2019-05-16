import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as showcaseReducer } from './showcase/reducer'
import { reducer as somethingReducer } from './something/reducer'
import { reducer as commonReducer } from './common/reducer'

export const initStore = (initialState) => {
  return createStore(combineReducers({
    showcaseReducer,
    somethingReducer,
    commonReducer,
  }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
