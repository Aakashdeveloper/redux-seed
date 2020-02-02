import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise';
import reducers from '../reducers';

let store = createStore(reducers,applyMiddleware(promiseMiddleWare))

export default store;