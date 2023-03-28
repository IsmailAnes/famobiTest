import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import  postReducer from './reducer/post'

const reducers = combineReducers({
  postReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
);
