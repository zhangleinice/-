// import { createStore, compose, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(
    rootReducer
)

export default store;